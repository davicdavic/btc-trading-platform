# BTC Trading Platform - Professional Trading App Specification

## Project Overview
**Name:** BTCTradePro - Professional Bitcoin Trading Platform
**Type:** Full Trading Application (Binance-style)
**Core Functionality:** Complete trading platform with user accounts, wallet system, professional trading interface, and admin controls
**Design Constraint:** KEEP EXACT SAME UI DESIGN - Only add/modify functionality, maintain visual design integrity

## Color Palette (Keep Existing)
- Background Primary: #0B0E11 (dark)
- Background Secondary: #1E2026
- Background Tertiary: #2E3138
- Bitcoin Orange: #F7931A
- Accent Secondary: #FFA500
- Text Primary: #FFFFFF
- Text Secondary: #848E9C
- Success/Profit: #0ECB81 (green)
- Danger/Loss: #F6465D (red)
- Border: #2E3138

## Typography
- Font Primary: 'Inter', sans-serif
- Font Mono: 'Roboto Mono', monospace
- Existing scale to be preserved

---

## 1. User Authentication System

### Login/Register Flow
- Email/password authentication (simulated with localStorage)
- Session persistence across page refreshes
- Role-based access (user/admin)

### User Profile & Account Settings
After login, show settings panel with tabs:
- **Profile Tab**: Username, email, avatar (initials-based), member since date
- **Security Tab**: Password change, 2FA toggle (simulated), API keys list
- **Verification Tab**: Account level (Basic/Intermediate/Advanced), verification status
- **Payment Methods Tab**: Bank cards list (add/remove cards - simulated)
- **Referral Tab**: Referral code, referral rewards, invite friends
- **Activity Log Tab**: Recent account activities with timestamps

### User Session Display
- Show logged-in username in header
- USD balance display in navigation bar
- Quick access to account settings
- Logout option

---

## 2. USD Balance & Deposit System

### Wallet Features
- USD wallet with real balance (stored in localStorage)
- Display balance in header: "USD: $10,000.00"
- Deposit page with simulated payment methods
- Transaction history (deposits, withdrawals, trades)

### Deposit Modal
- Amount input with preset buttons ($100, $500, $1000, $5000)
- Payment method selection (Credit Card, Bank Transfer, Crypto)
- Simulated processing with confirmation
- Transaction ID generation

### Transaction History
- List of all transactions with date, type, amount, status
- Filter by type (deposit, withdrawal, trade, earning)
- Export functionality

---

## 3. Real Trading Interface (Binance-style)

### Trading Page Layout
Full professional trading view divided into:

#### Left Panel - Trading Pairs
- Pair selector with search
- Favorites list
- All pairs with price, change, volume
- Categories: All, BTC, ETH, USDT, BNB

#### Center Panel - Chart & Trading
- **Price Chart**: TradingView-style candlestick chart (using Canvas)
  - Timeframe selector: 1m, 5m, 15m, 1H, 4H, 1D, 1W
  - Zoom and pan support
  - Crosshair with price/time display
  - Volume bars at bottom

- **Order Form**:
  - Tabs: Limit, Market, Stop-Limit
  - Buy/Sell toggle
  - Price input (for limit orders)
  - Amount input with slider (0-100%)
  - Total calculation (Price x Amount)
  - Buy button (green), Sell button (red)
  - Available balance display

#### Right Panel - Order Book & Trades
- **Order Book**:
  - Asks (red) - sorted by price descending
  - Bids (green) - sorted by price descending
  - Depth visualization bars
  - Spread display

- **Recent Trades**:
  - Time, Price, Amount, Side (buy/sell)
  - Color coded

#### Bottom Panel - Orders
- **Open Orders Tab**:
  - Pair, Type, Side, Price, Amount, Filled, Time, Actions
  - Cancel order functionality

- **Order History Tab**:
  - Completed/cancelled orders
  - Profit/loss display

### Trading Pairs
- BTC/USDT (default)
- ETH/USDT
- BNB/USDT
- SOL/USDT
- XRP/USDT

Each pair has:
- Current price (admin controlled for BTC, auto for others)
- 24h change percentage
- 24h high/low
- 24h volume
- Order book

---

## 4. Admin Panel - Full Control

### Access
- Hidden admin toggle (Ctrl+Shift+A)
- Admin credentials: admin / admin123

### Price Control Dashboard
- BTC price display with current value
- UP/DOWN buttons with amount input (+$10, +$50, +$100, +$500, +$1000)
- Price change history log
- All users see price updates in real-time

