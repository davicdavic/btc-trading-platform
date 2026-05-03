const { randomUUID } = require('crypto');

function isLimitOrderCrossed(order, markPrice) {
  if (order.type !== 'limit') return false;
  if (order.side === 'buy') return markPrice <= order.limitPrice;
  return markPrice >= order.limitPrice;
}

function isStopOrderTriggered(order, markPrice) {
  if (!order.type.startsWith('stop')) return false;
  if (order.side === 'buy') return markPrice >= order.stopPrice;
  return markPrice <= order.stopPrice;
}

function shouldExecuteRestingOrder(order, markPrice) {
  if (order.type === 'market') return true;
  if (order.type === 'limit') return isLimitOrderCrossed(order, markPrice);
  if (order.type === 'stop-market') return isStopOrderTriggered(order, markPrice);
  if (order.type === 'stop-limit') {
    return isStopOrderTriggered(order, markPrice) && isLimitOrderCrossed({ ...order, type: 'limit' }, markPrice);
  }
  return false;
}

function createTradeFill({ order, price, quantity, feeBps, taker = true }) {
  const notional = price * quantity;
  return {
    id: randomUUID(),
    orderId: order.id,
    userId: order.userId,
    symbol: order.symbol,
    side: order.side,
    price,
    quantity,
    notional,
    liquidityRole: taker ? 'taker' : 'maker',
    feeBps,
    feePaid: notional * (feeBps / 10_000),
    createdAt: new Date().toISOString(),
  };
}

function buildOrderBook(orders, markPrice) {
  const bids = orders
    .filter((order) => order.status === 'open' && order.side === 'buy' && order.limitPrice)
    .sort((a, b) => b.limitPrice - a.limitPrice)
    .slice(0, 12)
    .map((order) => ({ price: order.limitPrice, quantity: order.remainingQuantity }));

  const asks = orders
    .filter((order) => order.status === 'open' && order.side === 'sell' && order.limitPrice)
    .sort((a, b) => a.limitPrice - b.limitPrice)
    .slice(0, 12)
    .map((order) => ({ price: order.limitPrice, quantity: order.remainingQuantity }));

  return {
    symbol: orders[0]?.symbol || 'BTCUSDT',
    bids,
    asks,
    markPrice,
    spread: bids[0] && asks[0] ? asks[0].price - bids[0].price : 0,
    updatedAt: new Date().toISOString(),
  };
}

module.exports = {
  shouldExecuteRestingOrder,
  createTradeFill,
  buildOrderBook,
};
