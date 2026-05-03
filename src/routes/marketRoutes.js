const express = require('express');

const { getTicker, getKlines } = require('../controllers/marketController');

const router = express.Router();

router.get('/ticker', getTicker);
router.get('/klines', getKlines);

module.exports = router;
