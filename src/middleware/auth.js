const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config/constants');
const { readStore } = require('../services/storeService');

async function requireAuth(req, res, next) {
    try {
        const header = req.headers.authorization || '';
        const token = header.startsWith('Bearer ') ? header.slice(7) : null;

        if (!token) {
            return res.status(401).json({ error: 'Authentication required.' });
        }

        const payload = jwt.verify(token, JWT_SECRET);
        const store = await readStore();
        const user = store.users.find((entry) => entry.id === payload.sub);

        if (!user) {
            return res.status(401).json({ error: 'User not found.' });
        }

        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid or expired token.' });
    }
}

function requireAdmin(req, res, next) {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Admin access required.' });
    }
    return next();
}

module.exports = {
    requireAuth,
    requireAdmin
};
