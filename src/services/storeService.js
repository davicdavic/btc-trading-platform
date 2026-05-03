const fs = require('fs/promises');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const {
    STORE_PATH,
    DEFAULT_ADMIN_EMAIL,
    DEFAULT_ADMIN_PASSWORD,
    BTC_WALLET_ADDRESS,
    DEFAULT_STAKING_APR,
    YEAR_MS
} = require('../config/constants');
const { createUser } = require('../models/storeModel');

let writeQueue = Promise.resolve();

function getEmptyStore() {
    return {
        settings: {
            walletAddress: BTC_WALLET_ADDRESS,
            stakingApr: DEFAULT_STAKING_APR,
            tradeOverride: {
                enabled: false,
                buyPrice: null,
                sellPrice: null
            },
            marketOverride: {
                enabled: false,
                price: null,
                spread: null,
                updatedAt: null,
                updatedBy: null
            },
            platformSettings: {
                minDeposit: 0.001,
                minWithdrawal: 0.001,
                minStake: 0.001,
                maxStake: 1000,
                tradingFeePercent: 0.1,
                stakingRewardPercent: 12
            }
        },
        users: [],
        trades: [],
        tradingTrades: [],
        transactions: [],
        depositRequests: [],
        withdrawalRequests: [],
        stakes: [],
        newsReactions: [],
        adminActivity: []
    };
}

async function readStore() {
    const raw = await fs.readFile(STORE_PATH, 'utf8');
    return JSON.parse(raw);
}

async function queueWrite(store) {
    writeQueue = writeQueue.then(() =>
        fs.writeFile(STORE_PATH, JSON.stringify(store, null, 2))
    );
    return writeQueue;
}

async function updateStore(mutator) {
    const store = await readStore();
    const nextStore = await mutator(store);
    await queueWrite(nextStore);
    return nextStore;
}

async function initializeStore() {
    try {
        await fs.access(STORE_PATH);
    } catch (_error) {
        const baseStore = getEmptyStore();
        await fs.writeFile(STORE_PATH, JSON.stringify(baseStore, null, 2));
    }

    await updateStore(async (store) => {
        if (!Array.isArray(store.users)) {
            Object.assign(store, getEmptyStore(), store);
        }

        store.users = store.users.map((user) => ({
            ...user,
            userTag: user.userTag || `UID-${uuidv4().slice(0, 8).toUpperCase()}`,
            balances: {
                usd: user.balances?.usd ?? (user.role === 'admin' ? 0 : 10000),
                btc: user.balances?.btc ?? 0,
                usdt: user.balances?.usdt ?? 0
            },
            tradingBalances: {
                btc: user.tradingBalances?.btc ?? 0,
                usd: user.tradingBalances?.usd ?? 0
            },
            profile: {
                name: user.profile?.name || user.fullName,
                city: user.profile?.city || '',
                job: user.profile?.job || '',
                postCode: user.profile?.postCode || '',
                country: user.profile?.country || '',
                avatarPath: user.profile?.avatarPath || ''
            },
            kyc: {
                status: user.kyc?.status || 'not_submitted',
                documentPath: user.kyc?.documentPath || '',
                idType: user.kyc?.idType || '',
                submittedAt: user.kyc?.submittedAt || null,
                reviewedAt: user.kyc?.reviewedAt || null
            },
            tradingHistory: user.tradingHistory || [],
            stakingHistory: user.stakingHistory || []
        }));

        const hasAdmin = store.users.some((user) => user.role === 'admin');
        if (!hasAdmin) {
            const passwordHash = await bcrypt.hash(DEFAULT_ADMIN_PASSWORD, 10);
            const adminUser = createUser({
                fullName: 'Platform Admin',
                email: DEFAULT_ADMIN_EMAIL,
                passwordHash,
                role: 'admin'
            });
            store.users.push(adminUser);
            store.adminActivity.unshift({
                id: `seed-${Date.now()}`,
                message: 'Default admin account created',
                createdAt: new Date().toISOString()
            });
        }

        return store;
    });
}

