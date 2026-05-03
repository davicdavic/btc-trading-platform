const { z } = require('zod');

const pairUpdateSchema = z.object({
  maxLeverage: z.number().int().positive().max(50).optional(),
  makerFeeBps: z.number().nonnegative().max(100).optional(),
  takerFeeBps: z.number().nonnegative().max(100).optional(),
  maintenanceMarginRate: z.number().positive().max(0.2).optional(),
  suspended: z.boolean().optional(),
  minOrderSize: z.number().positive().optional(),
  maxOrderSize: z.number().positive().optional(),
});

function createAdminController({ futuresService }) {
  return {
    dashboard(_req, res) {
      res.json(futuresService.getAdminDashboard());
    },

    setUserFrozen(req, res) {
      try {
        const frozen = Boolean(req.body.frozen);
        const result = futuresService.setUserFrozen(req.user.id, req.params.userId, frozen);
        res.json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },

    updatePairRisk(req, res) {
      try {
        const updates = pairUpdateSchema.parse(req.body);
        const result = futuresService.updatePairRisk(req.user.id, req.params.symbol, updates);
        res.json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },
  };
}

module.exports = {
  createAdminController,
};
