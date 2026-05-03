const express = require('express');

function createMarketRoutes(controller) {
  const router = express.Router();
  router.get('/:symbol', controller.snapshot);
  return router;
}

module.exports = {
  createMarketRoutes,
};
