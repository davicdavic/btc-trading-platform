const state = {
    token: localStorage.getItem('btctrade_token') || '',
    user: null,
    wallet: null,
    market: null,
    news: [],
    admin: null,
    chatOpen: false,
    adminOpen: false,
    currentPage: 'home',
    timeRange: '1h',
    chartFrameId: null,
    tradingViewReady: false
};

document.addEventListener('DOMContentLoaded', async () => {
    initNavigation();
    initRouter();
    initTimeSelector();
    initChat();
    await bootstrapApp();
});

async function bootstrapApp() {
    await Promise.all([refreshMarket(), loadNews()]);

    if (state.token) {
        try {
            await loadCurrentUser();
            await Promise.all([loadWalletSummary(), loadTrades(), loadAdminDashboard()]);
        } catch (_error) {
            logout(false);
        }
    }

    renderAuthState();
    updateWalletPanels();
    renderCurrentPage();
}

async function api(path, options = {}) {
    const headers = {
        ...(options.body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
        ...(options.headers || {})
    };

    if (state.token) {
        headers.Authorization = `Bearer ${state.token}`;
    }

    const response = await fetch(path, {
        ...options,
        headers
    });

    const contentType = response.headers.get('content-type') || '';
    const payload = contentType.includes('application/json')
        ? await response.json()
        : await response.text();

    if (!response.ok) {
        throw new Error(payload.error || 'Request failed.');
    }

    return payload;
}

function setAuthSession(token, user) {
    state.token = token;
    state.user = user;
    localStorage.setItem('btctrade_token', token);
}

function clearAuthSession() {
    state.token = '';
    state.user = null;
    state.wallet = null;
    state.admin = null;
    localStorage.removeItem('btctrade_token');
}

async function loadCurrentUser() {
    const payload = await api('/api/auth/me');
    state.user = payload.user;
    fillProfileForms();
}

async function loadWalletSummary() {
    if (!state.user || state.user.role !== 'user') return;
    state.wallet = await api('/api/wallet/summary');
    updateWalletPanels();
}

async function loadTrades() {
    if (!state.user || state.user.role !== 'user') return;
    const trades = await api('/api/trades');
    if (!state.wallet) {
        state.wallet = { transactions: [], deposits: [], withdrawals: [], stakes: [] };
    }
    state.wallet.trades = trades;
    updateWalletPanels();
}

async function loadNews() {
    state.news = await api('/api/news');
    renderNews();
}

async function loadAdminDashboard() {
    if (!state.user || state.user.role !== 'admin') return;
    state.admin = await api('/api/admin/dashboard');
    renderAdminDashboard();
}

async function refreshMarket() {
    try {
        state.market = await api('/api/market/ticker');
        updateMarketDisplays();
        await loadChartData(state.timeRange);
        renderOrderBook();
    } catch (_error) {
        setStatus('tradeMeta', 'Live market data is temporarily unavailable.');
    }

    setTimeout(refreshMarket, 10000);
}

async function loadChartData(interval) {
    const klines = await api(`/api/market/klines?interval=${interval}&limit=60`);
    drawChart(klines);
}

function drawChart(klines) {
    const canvas = document.getElementById('tradingChart');
    const loading = document.getElementById('chartLoading');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const container = canvas.parentElement;
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    const width = canvas.width;
    const height = canvas.height;
    const padding = 28;
    const volumeHeight = 72;
    const chartHeight = height - volumeHeight - padding * 2;

    const highs = klines.map((entry) => entry.high);
    const lows = klines.map((entry) => entry.low);
    const volumes = klines.map((entry) => entry.volume);
    const maxPrice = Math.max(...highs);
    const minPrice = Math.min(...lows);
    const priceRange = maxPrice - minPrice || 1;
    const maxVolume = Math.max(...volumes) || 1;
    const candleWidth = Math.max((width - padding * 2) / klines.length - 4, 3);

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#1E2026';
    ctx.fillRect(0, 0, width, height);

    ctx.strokeStyle = '#2E3138';
    ctx.lineWidth = 1;
    for (let i = 0; i < 5; i++) {
        const y = padding + (i / 4) * chartHeight;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();

        const labelPrice = maxPrice - (i / 4) * priceRange;
        ctx.fillStyle = '#848E9C';
        ctx.font = '12px Roboto Mono';
        ctx.fillText(`$${labelPrice.toFixed(0)}`, 6, y + 4);
    }

    klines.forEach((candle, index) => {
        const x = padding + index * ((width - padding * 2) / klines.length) + 2;
        const openY = padding + ((maxPrice - candle.open) / priceRange) * chartHeight;
        const closeY = padding + ((maxPrice - candle.close) / priceRange) * chartHeight;
        const highY = padding + ((maxPrice - candle.high) / priceRange) * chartHeight;
        const lowY = padding + ((maxPrice - candle.low) / priceRange) * chartHeight;
        const isUp = candle.close >= candle.open;
        const color = isUp ? '#0ECB81' : '#F6465D';

        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(x + candleWidth / 2, highY);
        ctx.lineTo(x + candleWidth / 2, lowY);
        ctx.stroke();

        ctx.fillStyle = color;
        const bodyTop = Math.min(openY, closeY);
        const bodyHeight = Math.max(Math.abs(closeY - openY), 2);
        ctx.fillRect(x, bodyTop, candleWidth, bodyHeight);

        const volumeBarHeight = (candle.volume / maxVolume) * (volumeHeight - 12);
        ctx.globalAlpha = 0.35;
        ctx.fillRect(x, height - padding - volumeBarHeight, candleWidth, volumeBarHeight);
        ctx.globalAlpha = 1;
    });

    if (loading) loading.style.display = 'none';
}

function updateMarketDisplays() {
    if (!state.market) return;

    const priceText = `$${formatNumber(state.market.price, 2)}`;
    const changeText = `${state.market.priceChangePercent >= 0 ? '+' : ''}${state.market.priceChangePercent.toFixed(2)}%`;
    const positiveClass = state.market.priceChangePercent >= 0 ? 'positive' : 'negative';

    setText('heroPrice', priceText);
    setText('chartPrice', priceText);
    setText('chartChange', changeText);
    setText('high24h', `$${formatNumber(state.market.high24h, 2)}`);
    setText('low24h', `$${formatNumber(state.market.low24h, 2)}`);
    setText('volume24h', `${formatNumber(state.market.volume24h, 2)} BTC`);
    setText('marketCap', `$${formatNumber(state.market.quoteVolume / 1e9, 2)}B`);
    setText('homeMarketPrice', priceText);
    setText('homeMarketChange', changeText);

    const heroChange = document.querySelector('.ticker-change');
    const chartChange = document.getElementById('chartChange');
    if (heroChange) {
        heroChange.textContent = changeText;
        heroChange.className = `ticker-change ${positiveClass}`;
    }
    if (chartChange) {
        chartChange.className = `pair-change ${positiveClass}`;
    }
}

function renderOrderBook() {
    if (!state.market) return;
    const asksContainer = document.getElementById('orderAsks');
    const bidsContainer = document.getElementById('orderBids');
    if (!asksContainer || !bidsContainer) return;

    const asks = [];
    const bids = [];

    for (let i = 0; i < 8; i++) {
        asks.push({
            price: state.market.price + 10 + i * 6 + Math.random() * 4,
            amount: (Math.random() * 1.25 + 0.05).toFixed(3)
        });
        bids.push({
            price: state.market.price - 10 - i * 6 - Math.random() * 4,
            amount: (Math.random() * 1.25 + 0.05).toFixed(3)
        });
    }

    asksContainer.innerHTML = asks.map((ask) => `
        <div class="order-row ask">
            <span>${formatNumber(ask.price, 2)}</span>
            <span>${ask.amount}</span>
        </div>
    `).join('');

    bidsContainer.innerHTML = bids.map((bid) => `
        <div class="order-row bid">
            <span>${formatNumber(bid.price, 2)}</span>
            <span>${bid.amount}</span>
        </div>
    `).join('');

    setText('spreadValue', `$${formatNumber(asks[0].price - bids[0].price, 2)}`);
}

function initNavigation() {
    document.querySelectorAll('[data-page-link]').forEach((link) => {
        link.addEventListener('click', () => {
            const page = link.dataset.pageLink;
            navigateToPage(page);
        });
    });
}

function initRouter() {
    window.addEventListener('hashchange', renderCurrentPage);
}

function getPageFromHash() {
    const match = window.location.hash.match(/^#\/([a-z-]+)/i);
    return match ? match[1] : 'home';
}

function navigateToPage(page) {
    window.location.hash = `/${page}`;
}

function renderCurrentPage() {
    const requestedPage = getPageFromHash();
    const availablePages = ['home', 'trade', 'deposit', 'withdraw', 'profile', 'admin'];
    let nextPage = availablePages.includes(requestedPage) ? requestedPage : 'home';

    if (nextPage === 'admin' && state.user?.role !== 'admin') {
        nextPage = 'home';
    }

    state.currentPage = nextPage;

    document.querySelectorAll('[data-app-page]').forEach((section) => {
        section.classList.toggle('is-active', section.dataset.appPage === nextPage);
    });

    document.querySelectorAll('[data-page-link]').forEach((link) => {
        link.classList.toggle('active', link.dataset.pageLink === nextPage);
        link.classList.toggle('is-hidden', link.dataset.pageLink === 'admin' && state.user?.role !== 'admin');
    });

    const footer = document.querySelector('.footer');
    if (footer) {
        footer.style.display = nextPage === 'admin' ? 'none' : '';
    }

    if (nextPage === 'admin' && state.user?.role === 'admin') {
        state.adminOpen = true;
        document.getElementById('adminOverlay').classList.add('active');
    } else {
        state.adminOpen = false;
        document.getElementById('adminOverlay').classList.remove('active');
    }
}

function initTimeSelector() {
    document.querySelectorAll('.time-btn').forEach((button) => {
        button.addEventListener('click', async () => {
            document.querySelectorAll('.time-btn').forEach((entry) => entry.classList.remove('active'));
            button.classList.add('active');
            state.timeRange = button.dataset.range;
            await loadChartData(state.timeRange);
        });
    });
}

function initChat() {
    const badge = document.getElementById('chatBadge');
    if (badge) badge.style.display = 'none';
}

function renderAuthState() {
    const loggedIn = Boolean(state.user);
    const isAdmin = state.user?.role === 'admin';

    toggleDisplay('navAccountSummary', loggedIn && !isAdmin);
    toggleDisplay('loginNavBtn', !loggedIn);
    toggleDisplay('registerNavBtn', !loggedIn);
    toggleDisplay('profileNavBtn', loggedIn && !isAdmin);
    toggleDisplay('logoutNavBtn', loggedIn);
    toggleDisplay('adminToggle', isAdmin);

    if (!loggedIn) {
        setText('kycStatusBanner', 'Please log in.');
        setText('accountSummary', 'Create an account to unlock wallet tracking, staking, KYC, and transaction history.');
        setText('profileHeroName', 'Guest User');
        setText('profileUserId', 'User ID: ---');
    } else if (isAdmin) {
        setText('accountSummary', 'Admin account active. Open the admin panel to review deposits, withdrawals, KYC, and trades.');
        setText('profileTradingStatus', 'Admin mode active.');
    } else {
        setText('accountSummary', `${state.user.fullName} | KYC: ${humanizeStatus(state.user.kyc.status)}`);
        setText('kycStatusBanner', humanizeStatus(state.user.kyc.status));
        setText('profileTradingStatus', state.user.kyc.status === 'verified'
            ? 'Trading enabled. You can use the Trade page.'
            : `KYC ${humanizeStatus(state.user.kyc.status)}. Trading unlocks after verification.`);
        setText('profileHeroName', state.user.fullName);
        setText('profileUserId', `User ID: ${state.user.userTag}`);
        setProfileAvatar(state.user);
    }

    renderCurrentPage();
}

function updateWalletPanels() {
    if (!state.user || !state.wallet) {
        setText('balanceAmount', '0.000000');
        setText('balanceUSD', '$0.00 USD');
        setText('walletSnapshot', 'USD 0.00 | BTC 0.000000');
        setText('latestTrade', 'No trades yet.');
        setText('walletAddress', 'bc1qucksaf3gmjd658ljucux49092zh6xw4uqacn9a');
        setText('walletAddressLabel', 'Ready');
        setText('depositStatus', 'Login to request a BTC deposit.');
        setText('profileWalletSummary', 'USD 0.00 | BTC 0.000000');
        setText('navUsdBalance', '$0.00');
        setText('withdrawPageBalance', '0.000000 BTC');
        setText('withdrawPagePending', '0.000000');
        setText('withdrawPageInfo', 'No pending withdrawal request.');
        setText('withdrawStatusBanner', 'Login to access the withdrawal page.');
        renderTransactionHistory([]);
        renderWithdrawHistory([]);
        return;
    }

    const { balances, deposits, withdrawals, transactions, stakes, depositWalletAddress } = state.wallet;
    const pendingDeposits = deposits.filter((entry) => entry.status === 'pending')
        .reduce((sum, entry) => sum + entry.amount, 0);
    const pendingDepositUsd = deposits
        .filter((entry) => entry.status === 'pending')
        .reduce((sum, entry) => sum + (entry.amount * (state.market?.price || 0)), 0);
    const pendingWithdrawals = withdrawals.filter((entry) => entry.status === 'pending')
        .reduce((sum, entry) => sum + entry.amount, 0);

    setText('balanceAmount', balances.btc.toFixed(6));
    setText('balanceUSD', `$${formatNumber(balances.usd, 2)} USD`);
    setText('navUsdBalance', `$${formatNumber(balances.usd, 2)}`);
    setText('walletSnapshot', `USD ${formatNumber(balances.usd, 2)} | BTC ${balances.btc.toFixed(6)}`);
    setText('earningsAmount', `${pendingDeposits.toFixed(6)} BTC`);
    setText('perSecond', `$${formatNumber(pendingDepositUsd, 2)}`);
    setText('walletAddress', depositWalletAddress);
    setText('walletAddressLabel', 'Copy and send');
    setText('elapsedTime', `${deposits.length} deposits`);
    setText('totalTime', `${withdrawals.length} withdrawals`);
    setText('depositStatus', latestWalletStatus(deposits, withdrawals, stakes));
    setText('latestTrade', formatLatestTrade(state.wallet.trades || []));
    setText('profileWalletSummary', `USD ${formatNumber(balances.usd, 2)} | BTC ${balances.btc.toFixed(6)}`);
    setText('withdrawPageBalance', `${balances.btc.toFixed(6)} BTC`);
    setText('withdrawPagePending', `${pendingWithdrawals.toFixed(6)}`);
    setText('withdrawPageInfo', withdrawals[0]
        ? `${humanizeStatus(withdrawals[0].status)} | ${new Date(withdrawals[0].createdAt).toLocaleString()}`
        : 'No pending withdrawal request.');
    setText('withdrawDestinationPreview', withdrawals[0]?.walletAddress || 'Destination wallet will appear here');
    setText('withdrawStatusBanner', withdrawals[0]
        ? `Latest withdrawal ${withdrawals[0].status}: ${withdrawals[0].amount.toFixed(6)} BTC`
        : 'Submit a request from this page for a cleaner wallet workflow.');
    renderTransactionHistory(transactions.slice(0, 10), stakes);
    renderWithdrawHistory(withdrawals.slice(0, 10));

    if (!document.getElementById('depositQr').src) {
        generateLocalQr(depositWalletAddress);
    }
}

function renderWithdrawHistory(withdrawals) {
    const history = document.getElementById('withdrawHistory');
    if (!history) return;

    history.innerHTML = withdrawals.map((entry) => `
        <div class="history-item">
            <div>
                <strong>Withdraw ${entry.amount.toFixed(6)} BTC</strong>
                <div class="history-meta">${humanizeStatus(entry.status)} | ${new Date(entry.createdAt).toLocaleString()}</div>
            </div>
            <div>${escapeHtml(entry.walletAddress || '')}</div>
        </div>
    `).join('') || '<div class="history-item"><div>No withdrawal history yet.</div></div>';
}

function latestWalletStatus(deposits, withdrawals, stakes) {
    const latestDeposit = deposits[0];
    if (latestDeposit) {
        if (latestDeposit.status === 'approved') {
            return `Last deposit approved: ${latestDeposit.amount.toFixed(6)} BTC converted to $${formatNumber(latestDeposit.creditedUsdAmount, 2)}`;
        }
        return `Last deposit ${latestDeposit.status}: ${latestDeposit.amount.toFixed(6)} BTC on ${latestDeposit.network}`;
    }
    const latestStake = stakes[0];
    if (latestStake) {
        return `Active stake: ${latestStake.amount.toFixed(6)} BTC | Reward ${latestStake.accruedReward.toFixed(6)} BTC`;
    }
    const latestWithdrawal = withdrawals[0];
    if (latestWithdrawal) {
        return `Last withdrawal ${latestWithdrawal.status}: ${latestWithdrawal.amount.toFixed(6)} BTC`;
    }
    return 'No deposit request yet.';
}

function renderTransactionHistory(transactions, stakes = []) {
    const history = document.getElementById('transactionHistory');
    if (!history) return;

    const stakeRows = stakes.filter((stake) => stake.status === 'active').map((stake) => `
        <div class="history-item">
            <div>
                <strong>Stake ${stake.amount.toFixed(6)} BTC</strong>
                <div class="history-meta">APR ${(stake.apr * 100).toFixed(2)}% | Reward ${stake.accruedReward.toFixed(6)} BTC</div>
            </div>
            <button class="btn btn-outline" onclick="claimStakeReward('${stake.id}')">Claim</button>
        </div>
    `);

    const rows = transactions.map((entry) => `
        <div class="history-item">
            <div>
                <strong>${entry.type.replace(/_/g, ' ').toUpperCase()}</strong>
                <div class="history-meta">${entry.status} | ${new Date(entry.createdAt).toLocaleString()}</div>
            </div>
            <div>${entry.asset} ${Number(entry.amount).toFixed(6)}</div>
        </div>
    `);

    history.innerHTML = [...stakeRows, ...rows].join('') || '<div class="history-item"><div>No transactions yet.</div></div>';
}

function renderNews() {
    const grid = document.getElementById('newsGrid');
    if (!grid) return;

    grid.innerHTML = state.news.map((article, index) => `
        <div class="news-card ${index === 0 ? 'news-featured' : ''}">
            <div class="news-image">
                <img src="${article.imageUrl || 'imgs/news1.png'}" alt="${escapeHtml(article.title)}" loading="lazy" onerror="this.src='imgs/news1.png'">
                ${index === 0 ? '<div class="news-badge">Live</div>' : ''}
            </div>
            <div class="news-content">
                <div class="news-meta">
                    <span class="news-date">${new Date(article.publishedAt).toLocaleDateString()}</span>
                    <span class="news-category">${escapeHtml(article.source)}</span>
                </div>
                <h3 class="news-title">${escapeHtml(article.title)}</h3>
                <p class="news-excerpt">${escapeHtml(article.body.slice(0, 180))}...</p>
                <div class="news-social">
                    <button class="btn btn-ghost" onclick="toggleNewsLike('${article.id}')">${article.likedByUser ? 'Unlike' : 'Like'} (${article.likesCount})</button>
                </div>
                <a href="${article.url}" class="news-link" target="_blank" rel="noopener noreferrer">Read More</a>
            </div>
        </div>
    `).join('');
}

function renderAdminDashboard() {
    if (!state.admin) return;

    const totalDeposits = state.admin.deposits
        .filter((entry) => entry.status === 'approved')
        .reduce((sum, entry) => sum + entry.amount, 0);
    const totalEarnings = state.admin.trades
        .reduce((sum, entry) => sum + entry.usdAmount, 0);

    setText('adminUsers', state.admin.users.length.toLocaleString());
    setText('adminDeposits', `${totalDeposits.toFixed(2)} BTC`);
    setText('adminEarnings', `$${formatNumber(totalEarnings, 2)}`);

    document.getElementById('usersList').innerHTML = state.admin.users.map((user) => `
        <div class="user-row">
            <div class="user-info">
                <div class="user-avatar">${initials(user.fullName)}</div>
                <div class="user-details">
                    <span class="user-name">${escapeHtml(user.fullName)}</span>
                    <span class="user-email">${escapeHtml(user.email)} | KYC: ${humanizeStatus(user.kyc.status)}</span>
                </div>
            </div>
            <div class="user-stats">
                <span class="user-deposit">${user.balances.btc.toFixed(6)} BTC</span>
                <span class="user-earnings positive">$${formatNumber(user.balances.usd, 2)}</span>
            </div>
            <div class="admin-action-row">
                <input class="input" type="number" id="usd-adjust-${user.id}" placeholder="USD +/-">
                <input class="input" type="number" id="btc-adjust-${user.id}" placeholder="BTC +/-">
                <button class="btn btn-primary" onclick="adjustUserBalance('${user.id}')">Adjust</button>
                ${user.kyc.status === 'pending' ? `<button class="btn btn-success" onclick="reviewKyc('${user.id}', 'verified')">Approve KYC</button><button class="btn btn-danger" onclick="reviewKyc('${user.id}', 'rejected')">Reject KYC</button>` : ''}
            </div>
        </div>
    `).join('');

    document.getElementById('pendingDeposits').innerHTML = renderAdminRequests(state.admin.deposits, 'deposit');
    document.getElementById('pendingWithdrawals').innerHTML = renderAdminRequests(state.admin.withdrawals, 'withdrawal');
    document.getElementById('tradeList').innerHTML = state.admin.trades.slice(0, 10).map((trade) => `
        <div class="user-row">
            <div class="user-details">
                <span class="user-name">${trade.side.toUpperCase()} ${trade.btcAmount.toFixed(6)} BTC</span>
                <span class="user-email">$${formatNumber(trade.executionPrice, 2)} | ${trade.priceSource}</span>
            </div>
        </div>
    `).join('') || '<div class="user-row"><div class="user-details"><span class="user-email">No trades yet.</span></div></div>';

    document.getElementById('activityFeed').innerHTML = state.admin.activity.map((item) => `
        <div class="activity-item">
            <span class="activity-time">${new Date(item.createdAt).toLocaleTimeString()}</span>
            <span class="activity-text">${escapeHtml(item.message)}</span>
        </div>
    `).join('');

    document.getElementById('overrideEnabled').checked = Boolean(state.admin.settings.tradeOverride.enabled);
    document.getElementById('overrideBuyPrice').value = state.admin.settings.tradeOverride.buyPrice || '';
    document.getElementById('overrideSellPrice').value = state.admin.settings.tradeOverride.sellPrice || '';
}

function renderAdminRequests(requests, type) {
    const pending = requests.filter((entry) => entry.status === 'pending');
    if (!pending.length) {
        return '<div class="user-row"><div class="user-details"><span class="user-email">No pending requests.</span></div></div>';
    }

    return pending.map((entry) => `
        <div class="user-row">
            <div class="user-details">
                <span class="user-name">${entry.amount.toFixed(6)} BTC</span>
                <span class="user-email">${type === 'deposit' ? escapeHtml(entry.fromWallet || 'No source wallet') : escapeHtml(entry.walletAddress || 'No wallet')}</span>
            </div>
            <div class="admin-action-row">
                <button class="btn btn-success" onclick="reviewAdminRequest('${type}', '${entry.id}', 'approved')">Approve</button>
                <button class="btn btn-danger" onclick="reviewAdminRequest('${type}', '${entry.id}', 'rejected')">Reject</button>
            </div>
        </div>
    `).join('');
}

async function handleRegister(event) {
    event.preventDefault();

    try {
        const result = await api('/api/auth/register', {
            method: 'POST',
            body: JSON.stringify({
                fullName: document.getElementById('registerName').value.trim(),
                email: document.getElementById('registerEmail').value.trim(),
                password: document.getElementById('registerPassword').value
            })
        });

        setAuthSession(result.token, result.user);
        closeModals();
        await afterAuthenticated();
        alert('Account created successfully.');
    } catch (error) {
        alert(error.message);
    }
}

async function handleLogin(event) {
    event.preventDefault();

    const isAdminLogin = document.getElementById('loginAsAdmin').checked;
    const endpoint = isAdminLogin ? '/api/auth/admin/login' : '/api/auth/login';

    try {
        const result = await api(endpoint, {
            method: 'POST',
            body: JSON.stringify({
                email: document.getElementById('loginEmail').value.trim(),
                password: document.getElementById('loginPassword').value
            })
        });

        setAuthSession(result.token, result.user);
        closeModals();
        await afterAuthenticated();
        alert(isAdminLogin ? 'Admin login successful.' : 'Login successful.');
    } catch (error) {
        alert(error.message);
    }
}

async function afterAuthenticated() {
    fillProfileForms();
    await Promise.all([loadWalletSummary(), loadTrades(), loadAdminDashboard(), loadNews()]);
    renderAuthState();
    if (state.user.role === 'admin') {
        navigateToPage('admin');
    } else {
        navigateToPage('profile');
    }
}

async function saveProfile(event) {
    event.preventDefault();
    try {
        const formData = new FormData();
        formData.append('name', document.getElementById('profileName').value.trim());
        formData.append('city', document.getElementById('profileCity').value.trim());
        formData.append('job', document.getElementById('profileJob').value.trim());
        formData.append('postCode', document.getElementById('profilePostCode').value.trim());
        formData.append('country', document.getElementById('profileCountry').value.trim());

        const payload = await api('/api/users/me/settings', {
            method: 'POST',
            body: formData
        });
        state.user = payload.user;
        fillProfileForms();
        renderAuthState();
        closeModals();
        alert('Profile updated.');
    } catch (error) {
        alert(error.message);
    }
}

async function submitKyc(event) {
    event.preventDefault();
    try {
        const formData = new FormData();
        formData.append('name', document.getElementById('kycName').value.trim());
        formData.append('city', document.getElementById('kycCity').value.trim());
        formData.append('job', document.getElementById('kycJob').value.trim());
        formData.append('postCode', document.getElementById('kycPostCode').value.trim());
        formData.append('country', document.getElementById('kycCountry').value.trim());
        formData.append('idType', document.getElementById('kycIdType').value);
        formData.append('document', document.getElementById('kycDocument').files[0]);

        const payload = await api('/api/users/me/kyc', {
            method: 'POST',
            body: formData
        });

        state.user = payload.user;
        fillProfileForms();
        renderAuthState();
        closeModals();
        if (state.user.role === 'admin') {
            await loadAdminDashboard();
        }
        alert('KYC submitted for admin review.');
    } catch (error) {
        alert(error.message);
    }
}

async function submitDeposit() {
    if (!requireUserSession()) return;
    try {
        const result = await api('/api/wallet/deposit', {
            method: 'POST',
            body: JSON.stringify({
                amount: Number(document.getElementById('depositAmount').value),
                txHash: document.getElementById('depositTxHash').value.trim(),
                fromWallet: document.getElementById('depositFromWallet').value.trim()
            })
        });

        document.getElementById('depositQr').src = result.qrCodeDataUrl;
        setText('walletAddress', result.walletAddress);
        setText('walletAddressLabel', result.walletAddress);
        setText('depositStatus', `Deposit request submitted: ${result.request.amount.toFixed(6)} BTC | Pending admin confirmation`);
        await Promise.all([loadWalletSummary(), loadAdminDashboard()]);
        alert('Deposit request submitted.');
    } catch (error) {
        alert(error.message);
    }
}

async function submitWithdrawal() {
    if (!requireUserSession()) return;
    try {
        await api('/api/wallet/withdraw', {
            method: 'POST',
            body: JSON.stringify({
                amount: Number(document.getElementById('withdrawAmount').value),
                walletAddress: document.getElementById('withdrawWallet').value.trim()
            })
        });
        await Promise.all([loadWalletSummary(), loadAdminDashboard()]);
        alert('Withdrawal request submitted for admin confirmation.');
    } catch (error) {
        alert(error.message);
    }
}

async function submitWithdrawalFromPage() {
    const amount = document.getElementById('withdrawPageAmount').value;
    const walletAddress = document.getElementById('withdrawPageWallet').value.trim();
    document.getElementById('withdrawAmount').value = amount;
    document.getElementById('withdrawWallet').value = walletAddress;
    await submitWithdrawal();
}

async function submitStake() {
    if (!requireUserSession()) return;
    try {
        await api('/api/wallet/stake', {
            method: 'POST',
            body: JSON.stringify({
                amount: Number(document.getElementById('stakeAmount').value)
            })
        });
        await loadWalletSummary();
        alert('BTC staked successfully.');
    } catch (error) {
        alert(error.message);
    }
}

async function claimStakeReward(stakeId) {
    try {
        const result = await api(`/api/wallet/stake/${stakeId}/claim`, { method: 'POST' });
        await loadWalletSummary();
        alert(`Claimed ${result.claimed.toFixed(6)} BTC in staking rewards.`);
    } catch (error) {
        alert(error.message);
    }
}

async function submitTrade(side) {
    if (!requireUserSession()) return;
    try {
        const result = await api('/api/trades', {
            method: 'POST',
            body: JSON.stringify({
                side,
                amount: Number(document.getElementById('tradeAmount').value),
                amountType: document.getElementById('tradeAmountType').value
            })
        });
        setStatus('tradeMeta', `${side.toUpperCase()} filled at $${formatNumber(result.trade.executionPrice, 2)} via ${result.trade.priceSource}.`);
        await Promise.all([loadWalletSummary(), loadTrades(), loadAdminDashboard()]);
    } catch (error) {
        alert(error.message);
    }
}

async function toggleNewsLike(articleId) {
    if (!requireUserSession()) return;
    try {
        state.news = await api(`/api/news/${articleId}/like`, { method: 'POST' });
        renderNews();
    } catch (error) {
        alert(error.message);
    }
}

async function submitNewsComment(articleId) {
    if (!requireUserSession()) return;
    try {
        const input = document.getElementById(`comment-${articleId}`);
        state.news = await api(`/api/news/${articleId}/comments`, {
            method: 'POST',
            body: JSON.stringify({ text: input.value.trim() })
        });
        renderNews();
    } catch (error) {
        alert(error.message);
    }
}

async function reviewAdminRequest(type, requestId, status) {
    try {
        const endpoint = type === 'deposit'
            ? `/api/admin/deposits/${requestId}/review`
            : `/api/admin/withdrawals/${requestId}/review`;
        await api(endpoint, {
            method: 'POST',
            body: JSON.stringify({ status })
        });
        await Promise.all([loadAdminDashboard(), loadWalletSummary()]);
    } catch (error) {
        alert(error.message);
    }
}

async function reviewKyc(userId, status) {
    try {
        await api(`/api/admin/kyc/${userId}/review`, {
            method: 'POST',
            body: JSON.stringify({ status })
        });
        await loadAdminDashboard();
    } catch (error) {
        alert(error.message);
    }
}

async function adjustUserBalance(userId) {
    try {
        await api(`/api/admin/users/${userId}/adjust-balance`, {
            method: 'POST',
            body: JSON.stringify({
                usdDelta: Number(document.getElementById(`usd-adjust-${userId}`).value || 0),
                btcDelta: Number(document.getElementById(`btc-adjust-${userId}`).value || 0),
                note: 'Admin dashboard adjustment'
            })
        });
        await loadAdminDashboard();
    } catch (error) {
        alert(error.message);
    }
}

async function saveTradeOverride() {
    try {
        await api('/api/admin/trade-override', {
            method: 'POST',
            body: JSON.stringify({
                enabled: document.getElementById('overrideEnabled').checked,
                buyPrice: document.getElementById('overrideBuyPrice').value,
                sellPrice: document.getElementById('overrideSellPrice').value
            })
        });
        await loadAdminDashboard();
        alert('Trade override updated.');
    } catch (error) {
        alert(error.message);
    }
}

async function saveProfilePage() {
    if (!state.user) return showLogin();
    try {
        const formData = new FormData();
        formData.append('name', document.getElementById('profilePageName').value.trim());
        formData.append('city', document.getElementById('profilePageCity').value.trim());
        formData.append('job', document.getElementById('profilePageJob').value.trim());
        formData.append('postCode', document.getElementById('profilePagePostCode').value.trim());
        formData.append('country', document.getElementById('profilePageCountry').value.trim());
        formData.append('currentPassword', document.getElementById('profileCurrentPassword').value);
        formData.append('newPassword', document.getElementById('profileNewPassword').value);

        const avatarFile = document.getElementById('profileAvatarFile').files[0];
        if (avatarFile) {
            formData.append('avatar', avatarFile);
        }

        const payload = await api('/api/users/me/settings', {
            method: 'POST',
            body: formData
        });
        state.user = payload.user;
        fillProfileForms();
        renderAuthState();
        alert('Profile updated.');
    } catch (error) {
        alert(error.message);
    }
}

function fillProfileForms() {
    if (!state.user) return;
    setInputValue('profileName', state.user.profile.name || state.user.fullName);
    setInputValue('profileCity', state.user.profile.city || '');
    setInputValue('profileJob', state.user.profile.job || '');
    setInputValue('profilePostCode', state.user.profile.postCode || '');
    setInputValue('profileCountry', state.user.profile.country || '');
    setInputValue('profilePageName', state.user.profile.name || state.user.fullName);
    setInputValue('profilePageCity', state.user.profile.city || '');
    setInputValue('profilePageJob', state.user.profile.job || '');
    setInputValue('profilePagePostCode', state.user.profile.postCode || '');
    setInputValue('profilePageCountry', state.user.profile.country || '');
    setInputValue('kycName', state.user.profile.name || state.user.fullName);
    setInputValue('kycCity', state.user.profile.city || '');
    setInputValue('kycJob', state.user.profile.job || '');
    setInputValue('kycPostCode', state.user.profile.postCode || '');
    setInputValue('kycCountry', state.user.profile.country || '');
    setInputValue('kycIdType', state.user.kyc.idType || '');
    setProfileAvatar(state.user);
}

function setProfileAvatar(user) {
    const avatar = document.getElementById('profileAvatar');
    if (!avatar) return;

    if (user?.profile?.avatarPath) {
        avatar.src = user.profile.avatarPath;
        return;
    }

    const initialsValue = initials(user?.fullName || 'BT');
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128">
            <rect width="128" height="128" rx="64" fill="#1E2026"/>
            <text x="50%" y="54%" text-anchor="middle" font-size="42" font-family="Inter, sans-serif" font-weight="700" fill="#F7931A">${initialsValue}</text>
        </svg>
    `;
    avatar.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function generateLocalQr(text) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="180" height="180">
            <rect width="180" height="180" fill="white"/>
            <text x="50%" y="45%" text-anchor="middle" font-size="10" font-family="monospace" fill="black">BTC Wallet</text>
            <text x="50%" y="58%" text-anchor="middle" font-size="8" font-family="monospace" fill="black">${text.slice(0, 16)}...</text>
        </svg>
    `;
    document.getElementById('depositQr').src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function requireUserSession() {
    if (!state.user) {
        showLogin();
        return false;
    }
    if (state.user.role !== 'user') {
        alert('Use a user account for wallet and trading actions.');
        return false;
    }
    return true;
}

function showLogin() {
    closeModals();
    document.getElementById('loginModal').classList.add('active');
}

function showRegister() {
    closeModals();
    document.getElementById('registerModal').classList.add('active');
}

function showProfileModal() {
    if (!state.user) return showLogin();
    closeModals();
    fillProfileForms();
    document.getElementById('profileModal').classList.add('active');
}

function openKycModal() {
    if (!state.user) return showLogin();
    closeModals();
    fillProfileForms();
    document.getElementById('kycModal').classList.add('active');
}

function closeModals() {
    document.querySelectorAll('.modal').forEach((modal) => modal.classList.remove('active'));
}

function logout(showMessage = true) {
    clearAuthSession();
    renderAuthState();
    updateWalletPanels();
    navigateToPage('home');
    if (showMessage) {
        alert('Logged out.');
    }
}

function toggleAdmin() {
    if (!state.user || state.user.role !== 'admin') return;
    navigateToPage(state.currentPage === 'admin' ? 'home' : 'admin');
}

function scrollToSection(id) {
    navigateToPage(id);
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
}

function toggleChat() {
    state.chatOpen = !state.chatOpen;
    const chat = document.getElementById('chatModal');
    chat.classList.toggle('active', state.chatOpen);
    if (state.chatOpen) {
        const badge = document.getElementById('chatBadge');
        badge.textContent = '0';
        badge.style.display = 'none';
    }
}

function handleChatKey(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;

    addChatMessage(message, 'sent');
    input.value = '';

    setTimeout(() => {
        const response = state.user
            ? `Hello ${state.user.fullName.split(' ')[0]}, our demo support team can guide you through deposits, KYC, staking, and trading.`
            : 'Welcome to BTCTrade Support. Create an account or log in to access the full demo trading flow.';
        addChatMessage(response, 'received');
    }, 900);
}

function addChatMessage(text, type) {
    const chatBody = document.getElementById('chatBody');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message message-${type}`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;

    const timeDiv = document.createElement('div');
    timeDiv.className = 'message-time';
    timeDiv.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    messageDiv.appendChild(contentDiv);
    messageDiv.appendChild(timeDiv);
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;

    if (type === 'received' && !state.chatOpen) {
        const badge = document.getElementById('chatBadge');
        badge.textContent = String(Number(badge.textContent || 0) + 1);
        badge.style.display = 'flex';
    }
}

function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
}

function setStatus(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = value;
}

function toggleDisplay(id, visible) {
    const element = document.getElementById(id);
    if (element) {
        element.style.display = visible ? '' : 'none';
    }
}

function setInputValue(id, value) {
    const element = document.getElementById(id);
    if (element) element.value = value;
}

function formatNumber(value, digits) {
    return Number(value || 0).toLocaleString(undefined, {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits
    });
}

function humanizeStatus(status) {
    return String(status || '').replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatLatestTrade(trades) {
    if (!trades.length) return 'No trades yet.';
    const trade = trades[0];
    return `${trade.side.toUpperCase()} ${trade.btcAmount.toFixed(6)} BTC @ $${formatNumber(trade.executionPrice, 2)}`;
}

function initials(name) {
    return String(name || 'NA')
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0].toUpperCase())
        .join('');
}

function escapeHtml(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#39;');
}

window.showLogin = showLogin;
window.showRegister = showRegister;
window.showProfileModal = showProfileModal;
window.openKycModal = openKycModal;
window.closeModals = closeModals;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.saveProfile = saveProfile;
window.submitKyc = submitKyc;
window.submitDeposit = submitDeposit;
window.submitWithdrawal = submitWithdrawal;
window.submitStake = submitStake;
window.claimStakeReward = claimStakeReward;
window.submitTrade = submitTrade;
window.toggleNewsLike = toggleNewsLike;
window.submitNewsComment = submitNewsComment;
window.reviewAdminRequest = reviewAdminRequest;
window.reviewKyc = reviewKyc;
window.adjustUserBalance = adjustUserBalance;
window.saveTradeOverride = saveTradeOverride;
window.logout = logout;
window.toggleAdmin = toggleAdmin;
window.navigateToPage = navigateToPage;
window.scrollToSection = scrollToSection;
window.toggleMobileMenu = toggleMobileMenu;
window.toggleChat = toggleChat;
window.handleChatKey = handleChatKey;
window.sendMessage = sendMessage;
window.submitWithdrawalFromPage = submitWithdrawalFromPage;
window.saveProfilePage = saveProfilePage;
