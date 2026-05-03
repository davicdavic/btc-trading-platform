const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = require('../config/constants');
const { createUser } = require('../models/storeModel');
const { readStore, updateStore } = require('./storeService');
const { sanitizeUser } = require('../utils/userView');

function signToken(user) {
    return jwt.sign(
        {
            sub: user.id,
            role: user.role,
            email: user.email
        },
        JWT_SECRET,
        { expiresIn: '7d' }
    );
}

async function register({ fullName, email, password }) {
    const lowerEmail = email.toLowerCase();
    const store = await readStore();
    const existing = store.users.find((user) => user.email === lowerEmail);
    if (existing) {
        throw new Error('An account with this email already exists.');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = createUser({ fullName, email: lowerEmail, passwordHash });

    await updateStore(async (draft) => {
        draft.users.push(user);
        draft.adminActivity.unshift({
            id: `user-${user.id}`,
            message: `${user.email} registered`,
            createdAt: new Date().toISOString()
        });
        return draft;
    });

    return {
        token: signToken(user),
        user: sanitizeUser(user)
    };
}

async function login({ email, password, role }) {
    const store = await readStore();
    const user = store.users.find((entry) => entry.email === email.toLowerCase());

    if (!user) {
        throw new Error('Invalid email or password.');
    }

    if (role && user.role !== role) {
        throw new Error('This account cannot access that portal.');
    }

    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
        throw new Error('Invalid email or password.');
    }

    return {
        token: signToken(user),
        user: sanitizeUser(user)
    };
}

module.exports = {
    register,
    login
};
