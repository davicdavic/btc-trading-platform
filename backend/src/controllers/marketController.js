function createMarketController({ marketService }) {
  return {
    snapshot(req, res) {
      const symbol = String(req.params.symbol || 'BTCUSDT').toUpperCase();
      const markPrice = marketService.getMarkPrice(symbol);
      res.json({
        symbol,
        markPrice,
        candles: {
          '1m': marketService.getCandles(symbol, '1m', 100),
          '5m': marketService.getCandles(symbol, '5m', 100),
          '15m': marketService.getCandles(symbol, '15m', 100),
          '1h': marketService.getCandles(symbol, '1h', 100),
          '4h': marketService.getCandles(symbol, '4h', 100),
          '1d': marketService.getCandles(symbol, '1d', 100),
        },
        orderBook: marketService.getOrderBook(symbol),
        trades: marketService.getTradeHistory(symbol, 100),
      });
    },
  };
}

module.exports = {
  createMarketController,
};
