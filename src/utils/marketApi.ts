import type { CandlestickData, HistogramData, Time } from 'lightweight-charts';

const COINBASE_BASE_URL = 'https://api.exchange.coinbase.com/products/BTC-USD';
const COINBASE_WS_URL = 'wss://ws-feed.exchange.coinbase.com';

const GRANULARITY_MAP = {
  '1m': 60,
  '5m': 300,
  '15m': 900,
  '1h': 3600,
  '4h': 14400,
  '1D': 86400,
} as const;

export type MarketInterval = keyof typeof GRANULARITY_MAP;

export function getIntervalSeconds(interval: MarketInterval): number {
  return GRANULARITY_MAP[interval];
}

export interface MarketSnapshot {
  price: number;
  open24h: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volume24h: number;
  updatedAt: string;
  source: 'live' | 'fallback';
}

export interface MarketCandle {
  candle: CandlestickData<Time>;
  volume: HistogramData<Time>;
}

interface CoinbaseTickerMessage {
  type?: string;
  product_id?: string;
  price?: string;
  open_24h?: string;
  high_24h?: string;
  low_24h?: string;
  volume_24h?: string;
  time?: string;
}

async function fetchJson<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Market request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function fetchBtcSnapshot(): Promise<MarketSnapshot> {
  const [ticker, stats] = await Promise.all([
    fetchJson<{ price: string; time: string }>(`${COINBASE_BASE_URL}/ticker`),
    fetchJson<{ open: string; high: string; low: string; volume: string; last: string }>(`${COINBASE_BASE_URL}/stats`),
  ]);

  const price = Number(ticker.price || stats.last);
  const open24h = Number(stats.open || price);
  const high24h = Number(stats.high || price);
  const low24h = Number(stats.low || price);
  const volume24h = Number(stats.volume || 0);
  const change24h = open24h ? ((price - open24h) / open24h) * 100 : 0;

  return {
    price,
    open24h,
    change24h,
    high24h,
    low24h,
    volume24h,
    updatedAt: ticker.time || new Date().toISOString(),
    source: 'live',
  };
}

export function subscribeBtcTicker(
  onSnapshot: (snapshot: MarketSnapshot) => void,
  onStateChange?: (state: 'open' | 'closed' | 'error') => void,
): () => void {
  const socket = new WebSocket(COINBASE_WS_URL);

  socket.addEventListener('open', () => {
    onStateChange?.('open');
    socket.send(JSON.stringify({
      type: 'subscribe',
      product_ids: ['BTC-USD'],
      channels: ['ticker', 'heartbeat'],
    }));
  });

  socket.addEventListener('message', (event) => {
    let payload: CoinbaseTickerMessage;

    try {
      payload = JSON.parse(event.data) as CoinbaseTickerMessage;
    } catch {
      return;
    }

    if (payload.type !== 'ticker' || payload.product_id !== 'BTC-USD') return;

    const price = Number(payload.price);
    const open24h = Number(payload.open_24h || price);
    const high24h = Number(payload.high_24h || price);
    const low24h = Number(payload.low_24h || price);
    const volume24h = Number(payload.volume_24h || 0);

    if (!Number.isFinite(price)) return;

    onSnapshot({
      price,
      open24h,
      change24h: open24h ? ((price - open24h) / open24h) * 100 : 0,
      high24h: Number.isFinite(high24h) ? high24h : price,
      low24h: Number.isFinite(low24h) ? low24h : price,
      volume24h: Number.isFinite(volume24h) ? volume24h : 0,
      updatedAt: payload.time || new Date().toISOString(),
      source: 'live',
    });
  });

  socket.addEventListener('error', () => {
    onStateChange?.('error');
  });

  socket.addEventListener('close', () => {
    onStateChange?.('closed');
  });

  return () => {
    socket.close();
  };
}

export async function fetchBtcCandles(interval: MarketInterval, limit = 120): Promise<MarketCandle[]> {
  const granularity = GRANULARITY_MAP[interval];
  const end = new Date();
  const start = new Date(end.getTime() - granularity * 1000 * limit);
  const params = new URLSearchParams({
    granularity: String(granularity),
    start: start.toISOString(),
    end: end.toISOString(),
  });

  const rows = await fetchJson<number[][]>(`${COINBASE_BASE_URL}/candles?${params.toString()}`);

  return rows
    .sort((a, b) => a[0] - b[0])
    .map(([time, low, high, open, close, volume]) => ({
      candle: {
        time: time as Time,
        open,
        high,
        low,
        close,
      },
      volume: {
        time: time as Time,
        value: volume,
        color: close >= open ? 'rgba(14, 203, 129, 0.28)' : 'rgba(246, 70, 93, 0.28)',
      },
    }));
}

export function createFallbackSnapshot(price = 67500): MarketSnapshot {
  return {
    price,
    open24h: price - 420,
    change24h: 0.62,
    high24h: price + 520,
    low24h: price - 780,
    volume24h: 18250,
    updatedAt: new Date().toISOString(),
    source: 'fallback',
  };
}

export function createFallbackCandles(
  interval: MarketInterval,
  basePrice: number,
  limit = 120,
): MarketCandle[] {
  const granularity = GRANULARITY_MAP[interval];
  const now = Math.floor(Date.now() / 1000);
  const candles: MarketCandle[] = [];
  let price = basePrice;

  for (let i = limit; i > 0; i -= 1) {
    const time = (now - i * granularity) as Time;
    const drift = (Math.random() - 0.48) * (basePrice * 0.0035);
    const open = price;
    const close = Math.max(1000, open + drift);
    const high = Math.max(open, close) + Math.random() * (basePrice * 0.0012);
    const low = Math.min(open, close) - Math.random() * (basePrice * 0.0012);
    const volume = Math.random() * 240 + 80;

    candles.push({
      candle: {
        time,
        open,
        high,
        low,
        close,
      },
      volume: {
        time,
        value: volume,
        color: close >= open ? 'rgba(14, 203, 129, 0.28)' : 'rgba(246, 70, 93, 0.28)',
      },
    });

    price = close;
  }

  return candles;
}
