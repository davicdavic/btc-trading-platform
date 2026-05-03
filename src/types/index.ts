// User types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar: string;
  password?: string;
  btcBalance: number;
  usdBalance: number;
  stakeAmount: number;
  isVerified: boolean;
  verificationStatus?: 'unverified' | 'pending' | 'approved' | 'rejected';
  vipLevel: number;
  joinedDate: string;
  role?: 'user' | 'admin';
  phone?: string;
  country?: string;
  city?: string;
  postCode?: string;
  job?: string;
  timezone?: string;
  telegram?: string;
  kyc?: {
    fullName: string;
    phone: string;
    country: string;
    city: string;
    postCode: string;
    job: string;
    documentType: 'id_card' | 'drivers_license' | 'passport';
    frontImage: string;
    backImage: string;
    status: 'unverified' | 'pending' | 'approved' | 'rejected';
    submittedAt?: string;
    reviewedAt?: string;
    reviewedBy?: string;
  };
}

// Transaction types
export interface Transaction {
  id: string;
  type: 'deposit' | 'withdraw' | 'trade' | 'stake';
  amount: number;
  btcAmount?: number;
  walletAddress?: string;
  withdrawAddress?: string;
  userEmail?: string;
  userName?: string;
  status: 'pending' | 'completed' | 'rejected';
  timestamp: string;
  reviewedBy?: string;
}

export interface WalletRequest {
  id: string;
  type: 'deposit' | 'withdraw';
  amount: number;
  btcAmount?: number;
  walletAddress?: string;
  withdrawAddress?: string;
  userEmail: string;
  userName: string;
  status: 'pending' | 'completed' | 'rejected';
  timestamp: string;
  reviewedAt?: string;
  reviewedBy?: string;
}

// Trade types
export interface Trade {
  id: string;
  pair: string;
  direction: 'up' | 'down';
  amount: number;
  leverage: number;
  entryPrice: number;
  exitPrice?: number;
  liquidationPrice?: number;
  entryTime?: number;
  exitTime?: number;
  timeframe: string;
  status: 'open' | 'won' | 'lost';
  timestamp: string;
  userEmail?: string;
  pnl?: number;
  priceMovePct?: number;
  outcomeReason?: 'expiry' | 'liquidation';
}

export interface ActiveTrade {
  id: string;
  pair: string;
  direction: 'up' | 'down';
  amount: number;
  leverage: number;
  entryPrice: number;
  liquidationPrice: number;
  timeframe: string;
  timeframeValue: string;
  tradeSeconds: number;
  entryTime: number;
  openedAt: string;
  endTime: string;
  userEmail: string;
}

export interface TradeResolution {
  tradeId: string;
  won: boolean;
  pnl: number;
  exitPrice: number;
  exitTime: number;
  priceMovePct: number;
  outcomeReason: 'expiry' | 'liquidation';
}

// News types
export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  source: string;
  publishedAt: string;
}

// Chat message types
export interface ChatMessage {
  id: string;
  senderId: string;
  senderName: string;
  message: string;
  timestamp: string;
  isAdmin: boolean;
}

export interface KycRequest {
  id: string;
  userEmail: string;
  userName: string;
  fullName: string;
  phone: string;
  country: string;
  city: string;
  postCode: string;
  job: string;
  documentType: 'id_card' | 'drivers_license' | 'passport';
  frontImage: string;
  backImage: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedAt: string;
  reviewedAt?: string;
  reviewedBy?: string;
}

// Review types
export interface UserReview {
  id: string;
  name: string;
  avatar: string;
  review: string;
  profit: string;
  rating: number;
}

// Market leaderboard types
export interface LeaderboardUser {
  rank: number;
  name: string;
  avatar: string;
  profit: number;
  winRate: number;
  trades: number;
}

// Chart candle data
export interface CandleData {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume?: number;
}
