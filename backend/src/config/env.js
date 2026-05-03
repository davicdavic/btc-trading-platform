const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

module.exports = {
  port: Number(process.env.EXCHANGE_BACKEND_PORT || 4300),
  jwtSecret: process.env.JWT_SECRET || 'change-this-secret-in-production',
  corsOrigin: process.env.CORS_ORIGIN || '*',
  wsMarketUrl: process.env.BINANCE_WS_URL || 'wss://stream.binance.com:9443/ws/btcusdt@trade',
  postgresUrl: process.env.POSTGRES_URL || '',
  redisUrl: process.env.REDIS_URL || '',
  rateLimitWindowMs: Number(process.env.RATE_LIMIT_WINDOW_MS || 60_000),
  rateLimitMax: Number(process.env.RATE_LIMIT_MAX || 120),
  defaultTradingFees: {
    maker: Number(process.env.DEFAULT_MAKER_FEE_BPS || 2),
    taker: Number(process.env.DEFAULT_TAKER_FEE_BPS || 4),
  },
};
