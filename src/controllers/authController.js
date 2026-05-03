const { register, login } = require('../services/authService');
const { sanitizeUser } = require('../utils/userView');

async function registerUser(req, res) {
    try {
        const { fullName, email, password } = req.body;
        const result = await register({ fullName, email, password });
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function loginUser(req, res) {
    try {
        const { email, password } = req.body;
        const result = await login({ email, password });
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function loginAdmin(req, res) {
    try {
        const { email, password } = req.body;
        const result = await login({ email, password, role: 'admin' });
        res.json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

function getCurrentUser(req, res) {
    res.json({ user: sanitizeUser(req.user) });
}

module.exports = {
    registerUser,
    loginUser,
    loginAdmin,
    getCurrentUser
};
