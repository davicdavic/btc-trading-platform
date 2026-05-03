const { WebSocketServer } = require('ws');

class WebsocketService {
  constructor({ server, marketService, futuresService, repository }) {
    this.wss = new WebSocketServer({ server, path: '/ws' });
    this.marketService = marketService;
    this.futuresService = futuresService;
    this.repository = repository;
    this.clients = new Map();
  }

  start() {
    this.wss.on('connection', (socket) => {
      this.clients.set(socket, { channels: new Set(['ticker:BTCUSDT']) });
      socket.on('message', (buffer) => this.#handleMessage(socket, buffer));
      socket.on('close', () => this.clients.delete(socket));
    });

    this.marketService.subscribe((event) => {
      if (event.type !== 'market.tick') return;
      this.broadcast(`ticker:${event.payload.symbol}`, {
        type: event.type,
        payload: {
          ...event.payload,
          orderBook: this.marketService.getOrderBook(event.payload.symbol),
        },
      });
    });
  }

  broadcast(channel, payload) {
    const serialized = JSON.stringify(payload);
    for (const [socket, state] of this.clients.entries()) {
      if (socket.readyState !== socket.OPEN) continue;
      if (state.channels.has(channel) || state.channels.has('*')) {
        socket.send(serialized);
      }
    }
  }

  #handleMessage(socket, buffer) {
    try {
      const message = JSON.parse(String(buffer));
      const state = this.clients.get(socket);
      if (!state) return;
      if (message.action === 'subscribe' && typeof message.channel === 'string') {
        state.channels.add(message.channel);
      }
      if (message.action === 'unsubscribe' && typeof message.channel === 'string') {
        state.channels.delete(message.channel);
      }
    } catch (_error) {
      socket.send(JSON.stringify({ type: 'error', payload: { message: 'Invalid websocket payload.' } }));
    }
  }
}

module.exports = {
  WebsocketService,
};
