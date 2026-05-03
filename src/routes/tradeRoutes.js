const express = require('express');

const { placeTrade, getMyTrades } = require('../controllers/tradeController');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', requireAuth, getMyTrades);
router.post('/', requireAuth, placeTrade);

module.exports = router;
