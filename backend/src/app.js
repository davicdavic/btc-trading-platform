const http = require('http');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const { port, corsOrigin, wsMarketUrl } = require('./config/env');
const { apiRateLimit } = require('./middleware/rateLimit');
const { InMemoryExchangeRepository } = require('./repositories/inMemoryExchangeRepository');
const { MarketService } = require('./services/marketService');
const { FuturesService } = require('./services/futuresService');
const { WebsocketService } = require('./services/websocketService');
const { createFuturesController } = require('./controllers/futuresController');
const { createAdminController } = require('./controllers/adminController');
const { createMarketController } = require('./controllers/marketController');
const { createRouter } = require('./routes');

const app = express();
const server = http.createServer(app);
const repository = new InMemoryExchangeRepository();
const marketService = new MarketService({ repository, wsUrl: wsMarketUrl });
const futuresService = new FuturesService({ repository, marketService });
const websocketService = new WebsocketService({ server, marketService, futuresService, repository });

const futuresController = createFuturesController({ futuresService });
const adminController = createAdminController({ futuresService });
const marketController = createMarketController({ marketService });

app.use(helmet());
app.use(cors({ origin: corsOrigin === '*' ? true : corsOrigin.split(',') }));
app.use(express.json({ limit: '1mb' }));
app.use(apiRateLimit);

app.get('/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'futures-backend',
    timestamp: new Date().toISOString(),
  });
});

app.use('/api', createRouter({ futuresController, adminController, marketController }));

marketService.connect();
websocketService.start();

server.listen(port, () => {
  console.log(`Futures backend running on http://127.0.0.1:${port}`);
});
