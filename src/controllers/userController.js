const { updateProfile, updateSettings, submitKyc } = require('../services/userService');
const { sanitizeUser } = require('../utils/userView');

async function updateMyProfile(req, res) {
    try {
        const user = await updateProfile(req.user.id, req.body);
        res.json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function submitMyKyc(req, res) {
    try {
        const { name, city, job, postCode, country, idType } = req.body;
        const documentPath = req.file ? req.file.path : '';
        const user = await submitKyc(req.user.id, { name, city, job, postCode, country, idType, documentPath });
        res.json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function updateMySettings(req, res) {
    try {
        const { name, city, job, postCode, country, currentPassword, newPassword } = req.body;
        const avatarPath = req.file ? req.file.path : '';
        const user = await updateSettings(req.user.id, {
            name,
            city,
            job,
            postCode,
            country,
            avatarPath,
            currentPassword,
            newPassword
        });
        res.json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

function getMyProfile(req, res) {
    res.json({ user: sanitizeUser(req.user) });
}

module.exports = {
    updateMyProfile,
    updateMySettings,
    submitMyKyc,
    getMyProfile
};
