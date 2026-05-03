const { randomUUID } = require('crypto');

function createSeedPair(symbol, overrides = {}) {
  return {
    symbol,
    baseAsset: symbol.replace('USDT', ''),
    quoteAsset: 'USDT',
    minOrderSize: 0.001,
    maxOrderSize: 25,
    maxLeverage: 20,
    maintenanceMarginRate: 0.005,
    makerFeeBps: 2,
    takerFeeBps: 4,
    suspended: false,
    ...overrides,
  };
}

function createSeedUser(overrides = {}) {
  return {
    id: randomUUID(),
    email: 'demo@btctradepro.local',
    role: 'user',
    frozen: false,
    leverageCap: 20,
    balances: {
      availableUsdt: 25_000,
      lockedUsdt: 0,
      availableBtc: 0,
    },
    ...overrides,
  };
}

class InMemoryExchangeRepository {
  constructor() {
    this.state = {
      users: [
        createSeedUser(),
        createSeedUser({
          email: 'admin@btctradepro.local',
          role: 'admin',
          balances: { availableUsdt: 0, lockedUsdt: 0, availableBtc: 0 },
        }),
      ],
      pairs: [
        createSeedPair('BTCUSDT'),
        createSeedPair('ETHUSDT', { minOrderSize: 0.01 }),
      ],
      orders: [],
      positions: [],
      trades: [],
      candles: [],
      liquidationEvents: [],
      auditLogs: [],
      fundingRates: [],
      analytics: {
        totalVolume: 0,
        totalLiquidations: 0,
        openInterest: 0,
      },
      marketSnapshots: new Map(),
      sequence: 1,
    };
  }

  nextSequence() {
    const current = this.state.sequence;
    this.state.sequence += 1;
    return current;
  }

  listPairs() {
    return [...this.state.pairs];
  }

  getPair(symbol) {
    return this.state.pairs.find((pair) => pair.symbol === symbol) || null;
  }

  upsertPair(nextPair) {
    const index = this.state.pairs.findIndex((pair) => pair.symbol === nextPair.symbol);
    if (index >= 0) {
      this.state.pairs[index] = { ...this.state.pairs[index], ...nextPair };
      return this.state.pairs[index];
    }

    this.state.pairs.push(nextPair);
    return nextPair;
  }

  listUsers() {
    return [...this.state.users];
  }

  getUser(id) {
    return this.state.users.find((user) => user.id === id) || null;
  }

  updateUser(userId, updater) {
    const current = this.getUser(userId);
    if (!current) return null;
    const next = updater({ ...current });
    this.state.users = this.state.users.map((user) => (user.id === userId ? next : user));
    return next;
  }

  insertOrder(order) {
    this.state.orders.unshift(order);
    return order;
  }

  updateOrder(orderId, updater) {
    const current = this.state.orders.find((order) => order.id === orderId);
    if (!current) return null;
    const next = updater({ ...current });
    this.state.orders = this.state.orders.map((order) => (order.id === orderId ? next : order));
    return next;
  }

  listOrders(filters = {}) {
    return this.state.orders.filter((order) => {
      if (filters.userId && order.userId !== filters.userId) return false;
      if (filters.symbol && order.symbol !== filters.symbol) return false;
      if (filters.status && order.status !== filters.status) return false;
      return true;
    });
  }

  insertTrade(trade) {
    this.state.trades.unshift(trade);
    this.state.analytics.totalVolume += trade.notional;
    return trade;
  }

  listTrades(filters = {}) {
    return this.state.trades.filter((trade) => {
      if (filters.userId && trade.userId !== filters.userId) return false;
      if (filters.symbol && trade.symbol !== filters.symbol) return false;
      return true;
    });
  }

  upsertPosition(nextPosition) {
    const index = this.state.positions.findIndex(
      (position) =>
        position.userId === nextPosition.userId &&
        position.symbol === nextPosition.symbol &&
        position.marginMode === nextPosition.marginMode,
    );

    if (index >= 0) {
      this.state.positions[index] = { ...this.state.positions[index], ...nextPosition };
      return this.state.positions[index];
    }

    this.state.positions.push(nextPosition);
    return nextPosition;
  }

  removePosition(positionId) {
    this.state.positions = this.state.positions.filter((position) => position.id !== positionId);
  }

  listPositions(filters = {}) {
    return this.state.positions.filter((position) => {
      if (filters.userId && position.userId !== filters.userId) return false;
      if (filters.symbol && position.symbol !== filters.symbol) return false;
      if (filters.status && position.status !== filters.status) return false;
      return true;
    });
  }

  insertLiquidation(event) {
    this.state.liquidationEvents.unshift(event);
    this.state.analytics.totalLiquidations += 1;
    return event;
  }

  listLiquidations(filters = {}) {
    return this.state.liquidationEvents.filter((event) => {
      if (filters.userId && event.userId !== filters.userId) return false;
      if (filters.symbol && event.symbol !== filters.symbol) return false;
      return true;
    });
  }

  insertCandle(candle) {
    this.state.candles.unshift(candle);
    return candle;
  }

  listCandles(symbol, interval, limit = 200) {
    return this.state.candles
      .filter((candle) => candle.symbol === symbol && candle.interval === interval)
      .sort((a, b) => b.openTime - a.openTime)
      .slice(0, limit)
      .reverse();
  }

  setMarketSnapshot(symbol, snapshot) {
    this.state.marketSnapshots.set(symbol, snapshot);
  }

  getMarketSnapshot(symbol) {
    return this.state.marketSnapshots.get(symbol) || null;
  }

  insertFundingRate(rate) {
    this.state.fundingRates.unshift(rate);
    return rate;
  }

  getLatestFundingRate(symbol) {
    return this.state.fundingRates.find((rate) => rate.symbol === symbol) || null;
  }

  insertAuditLog(entry) {
    this.state.auditLogs.unshift(entry);
    return entry;
  }

  listAuditLogs(limit = 100) {
    return this.state.auditLogs.slice(0, limit);
  }

  getAnalytics() {
    return {
      ...this.state.analytics,
      openInterest: this.state.positions
        .filter((position) => position.status === 'open')
        .reduce((sum, position) => sum + position.notional, 0),
      users: this.state.users.length,
      openOrders: this.state.orders.filter((order) => order.status === 'open').length,
      openPositions: this.state.positions.filter((position) => position.status === 'open').length,
    };
  }
}

module.exports = {
  InMemoryExchangeRepository,
};
