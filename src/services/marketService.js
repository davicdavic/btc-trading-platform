const axios = require('axios');
const { readStore } = require('./storeService');

const BINANCE_API = 'https://api.binance.com/api/v3';
const DEFAULT_BASE_PRICE = 65000;
const DEFAULT_VOLATILITY = 0.002;

// Realistic BTC price generation using market sentiment + random walk
function generateRealisticPrice(lastPrice, volatility = DEFAULT_VOLATILITY) {
    const now = Date.now();
    const hourOfDay = new Date(now).getHours();
    const dayFactor = Math.sin((hourOfDay - 12) * Math.PI / 12) * 0.001;
    const randomShock = (Math.random() - 0.5) * 2 * volatility;
    const trend = (Math.random() - 0.48) * 0.0005;
    const newPrice = lastPrice * (1 + randomShock + trend + dayFactor);
    return Math.round(newPrice * 100) / 100;
}

async function getMarketOverride() {
    const store = await readStore();
    return store.settings.marketOverride || { enabled: false, price: null, spread: null };
}

async function getTradeOverride() {
    const store = await readStore();
    return store.settings.tradeOverride || { enabled: false, buyPrice: null, sellPrice: null };
}

// Fetch real ticker from Binance
async function fetchTicker() {
    const [tickerResponse, priceResponse] = await Promise.all([
        axios.get(`${BINANCE_API}/ticker/24hr`, {
            params: { symbol: 'BTCUSDT' },
            timeout: 10000
        }),
        axios.get(`${BINANCE_API}/ticker/price`, {
            params: { symbol: 'BTCUSDT' },
            timeout: 10000
        })
    ]);

    return {
        symbol: 'BTCUSDT',
        price: Number(priceResponse.data.price),
        priceChangePercent: Number(tickerResponse.data.priceChangePercent),
        high24h: Number(tickerResponse.data.highPrice),
        low24h: Number(tickerResponse.data.lowPrice),
        volume24h: Number(tickerResponse.data.volume),
        quoteVolume: Number(tickerResponse.data.quoteVolume),
        source: 'binance'
    };
}

// Get current BTC price - respects admin overrides
async function getCurrentPrice() {
    const marketOverride = await getMarketOverride();
    const ticker = await fetchTicker();

    if (marketOverride.enabled && marketOverride.price) {
        const spread = marketOverride.spread || 0;
        return {
            symbol: 'BTCUSDT',
            price: Number(marketOverride.price),
            spread,
            buyPrice: Number(marketOverride.price) * (1 + spread / 100),
            sellPrice: Number(marketOverride.price) * (1 - spread / 100),
            source: 'admin-override',
            originalPrice: ticker.price,
            priceChangePercent: ((marketOverride.price - ticker.price) / ticker.price) * 100
        };
    }

    return {
        symbol: 'BTCUSDT',
        price: ticker.price,
        priceChangePercent: ticker.priceChangePercent,
        high24h: ticker.high24h,
        low24h: ticker.low24h,
        volume24h: ticker.volume24h,
        source: 'binance'
    };
}

// Generate simulated price at specific time (for historical analysis)
async function getSimulatedPriceAt(timestamp) {
    const now = Date.now();
    const diffMs = now - timestamp;
    const volatility = DEFAULT_VOLATILITY * Math.sqrt(diffMs / 60000);
    const basePrice = DEFAULT_BASE_PRICE;
    const randomWalk = (Math.random() - 0.5) * 2 * volatility;
    const simulatedPrice = basePrice * (1 + randomWalk);
    return Math.round(simulatedPrice * 100) / 100;
}

