import { User, Transaction, Trade, UserReview, LeaderboardUser, CandleData } from '../types';

export const DEPOSIT_WALLET = 'bc1qxy2kgdygjrsqtzq2n0r3am9w5vh9q5z8h6v0g7';
export const DEFAULT_BTC_AVATAR = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' x2='1' y1='0' y2='1'%3E%3Cstop stop-color='%23f7931a'/%3E%3Cstop offset='1' stop-color='%23ffb347'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='60' cy='60' r='58' fill='url(%23g)'/%3E%3Cpath fill='white' d='M79.4 51.7c1-6-3.7-9.2-9.9-11.3l2-7.9-4.8-1.2-1.9 7.7c-1.3-.3-2.5-.6-3.8-.9l1.9-7.8-4.8-1.1-2 7.9c-1-.2-1.9-.4-2.8-.7v-.1l-6.6-1.6-1.3 5.1s3.6.8 3.5.9c2 .5 2.4 1.9 2.3 3l-2.2 8.8c.1 0 .3.1.5.1l-.5-.1-3.1 12.6c-.2.7-.8 1.8-2.2 1.5.1.1-3.5-.9-3.5-.9l-2.4 5.5 6.2 1.6c1.2.3 2.4.7 3.6.9l-2 8 4.8 1.2 2-7.9c1.3.4 2.6.7 3.9 1l-2 7.8 4.8 1.2 2-8c8.3 1.6 14.5 1 17.1-6.5 2.1-6 0-9.5-4.4-11.8 3.2-.7 5.6-2.8 6.6-7.1zm-11.8 16.5c-1.5 6-11.5 2.8-14.8 2l2.7-10.8c3.3.8 13.7 2.5 12.1 8.8zm1.5-16.6c-1.4 5.5-9.8 2.7-12.5 2l2.5-9.8c2.7.7 11.5 2.1 10 7.8z'/%3E%3C/svg%3E";

// Mock current BTC price
export const getBTCPrice = (): number => {
  const basePrice = 67500;
  const variance = Math.random() * 200 - 100;
  return basePrice + variance;
};

// Convert BTC to USD
export const btcToUsd = (btc: number): number => {
  return btc * getBTCPrice();
};

// Generate mock candle data
export const generateCandleData = (count: number, basePrice: number): CandleData[] => {
  const candles: CandleData[] = [];
  let currentPrice = basePrice;
  const now = Math.floor(Date.now() / 1000);
  const interval = 60; // 1 minute

  for (let i = count; i > 0; i--) {
    const time = now - i * interval;
    const change = (Math.random() - 0.48) * 100;
    const open = currentPrice;
    const close = currentPrice + change;
    const high = Math.max(open, close) + Math.random() * 50;
    const low = Math.min(open, close) - Math.random() * 50;
    const volume = Math.random() * 1000 + 500;

    candles.push({ time, open, high, low, close, volume });
    currentPrice = close;
  }

  return candles;
};

// Mock user data
export const mockUser: User = {
  id: 'user-1',
  email: 'trader@btcplatform.com',
  name: 'Alex Thompson',
  avatar: DEFAULT_BTC_AVATAR,
  password: 'password123',
  btcBalance: 0.245,
  usdBalance: 15850.75,
  stakeAmount: 2.5,
  isVerified: true,
  verificationStatus: 'approved',
  vipLevel: 3,
  joinedDate: '2024-01-15',
  role: 'user',
  phone: '+1 234 567 8900',
  country: 'United States',
  city: 'New York',
  postCode: '10001',
  job: 'Crypto Trader',
  timezone: 'UTC-5',
  telegram: '@AlexTrader',
  kyc: {
    fullName: 'Alex Thompson',
    phone: '+1 234 567 8900',
    country: 'United States',
    city: 'New York',
    postCode: '10001',
    job: 'Crypto Trader',
    documentType: 'passport',
    frontImage: 'passport-front.jpg',
    backImage: 'passport-back.jpg',
    status: 'approved',
  }
};

// Mock transactions
export const mockTransactions: Transaction[] = [
  { id: 'tx-1', type: 'deposit', amount: 5000, btcAmount: 0.074, walletAddress: DEPOSIT_WALLET, userEmail: 'trader@btcplatform.com', userName: 'Alex Thompson', status: 'completed', timestamp: '2026-04-28T10:30:00' },
  { id: 'tx-2', type: 'trade', amount: 200, userEmail: 'trader@btcplatform.com', userName: 'Alex Thompson', status: 'completed', timestamp: '2026-04-28T14:45:00' },
  { id: 'tx-3', type: 'withdraw', amount: 1500, btcAmount: 0.022, userEmail: 'trader@btcplatform.com', userName: 'Alex Thompson', status: 'pending', timestamp: '2026-04-29T09:15:00' },
  { id: 'tx-4', type: 'stake', amount: 1000, userEmail: 'trader@btcplatform.com', userName: 'Alex Thompson', status: 'completed', timestamp: '2026-04-27T16:20:00' },
];

