const axios = require('axios');
const { createComment } = require('../models/storeModel');
const { readStore, updateStore } = require('./storeService');

const { NEWSAPI_KEY } = process.env;

// Fetch BTC news from NewsAPI with fallback to CryptoCompare
async function fetchBtcNews() {
    if (NEWSAPI_KEY) {
        try {
            const response = await axios.get('https://newsapi.org/v2/everything', {
                params: {
                    q: 'bitcoin OR BTC OR cryptocurrency',
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
            // Fall through to CryptoCompare fallback
        }
    }

    // Default news from CryptoCompare
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

// Fetch crypto news by category
async function fetchNewsByCategory(category = 'BTC') {
    try {
        const response = await axios.get('https://min-api.cryptocompare.com/data/v2/news/', {
            params: {
                categories: category,
                lang: 'EN'
            },
            timeout: 10000
        });

        return (response.data.Data || []).slice(0, 10).map((item) => ({
            id: String(item.id),
            title: item.title,
            body: item.body,
            imageUrl: item.imageurl,
            url: item.url,
            source: item.source_info?.name || item.source,
            publishedAt: new Date(item.published_on * 1000).toISOString(),
            category
        }));
    } catch (_error) {
        return fetchBtcNews();
    }
}

function mergeReactions(articles, store, userId) {
    return articles.map((article) => {
        const reaction = store.newsReactions.find((entry) => entry.articleId === article.id) || {
            articleId: article.id,
            likes: [],
            comments: []
        };

        return {
            ...article,
            likesCount: reaction.likes.length,
            likedByUser: reaction.likes.includes(userId),
            comments: reaction.comments
        };
    });
}

async function getNewsFeed(userId) {
    const [articles, store] = await Promise.all([fetchBtcNews(), readStore()]);
    return mergeReactions(articles, store, userId);
}

async function toggleLike(userId, articleId) {
    await updateStore(async (store) => {
        let reaction = store.newsReactions.find((entry) => entry.articleId === articleId);
        if (!reaction) {
            reaction = { articleId, likes: [], comments: [] };
            store.newsReactions.push(reaction);
        }

        if (reaction.likes.includes(userId)) {
            reaction.likes = reaction.likes.filter((entry) => entry !== userId);
        } else {
            reaction.likes.push(userId);
        }

        return store;
    });

    return getNewsFeed(userId);
}

async function addComment(userId, articleId, text, displayName) {
    if (!text.trim()) {
        throw new Error('Comment cannot be empty.');
    }

    await updateStore(async (store) => {
        let reaction = store.newsReactions.find((entry) => entry.articleId === articleId);
        if (!reaction) {
            reaction = { articleId, likes: [], comments: [] };
            store.newsReactions.push(reaction);
        }

        reaction.comments.unshift(createComment({
            userId,
            articleId,
            text: text.trim(),
            displayName
        }));

        return store;
    });

    return getNewsFeed(userId);
}

module.exports = {
    fetchBtcNews,
    fetchNewsByCategory,
    getNewsFeed,
    toggleLike,
    addComment
};
