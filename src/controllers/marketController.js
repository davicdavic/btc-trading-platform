const { fetchTicker, fetchKlines } = require('../services/marketService');

async function getTicker(req, res) {
    try {
        const ticker = await fetchTicker();
        res.json(ticker);
    } catch (error) {
        res.status(502).json({ error: 'Failed to load BTC market data.' });
    }
}

async function getKlines(req, res) {
    try {
        const klines = await fetchKlines(req.query.interval || '1h', Number(req.query.limit || 60));
        res.json(klines);
    } catch (error) {
        res.status(502).json({ error: 'Failed to load chart data.' });
    }
}

module.exports = {
    getTicker,
    getKlines
};
