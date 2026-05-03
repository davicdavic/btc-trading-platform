const {
    getWalletSummary,
    createDeposit,
    createWithdrawal,
    createStakePosition,
    claimStakeRewards
} = require('../services/walletService');

async function getSummary(req, res) {
    try {
        const summary = await getWalletSummary(req.user.id);
        res.json(summary);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function requestDeposit(req, res) {
    try {
        const { amount, txHash, fromWallet } = req.body;
        const result = await createDeposit(req.user.id, {
            amount: Number(amount),
            txHash,
            fromWallet
        });
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function requestWithdrawal(req, res) {
    try {
        const { amount, walletAddress } = req.body;
        const result = await createWithdrawal(req.user.id, {
            amount: Number(amount),
            walletAddress
        });
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function createStakeRecord(req, res) {
    try {
        const { amount } = req.body;
        const stake = await createStakePosition(req.user.id, { amount: Number(amount) });
        res.status(201).json(stake);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function claimRewards(req, res) {
    try {
        const result = await claimStakeRewards(req.user.id, req.params.stakeId);
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getSummary,
    requestDeposit,
    requestWithdrawal,
    createStakeRecord,
    claimRewards
};