// User Account Management
async function getUserAccount(userId) {
    const store = await readStore();
    const user = store.users.find((entry) => entry.id === userId);
    if (!user) {
        throw new Error('User not found.');
    }
    return {
        id: user.id,
        email: user.email,
        fullName: user.fullName,
        userTag: user.userTag,
        role: user.role,
        balances: user.balances,
        tradingBalances: user.tradingBalances,
        kyc: user.kyc,
        vipLevel: user.vipLevel || 'bronze',
        tradingVolume: user.tradingVolume || 0,
        totalTrades: user.totalTrades || 0,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    };
}

async function updateUserBalances(userId, { btcDelta = 0, usdDelta = 0 }) {
    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (!user) {
            throw new Error('User not found.');
        }
        user.balances.btc = Math.max(0, user.balances.btc + btcDelta);
        user.balances.usd = Math.max(0, user.balances.usd + usdDelta);
        user.updatedAt = new Date().toISOString();
        return store;
    });
}

async function getUserBalance(userId) {
    const store = await readStore();
    const user = store.users.find((entry) => entry.id === userId);
    if (!user) {
        throw new Error('User not found.');
    }
    return user.balances;
}

// Staking with per-second reward accrual
function calculateStakeReward(stake, currentTime = Date.now()) {
    if (stake.status !== 'active') {
        return 0;
    }
    const lastClaim = new Date(stake.lastClaimAt).getTime();
    const elapsedSeconds = (currentTime - lastClaim) / 1000;
    const annualReward = stake.amount * stake.apr;
    const perSecondReward = annualReward / YEAR_MS * 1000;
    return perSecondReward * elapsedSeconds;
}

function buildStakeView(stake, currentTime = Date.now()) {
    return {
        ...stake,
        accruedReward: calculateStakeReward(stake, currentTime),
        effectiveApr: stake.apr * 100,
        nextRewardAt: new Date(stake.lastClaimAt + 1000).toISOString()
    };
}

async function getUserStakes(userId) {
    const store = await readStore();
    const currentTime = Date.now();
    return store.stakes
        .filter((entry) => entry.userId === userId)
        .map((stake) => buildStakeView(stake, currentTime))
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

async function createStake(userId, amount, apr = null) {
    if (amount <= 0) {
        throw new Error('Stake amount must be greater than zero.');
    }

    const store = await readStore();
    const user = store.users.find((entry) => entry.id === userId);
    if (!user) {
        throw new Error('User not found.');
    }
    if (user.balances.btc < amount) {
        throw new Error('Insufficient BTC balance for staking.');
    }

    const stakingApr = apr || store.settings.stakingApr;
    const timestamp = new Date().toISOString();
    const stake = {
        id: uuidv4(),
        userId,
        amount,
        apr: stakingApr,
        status: 'active',
        createdAt: timestamp,
        updatedAt: timestamp,
        lastClaimAt: timestamp,
        totalClaimed: 0
    };

    await updateStore(async(draft) => {
        const draftUser = draft.users.find((entry) => entry.id === userId);
        draftUser.balances.btc -= amount;
        draftUser.updatedAt = timestamp;
        stake.id = uuidv4();
        stake.userId = userId;
        stake.amount = amount;
        stake.apr = stakingApr;
        stake.status = 'active';
        stake.createdAt = timestamp;
        stake.updatedAt = timestamp;
        stake.lastClaimAt = timestamp;
        stake.totalClaimed = 0;
        draft.stakes.unshift(stake);
        draft.transactions.unshift({
            id: uuidv4(),
            userId,
            type: 'stake',
            asset: 'BTC',
            amount,
            status: 'completed',
            meta: { stakeId: stake.id, apr: stakingApr },
            createdAt: timestamp,
            updatedAt: timestamp
        });
        draft.adminActivity.unshift({
            id: `stake-${stake.id}`,
            message: `${user.email} staked ${amount} BTC`,
            createdAt: timestamp
        });
        return draft;
    });

    return buildStakeView(stake);
}

async function claimStakeReward(userId, stakeId) {
    const currentTime = Date.now();
    let rewardAmount = 0;

    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        const stake = store.stakes.find((entry) => entry.id === stakeId && entry.userId === userId);

        if (!user || !stake) {
            throw new Error('Stake not found.');
        }
        if (stake.status !== 'active') {
            throw new Error('This stake is not active.');
        }

        rewardAmount = calculateStakeReward(stake, currentTime);
        if (rewardAmount <= 0.00000001) {
            throw new Error('No rewards available to claim yet.');
        }

        stake.totalClaimed += rewardAmount;
        stake.lastClaimAt = new Date(currentTime).toISOString();
        stake.updatedAt = new Date(currentTime).toISOString();
        user.balances.btc += rewardAmount;
        user.updatedAt = new Date(currentTime).toISOString();

        store.transactions.unshift({
            id: uuidv4(),
            userId,
            type: 'stake_reward',
            asset: 'BTC',
            amount: rewardAmount,
            status: 'completed',
            meta: { stakeId: stake.id },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });

        return store;
    });

    return {
        stakeId,
        claimed: rewardAmount,
        newBalance: (await getUserBalance(userId)).btc
    };
}

