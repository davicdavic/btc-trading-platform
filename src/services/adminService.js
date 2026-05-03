const { v4: uuidv4 } = require('uuid');
const { readStore, updateStore } = require('./storeService');
const { fetchTicker, setTradeOutcome } = require('./marketService');
const { sanitizeUser } = require('../utils/userView');

function getEntityOrThrow(store, collection, id, message) {
    const entity = store[collection].find((entry) => entry.id === id);
    if (!entity) {
        throw new Error(message);
    }
    return entity;
}

async function getDashboard() {
    const store = await readStore();
    return {
        users: store.users.filter((user) => user.role === 'user').map(sanitizeUser),
        trades: store.trades,
        tradingTrades: store.tradingTrades,
        deposits: store.depositRequests,
        withdrawals: store.withdrawalRequests,
        activity: store.adminActivity.slice(0, 15),
        settings: store.settings
    };
}

async function reviewDeposit(adminId, requestId, status) {
    const ticker = status === 'approved' ? await fetchTicker() : null;
    await updateStore(async (store) => {
        const request = getEntityOrThrow(store, 'depositRequests', requestId, 'Deposit request not found.');
        if (request.status !== 'pending') {
            throw new Error('Deposit request has already been reviewed.');
        }

        const user = store.users.find((entry) => entry.id === request.userId);
        const transaction = store.transactions.find(
            (entry) => entry.meta?.requestId === request.id && entry.type === 'deposit'
        );

        request.status = status;
        request.reviewedBy = adminId;
        request.reviewedAt = new Date().toISOString();
        request.updatedAt = new Date().toISOString();

        if (transaction) {
            transaction.status = status === 'approved' ? 'completed' : 'rejected';
            transaction.updatedAt = new Date().toISOString();
        }

        if (status === 'approved') {
            request.creditedPrice = ticker.price;
            request.creditedUsdAmount = request.amount * ticker.price;
            user.balances.btc += request.amount;
            user.updatedAt = new Date().toISOString();
            if (transaction) {
                transaction.asset = 'BTC';
                transaction.amount = request.amount;
                transaction.meta = {
                    ...transaction.meta,
                    creditedPrice: ticker.price,
                    creditedUsdAmount: request.creditedUsdAmount,
                    network: 'BTC'
                };
            }
        }

        store.adminActivity.unshift({
            id: `deposit-review-${request.id}`,
            message: `Deposit ${request.id} ${status}`,
            createdAt: new Date().toISOString()
        });

        return store;
    });
}

async function reviewWithdrawal(adminId, requestId, status) {
    await updateStore(async (store) => {
        const request = getEntityOrThrow(store, 'withdrawalRequests', requestId, 'Withdrawal request not found.');
        if (request.status !== 'pending') {
            throw new Error('Withdrawal request has already been reviewed.');
        }

        const user = store.users.find((entry) => entry.id === request.userId);
        const transaction = store.transactions.find(
            (entry) => entry.meta?.requestId === request.id && entry.type === 'withdrawal'
        );

        request.status = status;
        request.reviewedBy = adminId;
        request.reviewedAt = new Date().toISOString();
        request.updatedAt = new Date().toISOString();

        if (status === 'approved') {
            if (user.balances.btc < request.amount) {
                throw new Error('User no longer has enough BTC for this withdrawal.');
            }
            // Balance already deducted when withdrawal was created
        }

        if (transaction) {
            transaction.status = status === 'approved' ? 'completed' : 'rejected';
            transaction.updatedAt = new Date().toISOString();
        }

        // If rejected, refund user's balance
        if (status === 'rejected') {
            user.balances.btc += request.amount;
            user.updatedAt = new Date().toISOString();
        }

        store.adminActivity.unshift({
            id: `withdraw-review-${request.id}`,
            message: `Withdrawal ${request.id} ${status}`,
            createdAt: new Date().toISOString()
        });

        return store;
    });
}

async function reviewKyc(adminId, userId, status) {
    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (!user) {
            throw new Error('User not found.');
        }

        user.kyc.status = status;
        user.kyc.reviewedAt = new Date().toISOString();
        user.updatedAt = new Date().toISOString();

        store.adminActivity.unshift({
            id: `kyc-review-${user.id}`,
            message: `KYC for ${user.email} marked ${status}`,
            createdAt: new Date().toISOString()
        });

        return store;
    });
}

