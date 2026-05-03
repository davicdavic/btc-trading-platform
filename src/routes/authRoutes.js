const express = require('express');

const { registerUser, loginUser, loginAdmin, getCurrentUser } = require('../controllers/authController');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/admin/login', loginAdmin);
router.get('/me', requireAuth, getCurrentUser);

module.exports = router;
