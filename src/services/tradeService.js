const { v4: uuidv4 } = require('uuid');
const { createTransaction } = require('../models/storeModel');
const { readStore, updateStore, addTradingHistory } = require('./storeService');
const { getCurrentPrice, getExpirationPrice, setTradeOutcome, clearTradeOutcome } = require('./marketService');

const VALID_LEVERAGE = [2, 3, 5, 10];
const VALID_DURATIONS = [60, 180, 300, 600, 900, 1800];

function ensureVerified(user) {
    if (user.kyc.status !== 'verified') {
        throw new Error('Complete KYC verification before trading.');
    }
}

function ensureNotFrozen(user) {
    if (user.accountFrozen) {
        throw new Error('Your account is frozen. Contact support.');
    }
}

async function getExecutionPrice(side) {
    const priceData = await getCurrentPrice();
    const execution = side === 'buy' ? priceData.buyPrice || priceData.price : priceData.sellPrice || priceData.price;

    return {
        price: execution,
        source: priceData.source,
        market: priceData
    };
}

// Place a time-based trade (UP/DOWN prediction)
async function placeTradingTrade(userId, { direction, amount, leverage = 1, duration = 60 }) {
    if (!['UP', 'DOWN'].includes(direction)) {
        throw new Error('Direction must be UP or DOWN.');
    }
    if (!VALID_DURATIONS.includes(duration)) {
        throw new Error(`Duration must be one of: ${VALID_DURATIONS.join(', ')} seconds.`);
    }
    if (!VALID_LEVERAGE.includes(leverage)) {
        throw new Error(`Leverage must be one of: ${VALID_LEVERAGE.join(', ')}.`);
    }
    if (amount <= 0) {
        throw new Error('Trade amount must be greater than zero.');
    }

    const store = await readStore();
    const user = store.users.find((entry) => entry.id === userId);
    if (!user) {
        throw new Error('User not found.');
    }

    ensureVerified(user);
    ensureNotFrozen(user);

    const execution = await getExecutionPrice('buy');
    const entryPrice = execution.price;
    const totalStake = amount * leverage;

    if (user.balances.btc < totalStake) {
        throw new Error(`Insufficient BTC balance. Required: ${totalStake} BTC (including ${leverage}x leverage)`);
    }

    const tradeId = uuidv4();
    const expirationTime = Date.now() + (duration * 1000);

    const trade = {
        id: tradeId,
        userId,
        direction,
        entryPrice,
        amount,
        leverage,
        duration,
        totalStake,
        status: 'pending',
        result: null,
        profit: null,
        loss: null,
        expirationTime,
        expiresAt: new Date(expirationTime).toISOString(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        settledAt: null
    };

    // Reserve the stake amount from user's balance
    await updateStore(async (draft) => {
        const draftUser = draft.users.find((entry) => entry.id === userId);
        draftUser.balances.btc -= totalStake;
        draftUser.updatedAt = new Date().toISOString();

        draft.tradingTrades.unshift(trade);
        draft.transactions.unshift({
            id: uuidv4(),
            userId,
            type: 'trading_stake',
            asset: 'BTC',
            amount: totalStake,
            status: 'locked',
            meta: { tradeId, direction, leverage, duration, entryPrice },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        });

        draft.adminActivity.unshift({
            id: `trade-${tradeId}`,
            message: `${user.email} opened ${direction} trade: ${amount} BTC x${leverage} for ${duration}s`,
            createdAt: new Date().toISOString()
        });

        return draft;
    });

    // Schedule trade settlement
    setTimeout(() => settleTrade(tradeId), duration * 1000);

    return {
        trade,
        entryPrice,
        totalStake,
        potentialProfit: calculateProfit(amount, leverage, entryPrice, 'WIN'),
        potentialLoss: totalStake,
        expirationTime: new Date(expirationTime).toISOString()
    };
}

// Calculate profit/loss based on price movement
function calculateProfit(stake, leverage, entryPrice, outcome, finalPrice = null) {
    const multiplier = leverage;
    if (outcome === 'WIN') {
        const profitPercent = 0.85 * multiplier;
        return stake * (profitPercent / 100) * 100;
    } else {
        return stake * leverage;
    }
}

// Settle a trade after expiration
async function settleTrade(tradeId) {
    try {
        const store = await readStore();
        const trade = store.tradingTrades.find((t) => t.id === tradeId);

        if (!trade || trade.status !== 'pending') {
            return;
        }

        const entryPrice = trade.entryPrice;
        const expirationResult = await getExpirationPrice(entryPrice, trade.duration, tradeId);
        const finalPrice = expirationResult.expirationPrice;

        const priceChange = ((finalPrice - entryPrice) / entryPrice) * 100;
        const isWin = (trade.direction === 'UP' && priceChange > 0) || (trade.direction === 'DOWN' && priceChange < 0);

        let profit = 0;
        let loss = 0;
        let status = 'lost';
        let result = 'LOSS';

        if (isWin) {
            profit = calculateProfit(trade.amount, trade.leverage, entryPrice, 'WIN', finalPrice);
            status = 'won';
            result = 'WIN';
        } else {
            loss = trade.totalStake;
            result = 'LOSS';
        }

        await updateStore(async (draft) => {
            const draftTrade = draft.tradingTrades.find((t) => t.id === tradeId);
            if (!draftTrade|| draftTrade.status !== 'pending') {
                return draft;
            }

            draftTrade.status = status;
            draftTrade.result = result;
            draftTrade.profit = profit;
            draftTrade.loss = loss;
            draftTrade.finalPrice = finalPrice;
            draftTrade.priceChange = priceChange;
            draftTrade.settledAt = new Date().toISOString();
            draftTrade.updatedAt = new Date().toISOString();

            const draftUser = draft.users.find((entry) => entry.id === trade.userId);
            if (draftUser) {
                if (isWin) {
                    draftUser.balances.btc += trade.amount + profit;
                }
                draftUser.totalTrades = (draftUser.totalTrades || 0) + 1;
                draftUser.tradingVolume = (draftUser.tradingVolume || 0) + trade.totalStake;
                draftUser.updatedAt = new Date().toISOString();
            }

            const transaction = draft.transactions.find(
                (t) => t.meta?.tradeId === tradeId && t.type === 'trading_stake'
            );
            if (transaction) {
                transaction.status = isWin ? 'won' : 'lost';
                transaction.amount = isWin ? trade.amount + profit : 0;
                transaction.profit = profit;
                transaction.loss = loss;
                transaction.updatedAt = new Date().toISOString();
            }

            draft.adminActivity.unshift({
                id: `trade-settle-${tradeId}`,
                message: `Trade ${tradeId} settled: ${result} - ${trade.direction} at ${finalPrice}`,
                createdAt: new Date().toISOString()
            });

            return draft;
        });

        // Add to trading history
        await addTradingHistory(trade.userId, {
            tradeId,
            direction: trade.direction,
            entryPrice,
            finalPrice,
            amount: trade.amount,
            leverage: trade.leverage,
            duration: trade.duration,
            result,
            profit: isWin ? profit : 0,
            loss: isWin ? 0 : loss,
            priceChange,
            settledAt: new Date().toISOString()
        });

        // Clear any trade outcome override
        await clearTradeOutcome(tradeId);
    } catch (error) {
        console.error(`Error settling trade ${tradeId}:`, error);
    }
}

// Get pending trades for a user
async function getPendingTrades(userId) {
    const store = await readStore();
    return store.tradingTrades
        .filter((t) => t.userId === userId && t.status === 'pending')
        .map((t) => ({
            ...t,
            timeRemaining: Math.max(0, new Date(t.expiresAt).getTime() - Date.now())
        }));
}

// Get completed trade results for a user
async function getTradeResults(userId, limit = 50) {
    const store = await readStore();
    return store.tradingTrades
        .filter((t) => t.userId === userId && t.status !== 'pending')
        .sort((a, b) => new Date(b.settledAt || b.createdAt) - new Date(a.settledAt || a.createdAt))
        .slice(0, limit);
}

// Get single trade by ID
async function getTradeById(tradeId) {
    const store = await readStore();
    return store.tradingTrades.find((t) => t.id === tradeId);
}

// Get all active trades (admin)
async function getActiveTrades() {
    const store = await readStore();
    return store.tradingTrades.filter((t) => t.status === 'pending');
}

// Get trade statistics for a user
async function getTradeStats(userId) {
    const store = await readStore();
    const userTrades = store.tradingTrades.filter((t) => t.userId === userId);
    const completedTrades = userTrades.filter((t) => t.status !== 'pending');

    const wins = completedTrades.filter((t) => t.result === 'WIN').length;
    const losses = completedTrades.filter((t) => t.result === 'LOSS').length;
    const totalProfit = completedTrades.reduce((sum, t) => sum + (t.profit || 0), 0);
    const totalLoss = completedTrades.reduce((sum, t) => sum + (t.loss || 0), 0);

    return {
        totalTrades: completedTrades.length,
        wins,
        losses,
        winRate: completedTrades.length > 0 ? (wins / completedTrades.length) * 100 : 0,
        totalProfit,
        totalLoss,
        netProfit: totalProfit - totalLoss,
        pendingTrades: userTrades.filter((t) => t.status === 'pending').length
    };
}

// Cancel a pending trade (if allowed)
async function cancelTrade(userId, tradeId) {
    const store = await readStore();
    const trade = store.tradingTrades.find((t) => t.id === tradeId && t.userId === userId);

    if (!trade) {
        throw new Error('Trade not found.');
    }
    if (trade.status !== 'pending') {
        throw new Error('Only pending trades can be cancelled.');
    }

    // Check if trade is within cancellation window (first 5 seconds)
    const tradeAge = Date.now() - new Date(trade.createdAt).getTime();
    if (tradeAge > 5000) {
        throw new Error('Trade can only be cancelled within 5 seconds of placement.');
    }

    await updateStore(async (draft) => {
        const draftTrade = draft.tradingTrades.find((t) => t.id === tradeId);
        draftTrade.status = 'cancelled';
        draftTrade.updatedAt = new Date().toISOString();

        const draftUser = draft.users.find((entry) => entry.id === userId);
        draftUser.balances.btc += trade.totalStake;
        draftUser.updatedAt = new Date().toISOString();

        const transaction = draft.transactions.find(
            (t) => t.meta?.tradeId === tradeId && t.type === 'trading_stake'
        );
        if (transaction) {
            transaction.status = 'cancelled';
            transaction.amount = trade.totalStake;
            transaction.updatedAt = new Date().toISOString();
        }

        draft.adminActivity.unshift({
            id: `trade-cancel-${tradeId}`,
            message: `Trade ${tradeId} cancelled by user`,
            createdAt: new Date().toISOString()
        });

        return draft;
    });

    return { tradeId, status: 'cancelled', refunded: trade.totalStake };
}

// Original spot trading functions (buy/sell BTC)
async function executeTrade(userId, { side, amount, amountType }) {
    if (!['buy', 'sell'].includes(side)) {
        throw new Error('Trade side must be buy or sell.');
    }
    if (!amount || amount <= 0) {
        throw new Error('Trade amount must be greater than zero.');
    }

    const store = await readStore();
    const user = store.users.find((entry) => entry.id === userId);
    if (!user) {
        throw new Error('User not found.');
    }

    ensureVerified(user);

    const execution = await getExecutionPrice(side);
    const price = execution.price;

    let btcAmount = 0;
    let usdAmount = 0;

    if (side === 'buy') {
        if (amountType === 'btc') {
            btcAmount = amount;
            usdAmount = amount * price;
        } else {
            usdAmount = amount;
            btcAmount = amount / price;
        }

        if (user.balances.usd < usdAmount) {
            throw new Error('Insufficient USD demo balance.');
        }
    } else {
        if (amountType === 'usd') {
            usdAmount = amount;
            btcAmount = amount / price;
        } else {
            btcAmount = amount;
            usdAmount = amount * price;
        }

        if (user.balances.btc < btcAmount) {
            throw new Error('Insufficient BTC balance.');
        }
    }

    let tradeRecord;
    let transactionRecord;

    await updateStore(async (draft) => {
        const currentUser = draft.users.find((entry) => entry.id === userId);
        if (!currentUser) {
            throw new Error('User not found.');
        }

        if (side === 'buy') {
            currentUser.balances.usd -= usdAmount;
            currentUser.balances.btc += btcAmount;
        } else {
            currentUser.balances.btc -= btcAmount;
            currentUser.balances.usd += usdAmount;
        }
        currentUser.updatedAt = new Date().toISOString();

        tradeRecord = {
            id: uuidv4(),
            userId,
            side,
            orderType: 'market',
            executionPrice: price,
            btcAmount,
            usdAmount,
            priceSource: execution.source,
            makerFee: 0,
            takerFee: 0,
            feeAsset: 'BTC',
            createdAt: new Date().toISOString()
        };

        transactionRecord = {
            id: uuidv4(),
            userId,
            type: side === 'buy' ? 'trade_buy' : 'trade_sell',
            asset: 'BTC',
            amount: btcAmount,
            usdAmount,
            status: 'completed',
            meta: {
                tradeId: tradeRecord.id,
                executionPrice: price,
                side
            },
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };

        draft.trades.unshift(tradeRecord);
        draft.transactions.unshift(transactionRecord);
        draft.adminActivity.unshift({
            id: `trade-${tradeRecord.id}`,
            message: `${currentUser.email} executed ${side.toUpperCase()} ${btcAmount.toFixed(6)} BTC`,
            createdAt: new Date().toISOString()
        });

        return draft;
    });

    return {
        trade: tradeRecord,
        transaction: transactionRecord,
        market: execution.market
    };
}

async function getTradesForUser(userId) {
    const store = await readStore();
    return store.trades.filter((entry) => entry.userId === userId);
}

module.exports = {
    placeTradingTrade,
    getPendingTrades,
    getTradeResults,
    getTradeById,
    getActiveTrades,
    getTradeStats,
    cancelTrade,
    settleTrade,
    executeTrade,
    getTradesForUser,
    calculateProfit,
    VALID_LEVERAGE,
    VALID_DURATIONS
};
