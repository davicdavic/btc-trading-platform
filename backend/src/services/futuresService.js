const { randomUUID } = require('crypto');
const {
  validateOrderInput,
  computeOrderNotional,
  computeInitialMargin,
  computeFees,
  ensureMarginAvailable,
  computeLiquidationPrice,
  computeUnrealizedPnl,
} = require('../engines/riskEngine');
const { shouldExecuteRestingOrder, createTradeFill } = require('../engines/matchingEngine');
const { evaluatePositionForLiquidation } = require('../engines/liquidationEngine');

class FuturesService {
  constructor({ repository, marketService }) {
    this.repository = repository;
    this.marketService = marketService;

    this.marketService.subscribe((event) => {
      if (event.type === 'market.tick') {
        this.handlePriceTick(event.payload.symbol, event.payload.price);
      }
    });
  }

  listMarketPairs() {
    return this.repository.listPairs();
  }

  placeOrder(userId, payload) {
    const pair = this.repository.getPair(payload.symbol);
    const user = this.repository.getUser(userId);
    validateOrderInput({ pair, user, order: payload });

    const markPrice = this.marketService.getMarkPrice(payload.symbol);
    const referencePrice = payload.type === 'market' ? markPrice : payload.limitPrice;
    if (!referencePrice) throw new Error('No mark price available for this symbol.');

    const notional = computeOrderNotional(payload.quantity, referencePrice);
    const initialMargin = computeInitialMargin(notional, payload.leverage);
    const feeBps = payload.type === 'market' ? pair.takerFeeBps : pair.makerFeeBps;
    const estimatedFees = computeFees(notional, feeBps);

    ensureMarginAvailable(user, initialMargin + estimatedFees);

    const order = {
      id: randomUUID(),
      userId,
      symbol: payload.symbol,
      type: payload.type,
      side: payload.side,
      quantity: payload.quantity,
      remainingQuantity: payload.quantity,
      limitPrice: payload.limitPrice || null,
      stopPrice: payload.stopPrice || null,
      leverage: payload.leverage,
      marginMode: payload.marginMode,
      takeProfitPrice: payload.takeProfitPrice || null,
      stopLossPrice: payload.stopLossPrice || null,
      status: 'open',
      notional,
      initialMargin,
      estimatedFees,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.repository.updateUser(userId, (current) => ({
      ...current,
      balances: {
        ...current.balances,
        availableUsdt: current.balances.availableUsdt - initialMargin - estimatedFees,
        lockedUsdt: current.balances.lockedUsdt + initialMargin + estimatedFees,
      },
    }));
    this.repository.insertOrder(order);
    this.repository.insertAuditLog({
      id: randomUUID(),
      type: 'order.created',
      actorId: userId,
      payload: { orderId: order.id, symbol: order.symbol, type: order.type, side: order.side },
      createdAt: new Date().toISOString(),
    });

    if (order.type === 'market') {
      return this.#executeOrder(order, referencePrice, true);
    }

    return { order, executed: false };
  }

  cancelOrder(userId, orderId) {
    const order = this.repository.listOrders({ userId }).find((entry) => entry.id === orderId);
    if (!order) throw new Error('Order not found.');
    if (order.status !== 'open') throw new Error('Only open orders can be cancelled.');

    const cancelled = this.repository.updateOrder(orderId, (current) => ({
      ...current,
      status: 'cancelled',
      updatedAt: new Date().toISOString(),
    }));

    this.repository.updateUser(userId, (current) => ({
      ...current,
      balances: {
        ...current.balances,
        availableUsdt: current.balances.availableUsdt + order.initialMargin + order.estimatedFees,
        lockedUsdt: Math.max(0, current.balances.lockedUsdt - order.initialMargin - order.estimatedFees),
      },
    }));

    return cancelled;
  }

  getUserPortfolio(userId) {
    const user = this.repository.getUser(userId);
    if (!user) throw new Error('User not found.');

    const positions = this.repository.listPositions({ userId, status: 'open' }).map((position) => {
      const markPrice = this.marketService.getMarkPrice(position.symbol) || position.entryPrice;
      const unrealizedPnl = computeUnrealizedPnl({
        side: position.side,
        quantity: position.quantity,
        entryPrice: position.entryPrice,
        markPrice,
      });
      return { ...position, markPrice, unrealizedPnl };
    });

    return {
      balances: user.balances,
      openOrders: this.repository.listOrders({ userId, status: 'open' }),
      positions,
      trades: this.repository.listTrades({ userId }).slice(0, 100),
      liquidations: this.repository.listLiquidations({ userId }).slice(0, 50),
    };
  }

  closePosition(userId, positionId, quantity) {
    const position = this.repository.listPositions({ userId, status: 'open' }).find((entry) => entry.id === positionId);
    if (!position) throw new Error('Position not found.');

    const closeQuantity = Math.min(quantity || position.quantity, position.quantity);
    if (closeQuantity <= 0) throw new Error('Close quantity must be greater than zero.');

    const exitPrice = this.marketService.getMarkPrice(position.symbol);
    if (!exitPrice) throw new Error('No mark price available.');

    return this.#realizePosition(position, closeQuantity, exitPrice, 'manual-close');
  }

  setUserFrozen(adminId, userId, frozen) {
    const updated = this.repository.updateUser(userId, (current) => ({ ...current, frozen }));
    if (!updated) throw new Error('User not found.');
    this.repository.insertAuditLog({
      id: randomUUID(),
      type: frozen ? 'user.frozen' : 'user.unfrozen',
      actorId: adminId,
      payload: { userId },
      createdAt: new Date().toISOString(),
    });
    return updated;
  }

  updatePairRisk(adminId, symbol, updates) {
    const current = this.repository.getPair(symbol);
    if (!current) throw new Error('Pair not found.');
    const next = this.repository.upsertPair({ ...current, ...updates });
    this.repository.insertAuditLog({
      id: randomUUID(),
      type: 'pair.updated',
      actorId: adminId,
      payload: { symbol, updates },
      createdAt: new Date().toISOString(),
    });
    return next;
  }

  getAdminDashboard() {
    return {
      users: this.repository.listUsers(),
      pairs: this.repository.listPairs(),
      openOrders: this.repository.listOrders({ status: 'open' }),
      openPositions: this.repository.listPositions({ status: 'open' }),
      recentTrades: this.repository.listTrades().slice(0, 100),
      liquidations: this.repository.listLiquidations().slice(0, 50),
      analytics: this.repository.getAnalytics(),
      auditLogs: this.repository.listAuditLogs(100),
    };
  }

  handlePriceTick(symbol, markPrice) {
    const openOrders = this.repository.listOrders({ symbol, status: 'open' });
    openOrders
      .filter((order) => shouldExecuteRestingOrder(order, markPrice))
      .forEach((order) => this.#executeOrder(order, order.limitPrice || markPrice, order.type === 'market'));

    const openPositions = this.repository.listPositions({ symbol, status: 'open' });
    openPositions.forEach((position) => {
      const pair = this.repository.getPair(position.symbol);
      if (!pair) return;
      const review = evaluatePositionForLiquidation(position, pair, markPrice);
      if (review.shouldLiquidate) {
        this.#liquidatePosition(position, markPrice, review.marginBalance);
        return;
      }

      if (position.takeProfitPrice) {
        const tpHit = position.side === 'buy' ? markPrice >= position.takeProfitPrice : markPrice <= position.takeProfitPrice;
        if (tpHit) this.#realizePosition(position, position.quantity, markPrice, 'take-profit');
      }

      if (position.stopLossPrice) {
        const slHit = position.side === 'buy' ? markPrice <= position.stopLossPrice : markPrice >= position.stopLossPrice;
        if (slHit) this.#realizePosition(position, position.quantity, markPrice, 'stop-loss');
      }
    });
  }

  #executeOrder(order, executionPrice, taker) {
    const pair = this.repository.getPair(order.symbol);
    const fill = createTradeFill({
      order,
      price: executionPrice,
      quantity: order.remainingQuantity,
      feeBps: taker ? pair.takerFeeBps : pair.makerFeeBps,
      taker,
    });

    this.repository.insertTrade(fill);
    this.repository.updateOrder(order.id, (current) => ({
      ...current,
      status: 'filled',
      remainingQuantity: 0,
      averageFillPrice: executionPrice,
      updatedAt: new Date().toISOString(),
    }));

    const currentPosition =
      this.repository.listPositions({ userId: order.userId, symbol: order.symbol, status: 'open' })
        .find((entry) => entry.marginMode === order.marginMode) || null;

    const margin = currentPosition ? currentPosition.margin + order.initialMargin : order.initialMargin;
    const notional = currentPosition ? currentPosition.notional + fill.notional : fill.notional;
    const quantity = currentPosition ? currentPosition.quantity + fill.quantity : fill.quantity;
    const entryPrice = currentPosition
      ? ((currentPosition.entryPrice * currentPosition.quantity) + (executionPrice * fill.quantity)) / quantity
      : executionPrice;

    const nextPosition = {
      id: currentPosition?.id || randomUUID(),
      userId: order.userId,
      symbol: order.symbol,
      side: order.side,
      quantity,
      entryPrice,
      markPrice: executionPrice,
      leverage: order.leverage,
      marginMode: order.marginMode,
      margin,
      notional,
      liquidationPrice: computeLiquidationPrice({
        side: order.side,
        entryPrice,
        leverage: order.leverage,
        maintenanceMarginRate: pair.maintenanceMarginRate,
      }),
      maintenanceMarginRate: pair.maintenanceMarginRate,
      fundingAccrued: currentPosition?.fundingAccrued || 0,
      feesAccrued: (currentPosition?.feesAccrued || 0) + fill.feePaid,
      takeProfitPrice: order.takeProfitPrice || currentPosition?.takeProfitPrice || null,
      stopLossPrice: order.stopLossPrice || currentPosition?.stopLossPrice || null,
      status: 'open',
      openedAt: currentPosition?.openedAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    this.repository.upsertPosition(nextPosition);
    return { orderId: order.id, fill, position: nextPosition, executed: true };
  }

  #realizePosition(position, closeQuantity, exitPrice, reason) {
    const closeRatio = closeQuantity / position.quantity;
    const realizedPnl = computeUnrealizedPnl({
      side: position.side,
      quantity: closeQuantity,
      entryPrice: position.entryPrice,
      markPrice: exitPrice,
    });
    const releasedMargin = position.margin * closeRatio;
    const releasedNotional = position.notional * closeRatio;
    const releasedFunding = position.fundingAccrued * closeRatio;
    const releasedFees = position.feesAccrued * closeRatio;
    const user = this.repository.getUser(position.userId);

    this.repository.updateUser(position.userId, (current) => ({
      ...current,
      balances: {
        ...current.balances,
        availableUsdt: current.balances.availableUsdt + releasedMargin + realizedPnl,
        lockedUsdt: Math.max(0, current.balances.lockedUsdt - releasedMargin - releasedFees),
      },
    }));

    if (closeQuantity >= position.quantity) {
      this.repository.removePosition(position.id);
    } else {
      this.repository.upsertPosition({
        ...position,
        quantity: position.quantity - closeQuantity,
        margin: position.margin - releasedMargin,
        notional: position.notional - releasedNotional,
        fundingAccrued: position.fundingAccrued - releasedFunding,
        feesAccrued: position.feesAccrued - releasedFees,
        updatedAt: new Date().toISOString(),
      });
    }

    const auditEntry = {
      id: randomUUID(),
      type: 'position.closed',
      actorId: user?.id,
      payload: { positionId: position.id, closeQuantity, exitPrice, realizedPnl, reason },
      createdAt: new Date().toISOString(),
    };
    this.repository.insertAuditLog(auditEntry);

    return { positionId: position.id, closeQuantity, exitPrice, realizedPnl, reason };
  }

  #liquidatePosition(position, markPrice, marginBalance) {
    this.repository.insertLiquidation({
      id: randomUUID(),
      userId: position.userId,
      symbol: position.symbol,
      positionId: position.id,
      markPrice,
      marginBalance,
      createdAt: new Date().toISOString(),
    });
    this.repository.removePosition(position.id);
    this.repository.insertAuditLog({
      id: randomUUID(),
      type: 'position.liquidated',
      actorId: position.userId,
      payload: { positionId: position.id, symbol: position.symbol, markPrice },
      createdAt: new Date().toISOString(),
    });
  }
}

module.exports = {
  FuturesService,
};