async function adjustBalances(adminId, userId, { usdDelta = 0, btcDelta = 0, note = '' }) {
    let updatedUser;

    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (!user) {
            throw new Error('User not found.');
        }

        const nextUsd = user.balances.usd + Number(usdDelta);
        const nextBtc = user.balances.btc + Number(btcDelta);
        if (nextUsd < 0 || nextBtc < 0) {
            throw new Error('Adjustment would make balance negative.');
        }

        user.balances.usd = nextUsd;
        user.balances.btc = nextBtc;
        user.updatedAt = new Date().toISOString();
        updatedUser = sanitizeUser(user);

        if (usdDelta) {
            store.transactions.unshift({
                id: uuidv4(),
                userId,
                type: 'admin_adjustment',
                asset: 'USD',
                amount: Math.abs(Number(usdDelta)),
                usdAmount: Math.abs(Number(usdDelta)),
                status: 'completed',
                meta: {
                    adminId,
                    note,
                    delta: Number(usdDelta)
                },
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });
        }

        if (btcDelta) {
            store.transactions.unshift({
                id: uuidv4(),
                userId,
                type: 'admin_adjustment',
                asset: 'BTC',
                amount: Math.abs(Number(btcDelta)),
                status: 'completed',
                meta: {
                    adminId,
                    note,
                    delta: Number(btcDelta)
                },
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });
        }

        store.adminActivity.unshift({
            id: `adjust-${user.id}-${Date.now()}`,
            message: `Adjusted balances for ${user.email}`,
            createdAt: new Date().toISOString()
        });

        return store;
    });

    return updatedUser;
}

async function updateTradeOverride(adminId, payload) {
    await updateStore(async (store) => {
        store.settings.tradeOverride = {
            enabled: Boolean(payload.enabled),
            buyPrice: payload.buyPrice ? Number(payload.buyPrice) : null,
            sellPrice: payload.sellPrice ? Number(payload.sellPrice) : null,
            direction: payload.direction || null
        };

        store.adminActivity.unshift({
            id: `override-${Date.now()}`,
            message: `Trade override updated by ${adminId}`,
            createdAt: new Date().toISOString()
        });

        return store;
    });
}

// Admin-controlled trade outcome manipulation
async function setTradeOutcomeControl(adminId, tradeId, direction, price) {
    await setTradeOutcome(tradeId, direction, price);

    await updateStore(async (store) => {
        store.adminActivity.unshift({
            id: `trade-outcome-${tradeId}`,
            message: `Trade outcome set: ${direction} at $${price} by admin ${adminId}`,
            createdAt: new Date().toISOString()
        });
        return store;
    });
}

async function setMarketPriceOverride(adminId, { enabled, price, spread }) {
    await updateStore(async (store) => {
        store.settings.marketOverride = {
            enabled,
            price: enabled ? Number(price) : null,
            spread: enabled ? Number(spread) : null,
            updatedAt: new Date().toISOString(),
            updatedBy: adminId
        };

        store.adminActivity.unshift({
            id: `market-override-${Date.now()}`,
            message: `Market price override set to $${price} by admin`,
            createdAt: new Date().toISOString()
        });
        return store;
    });
}

async function adjustUserTradingVolume(adminId, userId, volumeAdjustment) {
    let userData;
    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (!user) throw new Error('User not found.');

        user.tradingVolume = Math.max(0, user.tradingVolume + Number(volumeAdjustment));
        userData = { userTag: user.userTag, tradingVolume: user.tradingVolume };

        store.adminActivity.unshift({
            id: `volume-adjust-${Date.now()}`,
            message: `Trading volume adjustedfor ${user.email}: ${volumeAdjustment > 0 ? '+' : ''}${volumeAdjustment} BTC`,
            createdAt: new Date().toISOString()
        });
        return store;
    });
    return userData;
}

