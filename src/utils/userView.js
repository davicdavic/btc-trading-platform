function sanitizeUser(user) {
    return {
        id: user.id,
        userTag: user.userTag,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        balances: user.balances,
        profile: user.profile,
        kyc: user.kyc,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt
    };
}

module.exports = { sanitizeUser };
