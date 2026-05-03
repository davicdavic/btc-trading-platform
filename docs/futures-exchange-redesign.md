# Futures Exchange Redesign

## Current Codebase Findings

The current project has two very different systems living side by side:

1. The Vite frontend in `src/` keeps most trading state in browser memory and `localStorage`.
2. The Express backend in `src/services/*.js` is still centered around a prediction-style binary trade flow, not a futures exchange.

### Main architectural problems in the current backend

- `src/services/tradeService.js` places time-based UP/DOWN prediction trades instead of real long/short futures positions.
- `src/services/marketService.js` contains admin-controlled trade/price override logic (`tradeOverride`, `marketOverride`, `activeTradeOverride`), which conflicts with transparent exchange behavior.
- Trade settlement is timer-driven and manually resolved after a fixed duration instead of using a position engine driven by live mark prices.
- There is no matching engine, order queue, funding fee model, maintenance margin review, or real liquidation engine.
- Persistence is file-based (`data/store.json`) instead of database-backed.
- The current frontend `src/pages/TradePage.tsx` executes demo trade results locally and is not connected to a real exchange backend.

Because of those problems, the existing trading flow behaves more like a betting demo than a Binance Futures-style market.

## What was added

This redesign adds a new backend scaffold under `backend/` with a futures-oriented structure:

- `backend/src/services/marketService.js`
  Streams live ticks from Binance WebSocket and builds OHLC candles.
- `backend/src/engines/matchingEngine.js`
  Handles market, limit, and stop execution logic for queued orders.
- `backend/src/engines/riskEngine.js`
  Validates leverage, margin, fees, position sizing, and liquidation thresholds.
- `backend/src/engines/liquidationEngine.js`
  Evaluates open positions against maintenance margin and mark price.
- `backend/src/services/futuresService.js`
  Orchestrates orders, positions, liquidations, portfolio updates, and admin controls.
- `backend/src/services/websocketService.js`
  Broadcasts market ticks, order book snapshots, and live feed channels.
- `backend/db/schema.sql`
  Defines a PostgreSQL schema for users, balances, pairs, orders, positions, fills, candles, liquidations, funding, and audit logs.

## New exchange flow

### 1. Market data

- Binance trade WebSocket feeds mark price ticks.
- Every tick updates:
  - market snapshot
  - OHLC candles
  - order book snapshot
  - trade stream broadcast

### 2. Order placement

- User submits `market`, `limit`, `stop-market`, or `stop-limit`.
- Risk engine validates:
  - pair availability
  - leverage cap
  - margin mode
  - quantity bounds
  - available collateral

### 3. Matching

- Market orders fill immediately at current mark price.
- Limit and stop orders remain queued until their trigger conditions are met.
- Fills generate:
  - trade fill records
  - fee calculations
  - position updates

### 4. Position lifecycle

- Opening a position creates or updates a long/short position.
- Every price tick recalculates:
  - unrealized PNL
  - maintenance margin
  - margin ratio
  - liquidation eligibility
- TP/SL triggers are evaluated on the same price engine.
- Partial close and full close release margin and realize PNL.

### 5. Liquidation logic

- Liquidation is triggered only when margin balance can no longer support maintenance margin requirements.
- No admin win/loss direction controls are used in the new engine path.
- Admin can still:
  - suspend markets
  - freeze accounts
  - change fee/leverage/risk settings
- Admin does **not** set hidden user trade outcomes in the new design.

## Admin scope in the redesign

Allowed:

- manage pairs
- freeze/unfreeze users
- set leverage caps
- set maker/taker fees
- suspend markets
- inspect orders, positions, liquidations, analytics, audit logs

Not allowed in the new architecture:

- hidden up/down result control
- manual trade winner selection
- hidden outcome overrides

## Integration guidance

The new backend is intentionally separated from the current demo frontend so you can migrate safely.

Recommended next integration steps:

1. Move `src/pages/TradePage.tsx` off browser-only local trade resolution and onto `backend/src/app.js`.
2. Replace the polling-based market fetch in `src/utils/marketApi.ts` with the new `/ws` stream.
3. Retire the old prediction-trade endpoints after frontend migration.
4. Replace the in-memory repository with PostgreSQL + Redis adapters using the included schema.

## Run target

The new backend entry point is:

- `backend/src/app.js`

Suggested script:

- `node backend/src/app.js`

This backend currently uses an in-memory repository so the engine flow is easy to inspect during migration, while the PostgreSQL schema is ready for the persistent implementation phase.