async function unstake(userId, stakeId) {
    const currentTime = Date.now();
    let unstakedAmount = 0;

    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        const stake = store.stakes.find((entry) => entry.id === stakeId && entry.userId === userId);

        if (!user || !stake) {
            throw new Error('Stake not found.');
        }
        if (stake.status !== 'active') {
            throw new Error('This stake is not active.');
        }

        const pendingReward = calculateStakeReward(stake, currentTime);
        unstakedAmount = stake.amount;
        stake.status = 'unclaimed';
        stake.updatedAt = new Date(currentTime).toISOString();

        user.balances.btc += unstakedAmount + pendingReward;
        user.updatedAt = new Date(currentTime).toISOString();

        if (pendingReward > 0) {
            stake.totalClaimed += pendingReward;
            store.transactions.unshift({
                id: uuidv4(),
                userId,
                type: 'stake_reward',
                asset: 'BTC',
                amount: pendingReward,
                status: 'completed',
                meta: { stakeId, note: 'Unstake final reward' },
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });
        }

        store.transactions.unshift({
            id: uuidv4(),
            userId,
            type: 'unstake',
            asset: 'BTC',
            amount: unstakedAmount,
            status: 'completed',
            meta: { stakeId },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });

        return store;
    });

    return {
        stakeId,
        unstaked: unstakedAmount,
        finalReward: await claimStakeReward(userId, stakeId).catch(() => 0),
        newBalance: (await getUserBalance(userId)).btc
    };
}

// Trading History
async function getTradingHistory(userId, limit = 50) {
    const store = await readStore();
    return store.tradingTrades
        .filter((entry) => entry.userId === userId)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, limit);
}

async function addTradingHistory(userId, tradeEntry) {
    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (user) {
            if (!user.tradingHistory) {
                user.tradingHistory = [];
            }
            user.tradingHistory.unshift({
                ...tradeEntry,
                createdAt: new Date().toISOString()
            });
            if (user.tradingHistory.length > 100) {
                user.tradingHistory = user.tradingHistory.slice(0, 100);
            }
            user.updatedAt = new Date().toISOString();
        }
        store.tradingTrades.unshift({
            id: uuidv4(),
            userId,
            ...tradeEntry,
            createdAt: new Date().toISOString()
        });
        return store;
    });
}