// Mock trades
export const mockTrades: Trade[] = [
  { id: 't-1', pair: 'BTC/USDT', direction: 'up', amount: 100, leverage: 5, entryPrice: 67400, timeframe: '1m', status: 'won', timestamp: '2026-04-29T08:00:00', userEmail: 'trader@btcplatform.com', pnl: 500 },
  { id: 't-2', pair: 'BTC/USDT', direction: 'down', amount: 50, leverage: 3, entryPrice: 67550, timeframe: '5m', status: 'lost', timestamp: '2026-04-29T07:30:00', userEmail: 'trader@btcplatform.com', pnl: -150 },
  { id: 't-3', pair: 'BTC/USDT', direction: 'up', amount: 200, leverage: 2, entryPrice: 67300, timeframe: '1h', status: 'won', timestamp: '2026-04-28T22:00:00', userEmail: 'trader@btcplatform.com', pnl: 400 },
  { id: 't-4', pair: 'BTC/USDT', direction: 'up', amount: 75, leverage: 10, entryPrice: 67200, timeframe: '1m', status: 'won', timestamp: '2026-04-28T18:45:00', userEmail: 'trader@btcplatform.com', pnl: 750 },
];

// Mock user reviews
export const mockReviews: UserReview[] = [
  { id: 'r-1', name: 'Sarah Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', review: 'This platform has transformed my trading experience. The UI is intuitive and the execution is lightning fast!', profit: '$12,450', rating: 5 },
  { id: 'r-2', name: 'Michael Rodriguez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael', review: 'Best leverage trading experience. The 10x option helped me multiply my profits significantly.', profit: '$8,230', rating: 5 },
  { id: 'r-3', name: 'Emma Wilson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma', review: 'The candlestick charts are incredibly accurate. I can plan my trades with confidence.', profit: '$15,890', rating: 5 },
  { id: 'r-4', name: 'David Kim', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', review: 'Support team is amazing! They helped me resolve my deposit issue within minutes.', profit: '$6,750', rating: 4 },
  { id: 'r-5', name: 'Lisa Anderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa', review: 'Staking feature is gold! My BTC grows automatically while I focus on trading.', profit: '$22,100', rating: 5 },
  { id: 'r-6', name: 'James Taylor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James', review: 'Professional grade trading platform at your fingertips. Highly recommended!', profit: '$9,320', rating: 5 },
];

// Mock leaderboard
export const mockLeaderboard: LeaderboardUser[] = [
  { rank: 1, name: 'CryptoKing', avatar: 'https://randomuser.me/api/portraits/men/57.jpg', profit: 156780, winRate: 87, trades: 1245 },
  { rank: 2, name: 'DiamondHands', avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Diamond', profit: 98340, winRate: 82, trades: 892 },
  { rank: 3, name: 'WhaleTrader', avatar: 'https://randomuser.me/api/portraits/women/63.jpg', profit: 87650, winRate: 79, trades: 1567 },
  { rank: 4, name: 'MoonWalker', avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Moon', profit: 65430, winRate: 85, trades: 723 },
  { rank: 5, name: 'BullRunner', avatar: 'https://randomuser.me/api/portraits/men/41.jpg', profit: 54320, winRate: 78, trades: 1089 },
  { rank: 6, name: 'SilverFox', avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Silver', profit: 43210, winRate: 81, trades: 654 },
  { rank: 7, name: 'GoldRush', avatar: 'https://randomuser.me/api/portraits/women/71.jpg', profit: 38760, winRate: 76, trades: 921 },
  { rank: 8, name: 'DiamondPro', avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=DiamondPro', profit: 32100, winRate: 83, trades: 567 },
  { rank: 9, name: 'AlphaTrade', avatar: 'https://randomuser.me/api/portraits/men/65.jpg', profit: 28940, winRate: 80, trades: 834 },
  { rank: 10, name: 'BetaWinner', avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Beta', profit: 25430, winRate: 77, trades: 712 },
];

// BTC Importance facts
export const btcFacts = [
  { title: 'Digital Gold', description: 'Bitcoin is the first decentralized cryptocurrency, often called digital gold due to its store of value properties.', icon: '🏆' },
  { title: 'Limited Supply', description: 'Only 21 million BTC will ever exist, making it deflationary by design.', icon: '💎' },
  { title: 'Global Adoption', description: 'Over 100 million people worldwide own Bitcoin as of 2026.', icon: '🌍' },
  { title: 'Institutional Trust', description: 'Major institutions like BlackRock and Fidelity offer Bitcoin ETFs.', icon: '🏦' },
  { title: 'Lightning Fast', description: 'Bitcoin transactions can be settled in seconds with the Lightning Network.', icon: '⚡' },
];

// Format number with commas
export const formatNumber = (num: number): string => {
  return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

// Format date
export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

// Calculate stake earnings (mock - 0.5% per minute)
export const calculateStakeEarnings = (amount: number, minutes: number): number => {
  return amount * (0.005 * minutes);
};
