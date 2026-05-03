const { getNewsFeed, toggleLike, addComment } = require('../services/newsService');

async function getNews(req, res) {
    try {
        const articles = await getNewsFeed(req.user?.id || '');
        res.json(articles);
    } catch (error) {
        res.status(502).json({ error: 'Failed to load BTC news.' });
    }
}

async function likeArticle(req, res) {
    try {
        const articles = await toggleLike(req.user.id, req.params.articleId);
        res.json(articles);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function commentOnArticle(req, res) {
    try {
        const articles = await addComment(
            req.user.id,
            req.params.articleId,
            req.body.text || '',
            req.user.fullName
        );
        res.json(articles);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getNews,
    likeArticle,
    commentOnArticle
};
