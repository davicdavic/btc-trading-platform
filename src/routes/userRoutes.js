const express = require('express');
const multer = require('multer');
const path = require('path');

const { getMyProfile, updateMyProfile, updateMySettings, submitMyKyc } = require('../controllers/userController');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

const storage = multer.diskStorage({
    destination: path.join(process.cwd(), 'uploads'),
    filename: (_req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`);
    }
});

const upload = multer({ storage });

router.get('/me', requireAuth, getMyProfile);
router.put('/me', requireAuth, updateMyProfile);
router.post('/me/settings', requireAuth, upload.single('avatar'), updateMySettings);
router.post('/me/kyc', requireAuth, upload.single('document'), submitMyKyc);

module.exports = router;