async function setUserVipLevel(adminId, userId, vipLevel) {
    const validLevels = ['bronze', 'silver', 'gold', 'platinum', 'vip'];
    if (!validLevels.includes(vipLevel)) {
        throw new Error('Invalid VIP level.');
    }

    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (!user) throw new Error('User not found.');

        user.vipLevel = vipLevel;
        const feeRates = { bronze: 0.001, silver: 0.0008, gold: 0.0005, platinum: 0.0002, vip: 0 };
        user.makerFee = feeRates[vipLevel];
        user.takerFee = feeRates[vipLevel];

        store.adminActivity.unshift({
            id: `vip-set-${Date.now()}`,
            message: `${user.email} VIP level set to ${vipLevel}`,
            createdAt: new Date().toISOString()
        });
        return store;
    });
}

async function setUserFeeRates(adminId, userId, { makerFee, takerFee }) {
    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (!user) throw new Error('User not found.');

        user.makerFee = Number(makerFee);
        user.takerFee = Number(takerFee);

        store.adminActivity.unshift({
            id: `fees-set-${Date.now()}`,
            message: `Fee rates updated for ${user.email}: Maker ${makerFee}, Taker ${takerFee}`,
            createdAt: new Date().toISOString()
        });
        return store;
    });
}

async function freezeUserAccount(adminId, userId, reason) {
    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (!user) throw new Error('User not found.');

        user.accountFrozen = true;
        user.freezeReason = reason;
        user.frozenAt = new Date().toISOString();
        user.frozenBy = adminId;

        store.adminActivity.unshift({
            id: `user-freeze-${Date.now()}`,
            message: `Account frozen for ${user.email}: ${reason}`,
            createdAt: new Date().toISOString()
        });
        return store;
    });
}

async function unfreezeUserAccount(adminId, userId) {
    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (!user) throw new Error('User not found.');

        user.accountFrozen = false;
        user.freezeReason = null;
        user.frozenAt = null;
        user.frozenBy = null;

        store.adminActivity.unshift({
            id: `user-unfreeze-${Date.now()}`,
            message: `Account unfrozen for ${user.email}`,
            createdAt: new Date().toISOString()
        });
        return store;
    });
}

async function addWithdrawalWhitelist(adminId, userId, { label, walletAddress, network }) {
    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (!user) throw new Error('User not found.');

        if (!user.security) {
            user.security = { twoFactorEnabled: false, twoFactorSecret: '', loginHistory: [], apiKeys: [], withdrawalWhitelist: [] };
        }
        if (!user.security.withdrawalWhitelist) {
            user.security.withdrawalWhitelist = [];
        }

        user.security.withdrawalWhitelist.push({
            id: uuidv4(),
            label,
            walletAddress,
            network: network || 'BTC',
            verified: true,
            verifiedBy: adminId,
            verifiedAt: new Date().toISOString(),
            createdAt: new Date().toISOString()
        });

        store.adminActivity.unshift({
            id: `whitelist-add-${Date.now()}`,
            message: `Withdrawal whitelist added for ${user.email}: ${walletAddress.slice(0, 10)}...`,
            createdAt: new Date().toISOString()
        });
        return store;
    });
}

async function getPlatformStats() {
    const store = await readStore();
    const users = store.users.filter(u => u.role === 'user');

    const totalVolume = store.trades.reduce((sum, t) => sum + t.usdAmount, 0);
    const totalDeposits = store.depositRequests
        .filter(d => d.status === 'approved')
        .reduce((sum, d) => sum + d.amount, 0);
    const totalWithdrawals = store.withdrawalRequests
        .filter(w => w.status === 'approved')
        .reduce((sum, w) => sum + w.amount, 0);

    const verifiedUsers = users.filter(u => u.kyc.status === 'verified').length;
    const pendingKycs = users.filter(u => u.kyc.status === 'pending').length;

    // Trading trade stats
    const completedTradingTrades = store.tradingTrades.filter(t => t.status !== 'pending');
    const tradingWins = completedTradingTrades.filter(t => t.result === 'WIN').length;
    const tradingLosses = completedTradingTrades.filter(t => t.result === 'LOSS').length;
    const tradingVolume = completedTradingTrades.reduce((sum, t) => sum + t.totalStake, 0);

    return {
        totalUsers: users.length,
        verifiedUsers,
        pendingKycs,
        totalVolume: totalVolume.toFixed(2),
        totalDeposits: totalDeposits.toFixed(6),
        totalWithdrawals: totalWithdrawals.toFixed(6),
        totalTrades: store.trades.length,
        pendingDeposits: store.depositRequests.filter(d => d.status === 'pending').length,
        pendingWithdrawals: store.withdrawalRequests.filter(w => w.status === 'pending').length,
        activeStakes: store.stakes.filter(s => s.status === 'active').length,
        marketOverride: store.settings.marketOverride || { enabled: false },
        tradeOverride: store.settings.tradeOverride,
        // Trading trade stats
        totalTradingTrades: completedTradingTrades.length,
        tradingWins,
        tradingLosses,
        tradingWinRate: completedTradingTrades.length > 0 ? (tradingWins / completedTradingTrades.length * 100).toFixed(2) : 0,
        tradingVolume: tradingVolume.toFixed(6),
        pendingTradingTrades: store.tradingTrades.filter(t => t.status === 'pending').length
    };
}

