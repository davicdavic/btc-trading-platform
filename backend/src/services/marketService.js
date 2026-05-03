const WebSocket = require('ws');
const { randomUUID } = require('crypto');
const { buildOrderBook } = require('../engines/matchingEngine');

const INTERVAL_MS = {
  '1m': 60_000,
  '5m': 5 * 60_000,
  '15m': 15 * 60_000,
  '1h': 60 * 60_000,
  '4h': 4 * 60 * 60_000,
  '1d': 24 * 60 * 60_000,
};

class MarketService {
  constructor({ repository, wsUrl }) {
    this.repository = repository;
    this.wsUrl = wsUrl;
    this.socket = null;
    this.listeners = new Set();
    this.latestPriceBySymbol = new Map();
  }

  connect() {
    if (this.socket) return;

    this.socket = new WebSocket(this.wsUrl);
    this.socket.on('message', (buffer) => {
      const payload = JSON.parse(String(buffer));
      const symbol = (payload.s || 'BTCUSDT').toUpperCase();
      const price = Number(payload.p);
      const quantity = Number(payload.q);
      const timestamp = Number(payload.T || Date.now());
      if (!Number.isFinite(price)) return;

      const tick = {
        id: randomUUID(),
        symbol,
        price,
        quantity,
        timestamp,
        side: payload.m ? 'sell' : 'buy',
      };

      this.latestPriceBySymbol.set(symbol, tick.price);
      this.repository.setMarketSnapshot(symbol, {
        symbol,
        markPrice: tick.price,
        lastTradePrice: tick.price,
        quantity: tick.quantity,
        timestamp,
      });
      this.#appendCandles(symbol, tick);
      this.#emit({ type: 'market.tick', payload: tick });
    });

    this.socket.on('close', () => {
      this.socket = null;
      setTimeout(() => this.connect(), 3_000);
    });

    this.socket.on('error', () => {
      if (this.socket) {
        this.socket.terminate();
      }
    });
  }

  getMarkPrice(symbol) {
    const snapshot = this.repository.getMarketSnapshot(symbol);
    return snapshot?.markPrice || this.latestPriceBySymbol.get(symbol) || null;
  }

  getCandles(symbol, interval, limit = 200) {
    return this.repository.listCandles(symbol, interval, limit);
  }

  getTradeHistory(symbol, limit = 100) {
    return this.repository.listTrades({ symbol }).slice(0, limit);
  }

  getOrderBook(symbol) {
    const orders = this.repository.listOrders({ symbol, status: 'open' });
    const markPrice = this.getMarkPrice(symbol) || 0;
    return buildOrderBook(orders, markPrice);
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  #appendCandles(symbol, tick) {
    Object.entries(INTERVAL_MS).forEach(([interval, intervalMs]) => {
      const openTime = Math.floor(tick.timestamp / intervalMs) * intervalMs;
      const latest = this.repository.listCandles(symbol, interval, 1)[0];
      if (latest && latest.openTime === openTime) {
        const next = {
          ...latest,
          high: Math.max(latest.high, tick.price),
          low: Math.min(latest.low, tick.price),
          close: tick.price,
          volume: latest.volume + tick.quantity,
        };
        this.repository.insertCandle(next);
        return;
      }

      this.repository.insertCandle({
        id: randomUUID(),
        symbol,
        interval,
        openTime,
        closeTime: openTime + intervalMs - 1,
        open: tick.price,
        high: tick.price,
        low: tick.price,
        close: tick.price,
        volume: tick.quantity,
      });
    });
  }

  #emit(event) {
    for (const listener of this.listeners) {
      listener(event);
    }
  }
}

module.exports = {
  MarketService,
};
