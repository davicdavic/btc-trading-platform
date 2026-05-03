const { chromium } = require('@playwright/test');
const { spawn } = require('child_process');

const BASE_URL = 'http://127.0.0.1:4173';

function wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForServer(url, retries = 30) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(`${url}/health`);
            if (response.ok) return;
        } catch (_error) {
            // Server not ready yet.
        }
        await wait(500);
    }
    throw new Error('Server failed to start in time.');
}

async function run() {
    const server = spawn('node', ['server.js'], {
        stdio: ['ignore', 'pipe', 'pipe']
    });

    server.stdout.on('data', (chunk) => process.stdout.write(chunk));
    server.stderr.on('data', (chunk) => process.stderr.write(chunk));

    try {
        await waitForServer(BASE_URL);

        const browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();
        const errors = [];

        page.on('console', (message) => {
            if (message.type() === 'error') {
                errors.push(message.text());
            }
        });

        page.on('pageerror', (error) => {
            errors.push(error.message);
        });

        await page.goto(`${BASE_URL}#/home`, { waitUntil: 'domcontentloaded', timeout: 30000 });
        await page.waitForSelector('#chartPrice');
        await page.waitForSelector('#newsGrid .news-card');
        await page.waitForTimeout(1500);

        const chartPrice = await page.textContent('#chartPrice');
        const newsCards = await page.locator('#newsGrid .news-card').count();
        const depositWallet = await page.textContent('#walletAddress');
        await page.evaluate(() => window.navigateToPage('trade'));
        await page.waitForSelector('[data-app-page="trade"].is-active');
        await page.evaluate(() => window.navigateToPage('deposit'));
        await page.waitForSelector('[data-app-page="deposit"].is-active');
        await page.evaluate(() => window.navigateToPage('withdraw'));
        await page.waitForSelector('[data-app-page="withdraw"].is-active');
        await page.evaluate(() => window.navigateToPage('profile'));
        await page.waitForSelector('[data-app-page="profile"].is-active');

        console.log('Chart price:', chartPrice);
        console.log('News cards:', newsCards);
        console.log('Deposit wallet:', depositWallet);

        if (errors.length) {
            console.log('Console errors found:');
            errors.forEach((entry) => console.log(entry));
            process.exitCode = 1;
        } else {
            console.log('No console errors detected');
        }

        await browser.close();
    } finally {
        server.kill('SIGKILL');
        await wait(300);
    }
}

run().catch((error) => {
    console.error('Test failed:', error.message);
    process.exitCode = 1;
});
