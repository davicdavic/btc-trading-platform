const express = require('express');
const {
    getAdminDashboard,
    reviewDepositRequest,
    reviewWithdrawalRequest,
    reviewUserKyc,
    adjustUserBalances,
    setTradeOverride,
    setTradeOutcome,
    setMarketOverride,
    getStats,
    getUsers,
    getPending,
    approveDeposit,
    approveWithdrawal,
    setVipLevel,
    setFeeRates,
    freezeAccount,
    unfreezeAccount,
    addWhitelist
} = require('../controllers/adminController');
const { requireAuth, requireAdmin } = require('../middleware/auth');
const router = express.Router();

router.use(requireAuth, requireAdmin);

// Dashboard and stats
router.get('/dashboard', getAdminDashboard);
router.get('/stats', getStats);
router.get('/users', getUsers);
router.get('/pending-requests', getPending);

// Request reviews
router.post('/deposits/:requestId/review', reviewDepositRequest);
router.post('/withdrawals/:requestId/review', reviewWithdrawalRequest);
router.post('/kyc/:userId/review', reviewUserKyc);

// New simplified approve/reject endpoints
router.post('/approve-deposit', approveDeposit);
router.post('/approve-withdrawal', approveWithdrawal);

// Balance adjustments
router.post('/users/:userId/adjust-balance', adjustUserBalances);

// Trade overrides
router.post('/trade-override', setTradeOverride);
router.post('/set-trade-outcome', setTradeOutcome);

// Market manipulation
router.post('/market-override', setMarketOverride);

// User management
router.post('/users/:userId/vip', setVipLevel);
router.post('/users/:userId/fees', setFeeRates);
router.post('/users/:userId/freeze', freezeAccount);
router.post('/users/:userId/unfreeze', unfreezeAccount);
router.post('/users/:userId/whitelist', addWhitelist);

module.exports = router;
