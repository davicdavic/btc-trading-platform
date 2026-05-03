const express = require('express');

const { getNews, likeArticle, commentOnArticle } = require('../controllers/newsController');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', getNews);
router.post('/:articleId/like', requireAuth, likeArticle);
router.post('/:articleId/comments', requireAuth, commentOnArticle);

module.exports = router;
