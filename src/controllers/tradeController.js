const {
    placeTradingTrade,
    getPendingTrades,
    getTradeResults,
    getTradeById,
    getTradeStats,
    cancelTrade,
    executeTrade,
    getTradesForUser
} = require('../services/tradeService');

async function placeTrade(req, res) {
    try {
        const { side, amount, amountType } = req.body;
        const result = await executeTrade(req.user.id, {
            side,
            amount: Number(amount),
            amountType
        });
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function placeTradingTradeHandler(req, res) {
    try {
        const { direction, amount, leverage = 1, duration = 60 } = req.body;
        const result = await placeTradingTrade(req.user.id, {
            direction,
            amount: Number(amount),
            leverage: Number(leverage),
            duration: Number(duration)
        });
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getMyTrades(req, res) {
    try {
        const trades = await getTradesForUser(req.user.id);
        res.json(trades);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getPendingTradingTrades(req, res) {
    try {
        const trades = await getPendingTrades(req.user.id);
        res.json(trades);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getTradingResults(req, res) {
    try {
        const { limit } = req.query;
        const results = await getTradeResults(req.user.id, limit ? Number(limit) : 50);
        res.json(results);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getTradingStats(req, res) {
    try {
        const stats = await getTradeStats(req.user.id);
        res.json(stats);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function cancelTradingTrade(req, res) {
    try {
        const { tradeId } = req.params;
        const result = await cancelTrade(req.user.id, tradeId);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getTradeByIdHandler(req, res) {
    try {
        const { tradeId } = req.params;
        const trade = await getTradeById(tradeId);
        if (!trade) {
            return res.status(404).json({ error: 'Trade not found.' });
        }
        res.json(trade);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    placeTrade,
    placeTradingTradeHandler,
    getMyTrades,
    getPendingTradingTrades,
    getTradingResults,
    getTradingStats,
    cancelTradingTrade,
    getTradeByIdHandler
};
