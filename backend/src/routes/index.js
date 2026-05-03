const express = require('express');
const { createFuturesRoutes } = require('./futuresRoutes');
const { createAdminRoutes } = require('./adminRoutes');
const { createMarketRoutes } = require('./marketRoutes');

function createRouter({ futuresController, adminController, marketController }) {
  const router = express.Router();
  router.use('/futures', createFuturesRoutes(futuresController));
  router.use('/admin', createAdminRoutes(adminController));
  router.use('/market', createMarketRoutes(marketController));
  return router;
}

module.exports = {
  createRouter,
};
