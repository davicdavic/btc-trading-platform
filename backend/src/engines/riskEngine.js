const SUPPORTED_LEVERAGE = [2, 3, 5, 10, 20];
const SUPPORTED_MARGIN_MODES = ['cross', 'isolated'];
const SUPPORTED_ORDER_TYPES = ['market', 'limit', 'stop-market', 'stop-limit'];
const SUPPORTED_SIDES = ['buy', 'sell'];

function toBpsMultiplier(bps) {
  return bps / 10_000;
}

function validateOrderInput({ pair, user, order }) {
  if (!pair) throw new Error('Trading pair not found.');
  if (pair.suspended) throw new Error(`${order.symbol} is currently suspended.`);
  if (!user) throw new Error('User not found.');
  if (user.frozen) throw new Error('Account is frozen.');
  if (!SUPPORTED_ORDER_TYPES.includes(order.type)) throw new Error('Unsupported order type.');
  if (!SUPPORTED_SIDES.includes(order.side)) throw new Error('Unsupported side.');
  if (!SUPPORTED_MARGIN_MODES.includes(order.marginMode)) throw new Error('Unsupported margin mode.');
  if (!SUPPORTED_LEVERAGE.includes(order.leverage)) throw new Error('Unsupported leverage.');
  if (order.leverage > pair.maxLeverage || order.leverage > user.leverageCap) {
    throw new Error('Leverage exceeds current risk limits.');
  }
  if (!Number.isFinite(order.quantity) || order.quantity <= 0) throw new Error('Quantity must be greater than zero.');
  if (order.quantity < pair.minOrderSize) throw new Error('Order size is below pair minimum.');
  if (order.quantity > pair.maxOrderSize) throw new Error('Order size exceeds pair maximum.');
  if (order.type !== 'market' && (!Number.isFinite(order.limitPrice) || order.limitPrice <= 0)) {
    throw new Error('Limit-based orders require a valid limit price.');
  }
  if (order.type.startsWith('stop') && (!Number.isFinite(order.stopPrice) || order.stopPrice <= 0)) {
    throw new Error('Stop orders require a valid stop price.');
  }
}

function computeOrderNotional(quantity, price) {
  return quantity * price;
}

function computeInitialMargin(notional, leverage) {
  return notional / leverage;
}

function computeFees(notional, feeBps) {
  return notional * toBpsMultiplier(feeBps);
}

function computeMaintenanceMargin(notional, maintenanceMarginRate) {
  return notional * maintenanceMarginRate;
}

function ensureMarginAvailable(user, requiredMargin) {
  if (user.balances.availableUsdt < requiredMargin) {
    throw new Error('Insufficient available USDT margin.');
  }
}

function computeLiquidationPrice({ side, entryPrice, leverage, maintenanceMarginRate, marginBuffer = 0.003 }) {
  const direction = side === 'buy' ? 1 : -1;
  const effectiveMarginRate = Math.max(maintenanceMarginRate + marginBuffer, 0.001);
  const move = (1 / leverage) - effectiveMarginRate;
  if (direction === 1) {
    return entryPrice * (1 - move);
  }
  return entryPrice * (1 + move);
}

function computeUnrealizedPnl({ side, quantity, entryPrice, markPrice }) {
  const multiplier = side === 'buy' ? 1 : -1;
  return (markPrice - entryPrice) * quantity * multiplier;
}

function computeMarginRatio({ maintenanceMargin, marginBalance }) {
  if (marginBalance <= 0) return Number.POSITIVE_INFINITY;
  return maintenanceMargin / marginBalance;
}

function shouldLiquidate({ maintenanceMargin, marginBalance }) {
  return computeMarginRatio({ maintenanceMargin, marginBalance }) >= 1;
}

module.exports = {
  SUPPORTED_LEVERAGE,
  SUPPORTED_MARGIN_MODES,
  SUPPORTED_ORDER_TYPES,
  SUPPORTED_SIDES,
  validateOrderInput,
  computeOrderNotional,
  computeInitialMargin,
  computeFees,
  computeMaintenanceMargin,
  ensureMarginAvailable,
  computeLiquidationPrice,
  computeUnrealizedPnl,
  computeMarginRatio,
  shouldLiquidate,
};
