const express = require('express');
const { requireAuth } = require('../middleware/auth');

function createFuturesRoutes(controller) {
  const router = express.Router();

  router.get('/pairs', controller.listPairs);
  router.get('/portfolio', requireAuth, controller.getPortfolio);
  router.post('/orders', requireAuth, controller.placeOrder);
  router.delete('/orders/:orderId', requireAuth, controller.cancelOrder);
  router.post('/positions/:positionId/close', requireAuth, controller.closePosition);

  return router;
}

module.exports = {
  createFuturesRoutes,
};
