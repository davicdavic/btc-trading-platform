const { z } = require('zod');

const orderSchema = z.object({
  symbol: z.string().min(1),
  type: z.enum(['market', 'limit', 'stop-market', 'stop-limit']),
  side: z.enum(['buy', 'sell']),
  quantity: z.number().positive(),
  leverage: z.union([z.literal(2), z.literal(3), z.literal(5), z.literal(10), z.literal(20)]),
  marginMode: z.enum(['cross', 'isolated']),
  limitPrice: z.number().positive().optional(),
  stopPrice: z.number().positive().optional(),
  takeProfitPrice: z.number().positive().optional(),
  stopLossPrice: z.number().positive().optional(),
});

const closeSchema = z.object({
  quantity: z.number().positive().optional(),
});

function createFuturesController({ futuresService }) {
  return {
    listPairs(req, res) {
      res.json(futuresService.listMarketPairs());
    },

    placeOrder(req, res) {
      try {
        const payload = orderSchema.parse(req.body);
        const result = futuresService.placeOrder(req.user.id, payload);
        res.status(201).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },

    cancelOrder(req, res) {
      try {
        const result = futuresService.cancelOrder(req.user.id, req.params.orderId);
        res.json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },

    getPortfolio(req, res) {
      try {
        res.json(futuresService.getUserPortfolio(req.user.id));
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },

    closePosition(req, res) {
      try {
        const payload = closeSchema.parse(req.body || {});
        const result = futuresService.closePosition(req.user.id, req.params.positionId, payload.quantity);
        res.json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    },
  };
}

module.exports = {
  createFuturesController,
};
