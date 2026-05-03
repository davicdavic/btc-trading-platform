const { v4: uuidv4 } = require('uuid');
const { DEFAULT_STAKING_APR } = require('../config/constants');

function generateWalletAddress() {
    // Generate a realistic-looking BTC address
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let address = 'bc1q';
    for (let i = 0; i < 38; i++) {
        address += chars[Math.floor(Math.random() * chars.length)];
    }
    return address;
}

function createUser({ fullName, email, passwordHash, role = 'user' }) {
    const timestamp = new Date().toISOString();
    return {
        id: uuidv4(),
        fullName,
        userTag: `UID-${uuidv4().slice(0, 8).toUpperCase()}`,
        email: email.toLowerCase(),
        passwordHash,
        role,
        balances: {
            usd: role === 'admin' ? 0 : 10000,
            btc: 0,
            usdt: 0
        },
        wallets: {
            btcDepositAddress: generateWalletAddress(),
            btcWithdrawAddress: '',
            usdtDepositAddress: generateWalletAddress(),
            usdtWithdrawAddress: ''
        },
        profile: {
            name: fullName,
            city: '',
            job: '',
            postCode: '',
            country: '',
            avatarPath: ''
        },
        kyc: {
            status: role === 'admin' ? 'verified' : 'not_submitted',
            documentPath: '',
            idType: '',
            submittedAt: null,
            reviewedAt: null
        },
        security: {
            twoFactorEnabled: false,
            twoFactorSecret: '',
            loginHistory: [],
            apiKeys: [],
            withdrawalWhitelist: []
        },
        referrals: {
            code: uuidv4().slice(0, 8).toUpperCase(),
            referredBy: null,
            referralsCount: 0,
            totalEarnings: 0
        },
        tradingPreferences: {
            defaultOrderType: 'market',
            defaultLeverage: 1,
            stopLossPercent: 5,
            takeProfitPercent: 10,
            notifications: {
                trades: true,
                deposits: true,
                withdrawals: true,
                priceAlerts: true
            }
        },
        vipLevel: role === 'admin' ? 'platinum' : 'bronze',
        tradingVolume: 0,
        totalTrades: 0,
        makerFee: role === 'admin' ? 0 : 0.001,
        takerFee: role === 'admin' ? 0 : 0.001,
        createdAt: timestamp,
        updatedAt: timestamp
    };
}

function createTransaction({
    userId,
    type,
    asset,
    amount,
    status = 'completed',
    usdAmount = 0,
    meta = {}
}) {
    const timestamp = new Date().toISOString();
    return {
        id: uuidv4(),
        userId,
        type,
        asset,
        amount,
        usdAmount,
        status,
        meta,
        createdAt: timestamp,
        updatedAt: timestamp
    };
}

function createTrade({ userId, side, executionPrice, btcAmount, usdAmount, priceSource, orderType = 'market', limitPrice = null }) {
    const timestamp = new Date().toISOString();
    return {
        id: uuidv4(),
        userId,
        side,
        orderType,
        executionPrice,
        limitPrice,
        btcAmount,
        usdAmount,
        priceSource,
        makerFee: 0,
        takerFee: 0,
        feeAsset: 'BTC',
        createdAt: timestamp
    };
}

function createLimitOrder({ userId, side, btcAmount, usdAmount, limitPrice, stopPrice, orderType, takeProfitPrice }) {
    const timestamp = new Date().toISOString();
    return {
        id: uuidv4(),
        userId,
        side,
        orderType,
        btcAmount,
        usdAmount,
        limitPrice,
        stopPrice: stopPrice || null,
        takeProfitPrice: takeProfitPrice || null,
        status: 'pending',
        filledAmount: 0,
        createdAt: timestamp,
        updatedAt: timestamp,
        filledAt: null
    };
}

function createWithdrawalWhitelist({ userId, label, walletAddress, network = 'BTC' }) {
    return {
        id: uuidv4(),
        userId,
        label,
        walletAddress,
        network,
        createdAt: new Date().toISOString(),
        verified: false,
        verifiedAt: null
    };
}

function createInternalTransfer({ fromUserId, toUserId, amount, currency, note }) {
    const timestamp = new Date().toISOString();
    return {
        id: uuidv4(),
        fromUserId,
        toUserId,
        amount,
        currency,
        note: note || '',
        status: 'completed',
        createdAt: timestamp,
        updatedAt: timestamp
    };
}

function createReferralBonus({ userId, fromUserId, amount, type }) {
    return {
        id: uuidv4(),
        userId,
        fromUserId,
        amount,
        type,
        createdAt: new Date().toISOString()
    };
}

function createDepositRequest({ userId, amount, txHash, fromWallet, walletAddress }) {
    const timestamp = new Date().toISOString();
    return {
        id: uuidv4(),
        userId,
        amount,
        txHash,
        fromWallet,
        walletAddress,
        status: 'pending',
        network: 'BTC',
        creditedUsdAmount: 0,
        creditedPrice: 0,
        createdAt: timestamp,
        updatedAt: timestamp,
        reviewedBy: null,
        reviewedAt: null
    };
}

function createWithdrawalRequest({ userId, amount, walletAddress }) {
    const timestamp = new Date().toISOString();
    return {
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
}

function createStake({ userId, amount, apr = DEFAULT_STAKING_APR }) {
    const timestamp = new Date().toISOString();
    return {
        id: uuidv4(),
        userId,
        amount,
        apr,
        status: 'active',
        createdAt: timestamp,
        updatedAt: timestamp,
        lastClaimAt: timestamp,
        totalClaimed: 0
    };
}

function createComment({ userId, articleId, text, displayName }) {
    return {
        id: uuidv4(),
        userId,
        articleId,
        text,
        displayName,
        createdAt: new Date().toISOString()
    };
}

module.exports = {
    createUser,
    createTransaction,
    createTrade,
    createDepositRequest,
    createWithdrawalRequest,
    createStake,
    createComment,
    createLimitOrder,
    createWithdrawalWhitelist,
    createInternalTransfer,
    createReferralBonus,
    generateWalletAddress
};
