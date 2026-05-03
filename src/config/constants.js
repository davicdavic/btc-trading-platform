const path = require('path');

module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || 'btctradepro-demo-secret',
    STORE_PATH: path.join(process.cwd(), 'data', 'store.json'),
    BTC_WALLET_ADDRESS: 'bc1qucksaf3gmjd658ljucux49092zh6xw4uqacn9a',
    DEFAULT_ADMIN_EMAIL: 'admin@btctradepro.demo',
    DEFAULT_ADMIN_PASSWORD: 'Admin123!',
    DEFAULT_USER_USD_BALANCE: 10000,
    DEFAULT_USER_BTC_BALANCE: 0,
    DEFAULT_STAKING_APR: 0.12,
    YEAR_MS: 365 * 24 * 60 * 60 * 1000
};
