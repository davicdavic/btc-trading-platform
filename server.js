const express = require('express');
const path = require('path');

const authRoutes = require('./src/routes/authRoutes');
const userRoutes = require('./src/routes/userRoutes');
const walletRoutes = require('./src/routes/walletRoutes');
const marketRoutes = require('./src/routes/marketRoutes');
const tradeRoutes = require('./src/routes/tradeRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const newsRoutes = require('./src/routes/newsRoutes');
const { initializeStore } = require('./src/services/storeService');

const app = express();
const PORT = process.env.PORT || 4173;
const publicDir = path.join(__dirname, 'dist');

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/market', marketRoutes);
app.use('/api/trades', tradeRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/news', newsRoutes);

app.use(express.static(publicDir));

app.get('/health', (_req, res) => {
    res.json({ ok: true, timestamp: new Date().toISOString() });
});

app.use((_req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

initializeStore()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`BTCTrade Pro demo server running on http://127.0.0.1:${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Failed to initialize store:', error);
        process.exit(1);
    });