// Generate kline (candlestick) data for charts
async function generateKlines(interval = '1h', limit = 60) {
    const intervals = {
        '1m': 60 * 1000,
        '5m': 5 * 60 * 1000,
        '15m': 15 * 60 * 1000,
        '30m': 30 * 60 * 1000,
        '1h': 60 * 60 * 1000,
        '4h': 4 * 60 * 60 * 1000,
        '1d': 24 * 60 * 60 * 1000
    };

    const intervalMs = intervals[interval] || intervals['1h'];
    const ticker = await fetchTicker();
    const currentPrice = ticker.price;
    const klines = [];

    let lastClose = currentPrice;
    const now = Date.now();

    for (let i = limit - 1; i >= 0; i--) {
        const openTime = now - (i * intervalMs);
        const volatility = DEFAULT_VOLATILITY * Math.sqrt(intervalMs / 60000);
        const change = (Math.random() - 0.5) * 2 * volatility;
        const open = lastClose;
        const close = open * (1 + change);
        const highExtra = Math.abs(Math.random() * volatility * open);
        const lowExtra = Math.abs(Math.random() * volatility * open);
        const high = Math.max(open, close) + highExtra;
        const low = Math.min(open, close) - lowExtra;
        const volume = 100 + Math.random() * 900;

        klines.push({
            openTime,
            open: Math.round(open * 100) / 100,
            high: Math.round(high * 100) / 100,
            low: Math.round(low * 100) / 100,
            close: Math.round(close * 100) / 100,
            volume: Math.round(volume * 100) / 100,
            closeTime: openTime + intervalMs - 1,
            isFinal: true
        });

        lastClose = close;
    }

    return klines;
}

// Fetch klines from Binance with fallback to simulated data
async function fetchKlines(interval = '1h', limit = 60) {
    try {
        const response = await axios.get(`${BINANCE_API}/klines`, {
            params: {
                symbol: 'BTCUSDT',
                interval,
                limit
            },
            timeout: 10000
        });

        return response.data.map((entry) => ({
            openTime: entry[0],
            open: Number(entry[1]),
            high: Number(entry[2]),
            low: Number(entry[3]),
            close: Number(entry[4]),
            volume: Number(entry[5]),
            closeTime: entry[6],
            isFinal: entry[8] === true
        }));
    } catch (_error) {
        return generateKlines(interval, limit);
    }
}

// Generate price prediction for trade direction
async function getPricePrediction(direction, durationSeconds) {
    const ticker = await fetchTicker();
    const currentPrice = ticker.price;
    const volatility = DEFAULT_VOLATILITY * Math.sqrt(durationSeconds / 60);
    const directionMultiplier = direction === 'UP' ? 1 : -1;
    const predictedChange = directionMultiplier * Math.random() * volatility * currentPrice;
    const predictedPrice = currentPrice + predictedChange;
    const confidence = 0.5 + Math.random() * 0.3;

    return {
        currentPrice,
        predictedPrice: Math.round(predictedPrice * 100) / 100,
        changePercent: (predictedChange / currentPrice) * 100,
        confidence: Math.round(confidence * 100) / 100,
        duration: durationSeconds,
        direction
    };
}

// Get price at expiration time for time-based trades
async function getExpirationPrice(entryPrice, durationSeconds, tradeId) {
    const store = await readStore();
    const marketOverride = store.settings.marketOverride;
    const tradeOverride = store.settings.tradeOverride;

    // Check if admin has set a specific trade outcome
    const activeTradeOverride = store.settings.activeTradeOverride;
    if (activeTradeOverride && activeTradeOverride.tradeId === tradeId) {
        return {
            expirationPrice: activeTradeOverride.price,
            source: 'admin-set',
            winner: activeTradeOverride.direction
        };
    }

    // Check if trade override is enabled (specific buy/sell prices)
    if (tradeOverride.enabled) {
        if (tradeOverride.direction === 'UP') {
            return {
                expirationPrice: entryPrice * 1.02,
                source: 'trade-override-up',
                winner: 'UP'
};
        } else if (tradeOverride.direction === 'DOWN') {
            return {
                expirationPrice: entryPrice * 0.98,
                source: 'trade-override-down',
                winner: 'DOWN'
            };
        }
    }

    // Market manipulation if enabled
    if (marketOverride.enabled && marketOverride.price) {
        // Admin can manipulate final price
        return {
            expirationPrice: marketOverride.price,
            source: 'market-manipulation',
            winner: marketOverride.lastDirection || 'UP'
        };
    }

    // Natural price movement with slight bias
    const volatility = DEFAULT_VOLATILITY * Math.sqrt(durationSeconds / 60);
    const naturalBias = (Math.random() - 0.48) * volatility;
    const finalPrice = entryPrice * (1 + naturalBias);

    return {
        expirationPrice: Math.round(finalPrice * 100) / 100,
        source: 'natural',
        winner: naturalBias > 0 ? 'UP' : 'DOWN'
    };
}