// Deposit handling
async function createDepositRequest(userId, amount, txHash, fromWallet) {
    if (amount <= 0) {
        throw new Error('Deposit amount must be greater than zero.');
    }

    const store = await readStore();
    const timestamp = new Date().toISOString();
    const request = {
        id: uuidv4(),
        userId,
        amount,
        txHash,
        fromWallet,
        walletAddress: store.settings.walletAddress,
        status: 'pending',
        network: 'BTC',
        creditedUsdAmount: 0,
        creditedPrice: 0,
        createdAt: timestamp,
        updatedAt: timestamp,
        reviewedBy: null,
        reviewedAt: null
    };

    await updateStore(async (draft) => {
        draft.depositRequests.unshift(request);
        draft.transactions.unshift({
            id: uuidv4(),
            userId,
            type: 'deposit',
            asset: 'BTC',
            amount,
            status: 'pending',
            meta: { requestId: request.id, txHash, fromWallet },
            createdAt: timestamp,
            updatedAt: timestamp
        });
        draft.adminActivity.unshift({
            id: `deposit-${request.id}`,
            message: `Deposit request received for ${amount} BTC`,
            createdAt: timestamp
        });
        return draft;
    });

    return request;
}

async function getPendingDeposits() {
    const store = await readStore();
    return store.depositRequests
        .filter((entry) => entry.status === 'pending')
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

async function approveDeposit(requestId, adminId, price) {
    await updateStore(async (store) => {
        const request = store.depositRequests.find((entry) => entry.id === requestId);
        if (!request) {
            throw new Error('Deposit request not found.');
        }
        if (request.status !== 'pending') {
            throw new Error('Deposit request has already been reviewed.');
        }

        const user = store.users.find((entry) => entry.id === request.userId);
        if (!user) {
            throw new Error('User not found.');
        }

        request.status = 'approved';
        request.reviewedBy = adminId;
        request.reviewedAt = new Date().toISOString();
        request.updatedAt = new Date().toISOString();
        request.creditedPrice = price;
        request.creditedUsdAmount = request.amount * price;

        user.balances.btc += request.amount;
        user.updatedAt = new Date().toISOString();

        const transaction = store.transactions.find(
            (entry) => entry.meta?.requestId === request.id && entry.type === 'deposit'
        );
        if (transaction) {
            transaction.status = 'completed';
            transaction.amount = request.amount;
            transaction.usdAmount = request.creditedUsdAmount;
            transaction.updatedAt = new Date().toISOString();
        }

        store.adminActivity.unshift({
            id: `deposit-approved-${request.id}`,
            message: `Deposit ${request.id} approved: ${request.amount} BTC`,
            createdAt: new Date().toISOString()
        });

        return store;
    });
}

async function rejectDeposit(requestId, adminId, reason) {
    await updateStore(async (store) => {
        const request = store.depositRequests.find((entry) => entry.id === requestId);
        if (!request) {
            throw new Error('Deposit request not found.');
        }
        if (request.status !== 'pending') {
            throw new Error('Deposit request has already been reviewed.');
        }

        request.status = 'rejected';
        request.reviewedBy = adminId;
        request.reviewedAt = new Date().toISOString();
        request.updatedAt = new Date().toISOString();
        request.rejectReason = reason || 'Rejected by admin';

        const transaction = store.transactions.find(
            (entry) => entry.meta?.requestId === request.id && entry.type === 'deposit'
        );
        if (transaction) {
            transaction.status = 'rejected';
            transaction.updatedAt = new Date().toISOString();
        }

        store.adminActivity.unshift({
            id: `deposit-rejected-${request.id}`,
            message: `Deposit ${request.id} rejected: ${reason || 'No reason provided'}`,
            createdAt: new Date().toISOString()
        });

        return store;
    });
}

// Withdrawal handling
async function createWithdrawalRequest(userId, amount, walletAddress) {
    if (amount <= 0) {
        throw new Error('Withdrawal amount must be greater than zero.');
    }

    const store = await readStore();
    const user = store.users.find((entry) => entry.id === userId);
    if (!user) {
        throw new Error('User not found.');
    }
    if (user.balances.btc < amount) {
        throw new Error('Insufficient BTC balance.');
    }

    const timestamp = new Date().toISOString();
    const request = {
        id: uuidv4(),
        userId,
        amount,
        walletAddress,
        status: 'pending',
        network: 'BTC',
        createdAt: timestamp,
        updatedAt: timestamp,
        reviewedBy: null,
        reviewedAt: null
    };

    await updateStore(async (draft) => {
        const draftUser = draft.users.find((entry) => entry.id === userId);
        draftUser.balances.btc -= amount;
        draftUser.updatedAt = timestamp;

        draft.withdrawalRequests.unshift(request);
        draft.transactions.unshift({
            id: uuidv4(),
            userId,
            type: 'withdrawal',
            asset: 'BTC',
            amount,
            status: 'pending',
            meta: { requestId: request.id, walletAddress },
            createdAt: timestamp,
            updatedAt: timestamp
        });
        draft.adminActivity.unshift({
            id: `withdraw-${request.id}`,
            message: `Withdrawal request received for ${amount} BTC`,
            createdAt: timestamp
        });
        return draft;
    });

    return request;
}

async function getPendingWithdrawals() {
    const store = await readStore();
    return store.withdrawalRequests
        .filter((entry) => entry.status === 'pending')
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

async function approveWithdrawal(requestId, adminId) {
    await updateStore(async (store) => {
        const request = store.withdrawalRequests.find((entry) => entry.id === requestId);
        if (!request) {
            throw new Error('Withdrawal request not found.');
        }
        if (request.status !== 'pending') {
            throw new Error('Withdrawal request has already been reviewed.');
        }

        request.status = 'approved';
        request.reviewedBy = adminId;
        request.reviewedAt = new Date().toISOString();
        request.updatedAt = new Date().toISOString();

        const transaction = store.transactions.find(
            (entry) => entry.meta?.requestId === request.id && entry.type === 'withdrawal'
        );
        if (transaction) {
            transaction.status = 'completed';
            transaction.updatedAt = new Date().toISOString();
        }

        store.adminActivity.unshift({
            id: `withdraw-approved-${request.id}`,
            message: `Withdrawal ${request.id} approved: ${request.amount} BTC`,
            createdAt: new Date().toISOString()
        });

        return store;
    });
}

async function rejectWithdrawal(requestId, adminId, reason) {
    await updateStore(async (store) => {
        const request = store.withdrawalRequests.find((entry) => entry.id === requestId);
        if (!request) {
            throw new Error('Withdrawal request not found.');
        }
        if (request.status !== 'pending') {
            throw new Error('Withdrawal request has already been reviewed.');
        }

        const user = store.users.find((entry) => entry.id === request.userId);
        user.balances.btc += request.amount;
        user.updatedAt = new Date().toISOString();

        request.status = 'rejected';
        request.reviewedBy = adminId;
        request.reviewedAt = new Date().toISOString();
        request.updatedAt = new Date().toISOString();
        request.rejectReason = reason || 'Rejected by admin';

        const transaction = store.transactions.find(
            (entry) => entry.meta?.requestId === request.id && entry.type === 'withdrawal'
        );
        if (transaction) {
            transaction.status = 'rejected';
            transaction.updatedAt = new Date().toISOString();
        }

        store.adminActivity.unshift({
            id: `withdraw-rejected-${request.id}`,
            message: `Withdrawal ${request.id} rejected: ${reason || 'No reason provided'}`,
            createdAt: new Date().toISOString()
        });

        return store;
    });
}

module.exports = {
    initializeStore,
    readStore,
    updateStore,
    getUserAccount,
    updateUserBalances,
    getUserBalance,
    getUserStakes,
    createStake,
    claimStakeReward,
    unstake,
    calculateStakeReward,
    buildStakeView,
    getTradingHistory,
    addTradingHistory,
    createDepositRequest,
    getPendingDeposits,
    approveDeposit,
    rejectDeposit,
    createWithdrawalRequest,
    getPendingWithdrawals,
    approveWithdrawal,
    rejectWithdrawal
};