### User Management
- Table: Username, Email, USD Balance, BTC Balance, Total Value, Status
- Search and filter users
- View user details and history

### Platform Settings
- Trading fee percentage (default 0.1%)
- Minimum deposit amount
- Platform statistics (total users, volume, etc.)

### Order Book Control
- View all pending orders across all users
- Cancel any order
- Manual trade execution

### Balance Management
- Select user from dropdown
- Add/subtract USD balance
- Add/subtract BTC balance
- Transaction log

---

## 5. User Dashboard (Post-Login)

### Portfolio Overview
- Total account value in USD
- Total value in BTC
- Change in value (24h percentage)

### Holdings List
- Each asset (BTC, ETH, etc.) with:
  - Amount
  - Current value (USD)
  - Profit/Loss (amount and percentage)
  - 24h change

### Recent Transactions
- Last 5 transactions
- Quick view of activity

### Quick Trade Buttons
- One-click buy/sell buttons for quick actions

### P&L Summary
- Daily P&L
- Weekly P&L
- Monthly P&L
- Total P&L since account creation

---

## 6. Component States

### Buttons
- Default: as existing
- Hover: slight scale up, brightness change
- Active: pressed effect
- Disabled: 50% opacity, no cursor

### Inputs
- Default: dark background, border
- Focus: orange border glow
- Error: red border, error message
- Disabled: reduced opacity

### Tables
- Alternating row colors
- Hover highlight
- Sortable columns (click header)

### Modals
- Centered with backdrop blur
- Close on X, Escape, or backdrop click
- Slide-down animation

---

## 7. Navigation Structure

### Logged Out State
- Home (Hero with video)
- Trade (redirects to login)
- Deposit (redirects to login)
- News
- Support

### Logged In State (User)
- Dashboard (portfolio view)
- Trade (full trading interface)
- Deposit (wallet deposit)
- Settings (account settings)

### Admin State
- Platform Overview
- User Management
- Price Control
- All Orders
- Platform Settings

---

## 8. Data Models

### User
```javascript
{
  id: string,
  username: string,
  email: string,
  password: string (hashed simulation),
  role: 'user' | 'admin',
  usdBalance: number,
  btcBalance: number,
  ethBalance: number,
  bnbBalance: number,
  solBalance: number,
  xrpBalance: number,
  createdAt: timestamp,
  settings: {
    twoFactorEnabled: boolean,
    referralCode: string
  }
}
```

### Transaction
```javascript
{
  id: string,
  userId: string,
  type: 'deposit' | 'withdrawal' | 'trade' | 'earning',
  amount: number,
  currency: string,
  status: 'completed' | 'pending' | 'failed',
  timestamp: number
}
```

### Order
```javascript
{
  id: string,
  userId: string,
  pair: string,
  type: 'limit' | 'market' | 'stop-limit',
  side: 'buy' | 'sell',
  price: number,
  amount: number,
  filled: number,
  status: 'open' | 'filled' | 'cancelled',
  timestamp: number
}
```

---

## 9. Technical Implementation

### State Management
- Single global state object
- localStorage for persistence
- Event-driven UI updates

### Simulated Matching Engine
- Orders stored in order book by price
- Market orders execute at current price
- Limit orders execute when price matches
- Admin can manually match orders

### Price Updates
- BTC price controlled by admin
- Other pairs simulate market movement
- Real-time updates to all connected users

### Chart Rendering
- Canvas-based candlestick chart
- Simulated OHLC data
- Timeframe-based data generation

---

## 10. Pages/Screens

1. **Landing Page** - Existing hero with video
2. **Trading Page** - Full Binance-style trading interface
3. **Dashboard** - Portfolio overview
4. **Deposit Page** - Wallet and deposit functionality
5. **Account Settings** - Profile, security, payment methods
6. **Admin Panel** - Full platform control

---

## 11. Responsive Requirements

### Desktop (>1200px)
- Full layout with all panels visible
- 3-column trading layout

### Tablet (768px-1200px)
- Collapsible side panels
- 2-column layout

### Mobile (<768px)
- Single column layout
- Bottom navigation
- Swipeable panels
- Trading chart must remain usable

---

## 12. Animation & Transitions

Keep existing animations:
- Button hover effects
- Modal slide-in
- Chart animations
- Loading states

Add new:
- Page transitions
- Tab switching
- Order book updates (fade)
- Price changes (flash green/red)