// Set admin-controlled trade outcome
async function setTradeOutcome(tradeId, direction, price) {
    await updateStore(async (store) => {
        if (!store.settings.activeTradeOverride) {
            store.settings.activeTradeOverride = {};
        }
        store.settings.activeTradeOverride = {
            tradeId,
            direction,
            price,
            setAt: new Date().toISOString()
        };
        store.adminActivity.unshift({
            id: `trade-outcome-${tradeId}`,
            message: `Trade outcome set: ${direction} at ${price}`,
            createdAt: new Date().toISOString()
        });
        return store;
    });
}

// Clear trade outcome after trade completes
async function clearTradeOutcome(tradeId) {
    await updateStore(async (store) => {
        if (store.settings.activeTradeOverride?.tradeId === tradeId) {
            store.settings.activeTradeOverride = null;
        }
        return store;
    });
}

// Fetch BTC news with NewsAPI support
async function fetchBtcNews() {
    const { NEWSAPI_KEY } = process.env;

    if (NEWSAPI_KEY) {
        try {
            const response = await axios.get('https://newsapi.org/v2/everything', {
                params: {
                    q: 'bitcoin OR BTC',
                    language: 'en',
                    sortBy: 'publishedAt',
                    pageSize: 10,
                    apiKey: NEWSAPI_KEY
                },
                timeout: 10000
            });

            return (response.data.articles || []).slice(0, 8).map((item, index) => ({
                id: `newsapi-${index}`,
                title: item.title,
                body: item.description || item.content || '',
                imageUrl: item.urlToImage || `imgs/news${(index % 4) + 1}.png`,
                url: item.url,
                source: item.source?.name || 'NewsAPI',
                publishedAt: item.publishedAt,
                category: 'Bitcoin'
            }));
        } catch (_error) {
            // Fall through to default news
        }
    }

    // Default news from CryptoCompare fallback
    try {
        const response = await axios.get('https://min-api.cryptocompare.com/data/v2/news/', {
            params: {
                categories: 'BTC',
                lang: 'EN'
            },
            timeout: 10000
        });

        return (response.data.Data || []).slice(0, 8).map((item) => ({
            id: String(item.id),
            title: item.title,
            body: item.body,
            imageUrl: item.imageurl,
            url: item.url,
            source: item.source_info?.name || item.source,
            publishedAt: new Date(item.published_on * 1000).toISOString(),
            category: 'Bitcoin'
        }));
    } catch (_error) {
        const now = Date.now();
        return [
            {
                id: 'fallback-1',
                title: 'Bitcoin market stays active as traders watch key resistance',
                body: 'Demo news fallback: live provider was unavailable, so the platform is showing locally cached BTC headlines.',
                imageUrl: 'imgs/news1.png',
                url: 'https://www.binance.com/en/trade/BTC_USDT',
                source: 'BTCTrade Pro',
                publishedAt: new Date(now).toISOString(),
                category: 'Bitcoin'
            },
            {
                id: 'fallback-2',
                title: 'Institutional flows keep BTC volatility elevated',
                body: 'This demo feed keeps the news section populated even when a public API refuses the request.',
                imageUrl: 'imgs/news2.png',
                url: 'https://www.coingecko.com/en/coins/bitcoin',
                source: 'BTCTrade Pro',
                publishedAt: new Date(now - 3600000).toISOString(),
                category: 'Bitcoin'
            },
            {
                id: 'fallback-3',
                title: 'BTC traders keep watching spot volume and ETF-related flows',
                body: 'The demo app is filling the news area with Bitcoin-focused placeholders so the home page still feels complete.',
                imageUrl: 'imgs/news3.png',
                url: 'https://www.binance.com/en/markets/overview',
                source: 'BTCTrade Pro',
                publishedAt: new Date(now - 7200000).toISOString(),
                category: 'Bitcoin'
            },
            {
                id: 'fallback-4',
                title: 'Bitcoin network activity stays steady as price consolidates',
                body: 'Even when the public news API is unavailable, the app keeps a fuller BTC news layout for a more professional feel.',
                imageUrl: 'imgs/news4.png',
                url: 'https://www.coingecko.com/en/categories/bitcoin-ecosystem',
                source: 'BTCTrade Pro',
                publishedAt: new Date(now - 10800000).toISOString(),
                category: 'Bitcoin'
            }
        ];
    }
}

module.exports = {
    fetchTicker,
    getCurrentPrice,
    getSimulatedPriceAt,
    generateKlines,
    fetchKlines,
    getPricePrediction,
    getExpirationPrice,
    setTradeOutcome,
    clearTradeOutcome,
    fetchBtcNews,
    getMarketOverride,
    getTradeOverride
};
