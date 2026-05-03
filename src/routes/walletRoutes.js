const express = require('express');

const {
    getSummary,
    requestDeposit,
    requestWithdrawal,
    createStakeRecord,
    claimRewards
} = require('../controllers/walletController');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/summary', requireAuth, getSummary);
router.post('/deposit', requireAuth, requestDeposit);
router.post('/withdraw', requireAuth, requestWithdrawal);
router.post('/stake', requireAuth, createStakeRecord);
router.post('/stake/:stakeId/claim', requireAuth, claimRewards);

module.exports = router;