// Get all users with optional filters
async function getAllUsers(status = null) {
    const store = await readStore();
    let users = store.users.filter(u => u.role === 'user');

    if (status) {
        users = users.filter(u => u.kyc.status === status);
    }

    return users.map(u => ({
        id: u.id,
        email: u.email,
        fullName: u.fullName,
        userTag: u.userTag,
        kyc: u.kyc,
        balances: u.balances,
        vipLevel: u.vipLevel || 'bronze',
        totalTrades: u.totalTrades || 0,
        tradingVolume: u.tradingVolume || 0,
        accountFrozen: u.accountFrozen || false,
        createdAt: u.createdAt
    }));
}

// Get pending requests summary
async function getPendingRequests() {
    const store = await readStore();
    return {
        deposits: store.depositRequests.filter(d => d.status === 'pending'),
        withdrawals: store.withdrawalRequests.filter(w => w.status === 'pending'),
        kyc: store.users.filter(u => u.role === 'user' && u.kyc.status === 'pending'),
        tradingTrades: store.tradingTrades.filter(t => t.status === 'pending')
    };
}

// Admin approve deposit directly
async function approveDepositRequest(adminId, requestId) {
    const store = await readStore();
    const request = store.depositRequests.find(d => d.id === requestId);
    if (!request) {
        throw new Error('Deposit request not found.');
    }
    if (request.status !== 'pending') {
        throw new Error('Deposit request has already been reviewed.');
    }

    const ticker = await fetchTicker();
    await reviewDeposit(adminId, requestId, 'approved');
    return { requestId, status: 'approved', price: ticker.price, amount: request.amount };
}

// Admin reject deposit
async function rejectDepositRequest(adminId, requestId, reason) {
    await reviewWithdrawal(adminId, requestId, 'rejected');
    return { requestId, status: 'rejected', reason };
}

// Admin approve withdrawal
async function approveWithdrawalRequest(adminId, requestId) {
    const store = await readStore();
    const request = store.withdrawalRequests.find(w => w.id === requestId);
    if (!request) {
        throw new Error('Withdrawal request not found.');
    }
    if (request.status !== 'pending') {
        throw new Error('Withdrawal request has already been reviewed.');
    }

    await reviewWithdrawal(adminId, requestId, 'approved');
    return { requestId, status: 'approved', amount: request.amount };
}

// Admin reject withdrawal
async function rejectWithdrawalRequest(adminId, requestId, reason) {
    await reviewWithdrawal(adminId, requestId, 'rejected');
    return { requestId, status: 'rejected', reason };
}

module.exports = {
    getDashboard,
    reviewDeposit,
    reviewWithdrawal,
    reviewKyc,
    adjustBalances,
    updateTradeOverride,
    setTradeOutcomeControl,
    setMarketPriceOverride,
    adjustUserTradingVolume,
    setUserVipLevel,
    setUserFeeRates,
    freezeUserAccount,
    unfreezeUserAccount,
    addWithdrawalWhitelist,
    getPlatformStats,
    getAllUsers,
    getPendingRequests,
    approveDepositRequest,
    rejectDepositRequest,
    approveWithdrawalRequest,
    rejectWithdrawalRequest
};
