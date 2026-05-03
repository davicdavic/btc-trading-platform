const QRCode = require('qrcode');

const { BTC_WALLET_ADDRESS, YEAR_MS } = require('../config/constants');
const {
    createTransaction,
    createDepositRequest,
    createWithdrawalRequest,
    createStake
} = require('../models/storeModel');
const { readStore, updateStore } = require('./storeService');

function buildStakeView(stake) {
    const now = Date.now();
    const lastClaim = new Date(stake.lastClaimAt).getTime();
    const accruedReward = stake.status === 'active'
        ? (stake.amount * stake.apr * (now - lastClaim)) / YEAR_MS
        : 0;

    return {
        ...stake,
        accruedReward
    };
}

async function getWalletSummary(userId) {
    const store = await readStore();
    const user = store.users.find((entry) => entry.id === userId);
    if (!user) {
        throw new Error('User not found.');
    }

    const transactions = store.transactions
        .filter((entry) => entry.userId === userId)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const deposits = store.depositRequests
        .filter((entry) => entry.userId === userId)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const withdrawals = store.withdrawalRequests
        .filter((entry) => entry.userId === userId)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    const stakes = store.stakes
        .filter((entry) => entry.userId === userId)
        .map(buildStakeView)
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return {
        balances: user.balances,
        transactions,
        deposits,
        withdrawals,
        stakes,
        depositWalletAddress: store.settings.walletAddress
    };
}

async function createDeposit(userId, { amount, txHash, fromWallet }) {
    if (amount <= 0) {
        throw new Error('Deposit amount must be greater than zero.');
    }

    const qrCodeDataUrl = await QRCode.toDataURL(BTC_WALLET_ADDRESS);
    let request;

    await updateStore(async (store) => {
        request = createDepositRequest({
            userId,
            amount,
            txHash,
            fromWallet,
            walletAddress: store.settings.walletAddress
        });
        store.depositRequests.unshift(request);
        store.transactions.unshift(createTransaction({
            userId,
            type: 'deposit',
            asset: 'BTC',
            amount,
            status: 'pending',
            meta: {
                requestId: request.id,
                txHash,
                fromWallet
            }
        }));
        store.adminActivity.unshift({
            id: `deposit-${request.id}`,
            message: `Deposit request received for ${amount} BTC`,
            createdAt: new Date().toISOString()
        });
        return store;
    });

    return {
        request,
        walletAddress: BTC_WALLET_ADDRESS,
        qrCodeDataUrl
    };
}

async function createWithdrawal(userId, { amount, walletAddress }) {
    if (amount <= 0) {
        throw new Error('Withdrawal amount must be greater than zero.');
    }

    let request;

    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (!user) {
            throw new Error('User not found.');
        }
        if (user.balances.btc < amount) {
            throw new Error('Insufficient BTC balance.');
        }

        request = createWithdrawalRequest({ userId, amount, walletAddress });
        store.withdrawalRequests.unshift(request);
        store.transactions.unshift(createTransaction({
            userId,
            type: 'withdrawal',
            asset: 'BTC',
            amount,
            status: 'pending',
            meta: {
                requestId: request.id,
                walletAddress
            }
        }));
        store.adminActivity.unshift({
            id: `withdraw-${request.id}`,
            message: `Withdrawal request received for ${amount} BTC`,
            createdAt: new Date().toISOString()
        });
        return store;
    });

    return request;
}

async function createStakePosition(userId, { amount, apr }) {
    if (amount <= 0) {
        throw new Error('Stake amount must be greater than zero.');
    }

    let stake;

    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (!user) {
            throw new Error('User not found.');
        }
        if (user.balances.btc < amount) {
            throw new Error('Insufficient BTC balance for staking.');
        }

        user.balances.btc -= amount;
        user.updatedAt = new Date().toISOString();
        stake = createStake({ userId, amount, apr: apr || store.settings.stakingApr });
        store.stakes.unshift(stake);
        store.transactions.unshift(createTransaction({
            userId,
            type: 'stake',
            asset: 'BTC',
            amount,
            status: 'completed',
            meta: {
                stakeId: stake.id,
                apr: stake.apr
            }
        }));
        return store;
    });

    return buildStakeView(stake);
}

async function claimStakeRewards(userId, stakeId) {
    let rewardClaim = 0;

    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        const stake = store.stakes.find((entry) => entry.id === stakeId && entry.userId === userId);

        if (!user || !stake) {
            throw new Error('Stake not found.');
        }
        if (stake.status !== 'active') {
            throw new Error('This stake is not active.');
        }

        rewardClaim = buildStakeView(stake).accruedReward;
        if (rewardClaim <= 0) {
            throw new Error('No rewards available to claim yet.');
        }

        stake.totalClaimed += rewardClaim;
        stake.lastClaimAt = new Date().toISOString();
        stake.updatedAt = new Date().toISOString();
        user.balances.btc += rewardClaim;
        user.updatedAt = new Date().toISOString();

        store.transactions.unshift(createTransaction({
            userId,
            type: 'stake_reward',
            asset: 'BTC',
            amount: rewardClaim,
            status: 'completed',
            meta: {
                stakeId: stake.id
            }
        }));

        return store;
    });

    return {
        claimed: rewardClaim
    };
}

module.exports = {
    getWalletSummary,
    createDeposit,
    createWithdrawal,
    createStakePosition,
    claimStakeRewards
};
