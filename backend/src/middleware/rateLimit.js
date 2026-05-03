const rateLimit = require('express-rate-limit');
const { rateLimitMax, rateLimitWindowMs } = require('../config/env');

const apiRateLimit = rateLimit({
  windowMs: rateLimitWindowMs,
  max: rateLimitMax,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please slow down.' },
});

module.exports = {
  apiRateLimit,
};
