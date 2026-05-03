const express = require('express');
const { requireAdmin, requireAuth } = require('../middleware/auth');

function createAdminRoutes(controller) {
  const router = express.Router();

  router.use(requireAuth, requireAdmin);
  router.get('/dashboard', controller.dashboard);
  router.patch('/users/:userId/frozen', controller.setUserFrozen);
  router.patch('/pairs/:symbol', controller.updatePairRisk);

  return router;
}

module.exports = {
  createAdminRoutes,
};
