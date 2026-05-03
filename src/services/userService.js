const bcrypt = require('bcryptjs');
const path = require('path');

const { updateStore, readStore } = require('./storeService');
const { sanitizeUser } = require('../utils/userView');

async function getUserById(userId) {
    const store = await readStore();
    const user = store.users.find((entry) => entry.id === userId);
    if (!user) {
        throw new Error('User not found.');
    }
    return user;
}

async function updateProfile(userId, payload) {
    let updatedUser;

    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (!user) {
            throw new Error('User not found.');
        }

        user.profile = {
            ...user.profile,
            ...payload
        };
        user.fullName = payload.name || user.fullName;
        user.updatedAt = new Date().toISOString();
        updatedUser = sanitizeUser(user);
        return store;
    });

    return updatedUser;
}

async function updateSettings(userId, { name, city, job, postCode, country, avatarPath, currentPassword, newPassword }) {
    let updatedUser;

    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (!user) {
            throw new Error('User not found.');
        }

        if (newPassword) {
            const matches = await bcrypt.compare(currentPassword || '', user.passwordHash);
            if (!matches) {
                throw new Error('Current password is incorrect.');
            }
            user.passwordHash = await bcrypt.hash(newPassword, 10);
        }

        user.profile = {
            ...user.profile,
            name: name || user.profile.name,
            city: city || user.profile.city,
            job: job || user.profile.job,
            postCode: postCode || user.profile.postCode,
            country: country || user.profile.country,
            avatarPath: avatarPath ? `/uploads/${path.basename(avatarPath)}` : user.profile.avatarPath
        };
        user.fullName = name || user.fullName;
        user.updatedAt = new Date().toISOString();
        updatedUser = sanitizeUser(user);
        return store;
    });

    return updatedUser;
}

async function submitKyc(userId, { name, city, job, postCode, country, idType, documentPath }) {
    let updatedUser;

    await updateStore(async (store) => {
        const user = store.users.find((entry) => entry.id === userId);
        if (!user) {
            throw new Error('User not found.');
        }

        user.profile.name = name;
        user.profile.city = city;
        user.profile.job = job;
        user.profile.postCode = postCode;
        user.profile.country = country;
        user.fullName = name;
        user.kyc = {
            ...user.kyc,
            status: 'pending',
            documentPath: documentPath ? `/uploads/${path.basename(documentPath)}` : user.kyc.documentPath,
            idType,
            submittedAt: new Date().toISOString(),
            reviewedAt: null
        };
        user.updatedAt = new Date().toISOString();
        updatedUser = sanitizeUser(user);

        store.adminActivity.unshift({
            id: `kyc-${user.id}-${Date.now()}`,
            message: `${user.email} submitted KYC`,
            createdAt: new Date().toISOString()
        });

        return store;
    });

    return updatedUser;
}

module.exports = {
    getUserById,
    updateProfile,
    updateSettings,
    submitKyc
};
