import { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ActiveTrade, KycRequest, TradeResolution, User, Transaction, Trade, WalletRequest } from './types';
import { DEFAULT_BTC_AVATAR, mockUser } from './utils/mockData';
import { createFallbackSnapshot, fetchBtcSnapshot, subscribeBtcTicker } from './utils/marketApi';
import { calculatePnL } from './utils/tradeEngine';

import Sidebar from './components/Layout/Sidebar';
import Header from './components/Layout/Header';
import MobileNav from './components/Layout/MobileNav';
import AppErrorBoundary from './components/AppErrorBoundary';

import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import FinancePage from './pages/FinancePage';
import TradePage from './pages/TradePage';
import ProfilePage from './pages/ProfilePage';
import NewsPage from './pages/NewsPage';
import SupportPage from './pages/SupportPage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';

const USERS_KEY = 'btcUsers';
const AUTH_SESSION_KEY = 'btcAuthSession';
const TX_KEY = 'btcTransactions';
const WALLET_REQUESTS_KEY = 'btcWalletRequests';
const TRADES_KEY = 'btcTrades';
const ACTIVE_TRADE_KEY = 'btcActiveTrade';
const TRADE_RESULT_KEY = 'btcTradeResult';
const KYC_REQUESTS_KEY = 'btcKycRequests';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => void;
  register: (username: string, email: string, password: string) => void;
  signInWithGoogle: (profile: { email: string; name: string; avatar?: string }) => void;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
  submitKycRequest: (payload: KycRequest) => void;
}

interface AppContextType {
  btcPrice: number;
  btcChange24h: number;
  btcHigh24h: number;
  btcLow24h: number;
  btcVolume24h: number;
  marketStatus: 'live' | 'fallback';
  marketReady: boolean;
  transactions: Transaction[];
  walletRequests: WalletRequest[];
  kycRequests: KycRequest[];
  trades: Trade[];
  users: User[];
  activeTrade: ActiveTrade | null;
  lastTradeResult: TradeResolution | null;
  addTransaction: (tx: Transaction) => void;
  addTrade: (trade: Trade) => void;
  startTrade: (trade: ActiveTrade) => void;
  clearTradeResult: () => void;
  approveTransaction: (txId: string) => void;
  rejectTransaction: (txId: string) => void;
  approveVerification: (email: string) => void;
  rejectVerification: (email: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);
const AppContext = createContext<AppContextType | null>(null);

const ADMIN_EMAIL = 'system@btcplatform.com';
const ADMIN_USERNAME = 'System Admin';
const ADMIN_PASSWORD = 'admin123';
const ADMIN_USER: User = {
  id: 'admin-session',
  email: ADMIN_EMAIL,
  name: ADMIN_USERNAME,
  avatar: DEFAULT_BTC_AVATAR,
  btcBalance: 0,
  usdBalance: 0,
  stakeAmount: 0,
  isVerified: true,
  verificationStatus: 'approved',
  vipLevel: 5,
  joinedDate: '2024-01-01',
  role: 'admin',
  phone: '+1 555 300 9000',
  country: 'United States',
  timezone: 'UTC',
  telegram: '@BTCTradeSystem',
};
const initialUsers: User[] = [];
const defaultUsersByEmail = new Map(initialUsers.map((entry) => [entry.email.toLowerCase(), entry]));

function readStorageJson<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) as T : fallback;
  } catch {
    localStorage.removeItem(key);
    return fallback;
  }
}

function asNumber(value: unknown, fallback = 0) {
  const parsed = typeof value === 'number' ? value : Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function asString(value: unknown, fallback = '') {
  return typeof value === 'string' ? value : fallback;
}

function getDefaultTimezone() {
  if (typeof window === 'undefined') return 'UTC';
  return window.Intl?.DateTimeFormat?.().resolvedOptions().timeZone || 'UTC';
}

function normalizeUser(input: User): User {
  const defaultUser = defaultUsersByEmail.get(asString(input.email).toLowerCase());

  return {
    ...defaultUser,
    ...input,
    id: asString(input.id, `user-${Date.now()}`),
    email: asString(input.email),
    name: asString(input.name, 'Trader'),
    avatar: asString(input.avatar, DEFAULT_BTC_AVATAR),
    btcBalance: asNumber(input.btcBalance),
    usdBalance: asNumber(input.usdBalance),
    stakeAmount: asNumber(input.stakeAmount),
    vipLevel: asNumber(input.vipLevel),
    joinedDate: asString(input.joinedDate, new Date().toISOString().slice(0, 10)),
  };
}

function mergeStoredUsersWithDefaults(storedUsers: User[]) {
  const merged = new Map<string, User>();

  initialUsers.forEach((entry) => {
    merged.set(entry.email.toLowerCase(), normalizeUser(entry));
  });

  storedUsers.filter((entry) => entry.role !== 'admin').forEach((entry) => {
    merged.set(entry.email.toLowerCase(), normalizeUser(entry));
  });

  return Array.from(merged.values());
}

function normalizeTransaction(input: Transaction): Transaction {
  return {
    ...input,
    id: asString(input.id, `tx-${Date.now()}`),
    type: input.type,
    amount: asNumber(input.amount),
    btcAmount: input.btcAmount === undefined ? undefined : asNumber(input.btcAmount),
    walletAddress: input.walletAddress ? asString(input.walletAddress) : input.walletAddress,
    withdrawAddress: input.withdrawAddress ? asString(input.withdrawAddress) : input.withdrawAddress,
    userEmail: input.userEmail ? asString(input.userEmail) : input.userEmail,
    userName: input.userName ? asString(input.userName) : input.userName,
    status: input.status,
    timestamp: asString(input.timestamp, new Date().toISOString()),
    reviewedBy: input.reviewedBy ? asString(input.reviewedBy) : input.reviewedBy,
  };
}

function buildWalletRequestFromTransaction(input: Transaction): WalletRequest | null {
  if ((input.type !== 'deposit' && input.type !== 'withdraw') || !input.userEmail) return null;

  return {
    id: asString(input.id, `tx-${Date.now()}`),
    type: input.type,
    amount: asNumber(input.amount),
    btcAmount: input.btcAmount === undefined ? undefined : asNumber(input.btcAmount),
    walletAddress: input.walletAddress ? asString(input.walletAddress) : undefined,
    withdrawAddress: input.withdrawAddress ? asString(input.withdrawAddress) : undefined,
    userEmail: asString(input.userEmail),
    userName: asString(input.userName, 'Trader'),
    status: input.status,
    timestamp: asString(input.timestamp, new Date().toISOString()),
    reviewedBy: input.reviewedBy ? asString(input.reviewedBy) : undefined,
    reviewedAt: undefined,
  };
}

function buildKycRequestFromUser(input: User): KycRequest | null {
  if (!input.kyc || input.kyc.status !== 'pending') return null;

  return {
    id: `kyc-profile-${input.id}`,
    userEmail: asString(input.email),
    userName: asString(input.name, 'Trader'),
    fullName: asString(input.kyc.fullName, input.name),
    phone: asString(input.kyc.phone),
    country: asString(input.kyc.country),
    city: asString(input.kyc.city),
    postCode: asString(input.kyc.postCode),
    job: asString(input.kyc.job),
    documentType: input.kyc.documentType,
    frontImage: asString(input.kyc.frontImage),
    backImage: asString(input.kyc.backImage),
    status: 'pending',
    submittedAt: asString(input.kyc.submittedAt, new Date().toISOString()),
    reviewedAt: input.kyc.reviewedAt ? asString(input.kyc.reviewedAt) : undefined,
    reviewedBy: input.kyc.reviewedBy ? asString(input.kyc.reviewedBy) : undefined,
  };
}

function mergeWalletRequests(storedRequests: WalletRequest[], sourceTransactions: Transaction[]) {
  const merged = new Map<string, WalletRequest>();

  sourceTransactions.forEach((entry) => {
    const derived = buildWalletRequestFromTransaction(entry);
    if (!derived) return;
    merged.set(derived.id, derived);
  });

  storedRequests.forEach((entry) => {
    const existing = merged.get(entry.id);
    merged.set(entry.id, {
      ...(existing || {}),
      ...entry,
      reviewedAt: entry.reviewedAt || existing?.reviewedAt,
      reviewedBy: entry.reviewedBy || existing?.reviewedBy,
    });
  });

  return Array.from(merged.values()).sort(
    (a, b) => new Date(b.reviewedAt || b.timestamp).getTime() - new Date(a.reviewedAt || a.timestamp).getTime(),
  );
}

function mergeKycRequests(storedRequests: KycRequest[], sourceUsers: User[]) {
  const merged = new Map<string, KycRequest>();

  sourceUsers.forEach((entry) => {
    const derived = buildKycRequestFromUser(entry);
    if (!derived) return;
    merged.set(entry.email.toLowerCase(), derived);
  });

  storedRequests.forEach((entry) => {
    const key = entry.userEmail.toLowerCase();
    const existing = merged.get(key);
    merged.set(key, {
      ...(existing || {}),
      ...entry,
      reviewedAt: entry.reviewedAt || existing?.reviewedAt,
      reviewedBy: entry.reviewedBy || existing?.reviewedBy,
    });
  });

  return Array.from(merged.values()).sort(
    (a, b) => new Date(b.reviewedAt || b.submittedAt).getTime() - new Date(a.reviewedAt || a.submittedAt).getTime(),
  );
}

function normalizeTrade(input: Trade): Trade {
  return {
    ...input,
    id: asString(input.id, `trade-${Date.now()}`),
    pair: asString(input.pair, 'BTC/USD'),
    amount: asNumber(input.amount),
    leverage: asNumber(input.leverage, 1),
    entryPrice: asNumber(input.entryPrice),
    exitPrice: input.exitPrice === undefined ? undefined : asNumber(input.exitPrice),
    liquidationPrice: input.liquidationPrice === undefined ? undefined : asNumber(input.liquidationPrice),
    entryTime: input.entryTime === undefined ? undefined : asNumber(input.entryTime),
    exitTime: input.exitTime === undefined ? undefined : asNumber(input.exitTime),
    timeframe: asString(input.timeframe, '1m'),
    timestamp: asString(input.timestamp, new Date().toISOString()),
    userEmail: input.userEmail ? asString(input.userEmail) : input.userEmail,
    pnl: input.pnl === undefined ? undefined : asNumber(input.pnl),
    priceMovePct: input.priceMovePct === undefined ? undefined : asNumber(input.priceMovePct),
  };
}

function normalizeActiveTrade(input: ActiveTrade): ActiveTrade {
  return {
    ...input,
    id: asString(input.id, `trade-${Date.now()}`),
    pair: asString(input.pair, 'BTC/USD'),
    amount: asNumber(input.amount),
    leverage: asNumber(input.leverage, 1),
    entryPrice: asNumber(input.entryPrice),
    liquidationPrice: asNumber(input.liquidationPrice),
    timeframe: asString(input.timeframe, '1m'),
    timeframeValue: asString(input.timeframeValue, '1m'),
    tradeSeconds: asNumber(input.tradeSeconds, 60),
    entryTime: asNumber(input.entryTime, Math.floor(Date.now() / 1000)),
    openedAt: asString(input.openedAt, new Date().toISOString()),
    endTime: asString(input.endTime, new Date(Date.now() + 60000).toISOString()),
    userEmail: asString(input.userEmail),
  };
}

function normalizeTradeResolution(input: TradeResolution): TradeResolution {
  return {
    ...input,
    tradeId: asString(input.tradeId),
    won: Boolean(input.won),
    pnl: asNumber(input.pnl),
    exitPrice: asNumber(input.exitPrice),
    exitTime: asNumber(input.exitTime, Math.floor(Date.now() / 1000)),
    priceMovePct: asNumber(input.priceMovePct),
    outcomeReason: input.outcomeReason,
  };
}

function isUserList(value: unknown): value is User[] {
  return Array.isArray(value) && value.every((item) => item && typeof item === 'object' && typeof item.email === 'string');
}

function isTransactionList(value: unknown): value is Transaction[] {
  return Array.isArray(value) && value.every((item) => item && typeof item === 'object' && typeof item.id === 'string' && typeof item.type === 'string');
}

function isWalletRequestList(value: unknown): value is WalletRequest[] {
  return Array.isArray(value) && value.every(
    (item) => item && typeof item === 'object' && typeof (item as WalletRequest).id === 'string' && typeof (item as WalletRequest).userEmail === 'string',
  );
}

function isKycRequestList(value: unknown): value is KycRequest[] {
  return Array.isArray(value) && value.every(
    (item) => item && typeof item === 'object' && typeof (item as KycRequest).id === 'string' && typeof (item as KycRequest).userEmail === 'string',
  );
}

function isTradeList(value: unknown): value is Trade[] {
  return Array.isArray(value) && value.every((item) => item && typeof item === 'object' && typeof item.id === 'string' && typeof item.pair === 'string');
}

function isActiveTrade(value: unknown): value is ActiveTrade {
  return Boolean(
    value &&
    typeof value === 'object' &&
    typeof (value as ActiveTrade).id === 'string' &&
    typeof (value as ActiveTrade).userEmail === 'string' &&
    typeof (value as ActiveTrade).entryPrice === 'number' &&
    typeof (value as ActiveTrade).amount === 'number' &&
    typeof (value as ActiveTrade).leverage === 'number' &&
    typeof (value as ActiveTrade).endTime === 'string',
  );
}

function isTradeResolution(value: unknown): value is TradeResolution {
  return Boolean(
    value &&
    typeof value === 'object' &&
    typeof (value as TradeResolution).tradeId === 'string' &&
    typeof (value as TradeResolution).pnl === 'number' &&
    typeof (value as TradeResolution).won === 'boolean',
  );
}

const readUsers = (): User[] => {
  const parsed = readStorageJson<unknown>(USERS_KEY, initialUsers);
  return isUserList(parsed) ? mergeStoredUsersWithDefaults(parsed) : initialUsers.map(normalizeUser);
};

function readAuthSession() {
  return readStorageJson<{ email: string; role?: 'user' | 'admin' } | null>(AUTH_SESSION_KEY, null);
}

const readTransactions = (): Transaction[] => {
  const parsed = readStorageJson<unknown>(TX_KEY, []);
  return isTransactionList(parsed) ? parsed.map(normalizeTransaction) : [];
};

const readWalletRequests = (): WalletRequest[] => {
  const parsed = readStorageJson<unknown>(WALLET_REQUESTS_KEY, []);
  const stored = isWalletRequestList(parsed) ? parsed : [];
  return mergeWalletRequests(stored, readTransactions());
};

const readKycRequests = (): KycRequest[] => {
  const parsed = readStorageJson<unknown>(KYC_REQUESTS_KEY, []);
  const stored = isKycRequestList(parsed) ? parsed : [];
  return mergeKycRequests(stored, readUsers());
};

const readTrades = (): Trade[] => {
  const parsed = readStorageJson<unknown>(TRADES_KEY, []);
  return isTradeList(parsed) ? parsed.map(normalizeTrade) : [];
};

const readActiveTrade = (): ActiveTrade | null => {
  const parsed = readStorageJson<unknown>(ACTIVE_TRADE_KEY, null);
  return isActiveTrade(parsed) ? normalizeActiveTrade(parsed) : null;
};

const readTradeResult = (): TradeResolution | null => {
  const parsed = readStorageJson<unknown>(TRADE_RESULT_KEY, null);
  return isTradeResolution(parsed) ? normalizeTradeResolution(parsed) : null;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};

function App() {
  const [users, setUsers] = useState<User[]>(() => {
    if (typeof window === 'undefined') return initialUsers;
    return readUsers();
  });
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === 'undefined') return null;
    const session = readAuthSession();
    if (session?.role === 'admin' && session.email.toLowerCase() === ADMIN_EMAIL) {
      return ADMIN_USER;
    }
    const email = session?.email;
    if (!email) return null;
    const storedUsers = readUsers();
    return storedUsers.find((entry) => entry.email === email) || null;
  });
  const [marketSnapshot, setMarketSnapshot] = useState(() => createFallbackSnapshot());
  const [marketReady, setMarketReady] = useState(false);
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    if (typeof window === 'undefined') return [];
    return readTransactions();
  });
  const [walletRequests, setWalletRequests] = useState<WalletRequest[]>(() => {
    if (typeof window === 'undefined') return [];
    return readWalletRequests();
  });
  const [kycRequests, setKycRequests] = useState<KycRequest[]>(() => {
    if (typeof window === 'undefined') return [];
    return readKycRequests();
  });
  const [trades, setTrades] = useState<Trade[]>(() => {
    if (typeof window === 'undefined') return [];
    return readTrades();
  });
  const [activeTrade, setActiveTrade] = useState<ActiveTrade | null>(() => {
    if (typeof window === 'undefined') return null;
    return readActiveTrade();
  });
  const [lastTradeResult, setLastTradeResult] = useState<TradeResolution | null>(() => {
    if (typeof window === 'undefined') return null;
    return readTradeResult();
  });

  useEffect(() => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    localStorage.setItem(TX_KEY, JSON.stringify(transactions));
  }, [transactions]);

  useEffect(() => {
    setWalletRequests((prev) => {
      const merged = mergeWalletRequests(prev, transactions);
      if (JSON.stringify(merged) === JSON.stringify(prev)) return prev;
      return merged;
    });
  }, [transactions]);

  useEffect(() => {
    localStorage.setItem(WALLET_REQUESTS_KEY, JSON.stringify(walletRequests));
  }, [walletRequests]);

  useEffect(() => {
    setKycRequests((prev) => {
      const merged = mergeKycRequests(prev, users);
      if (JSON.stringify(merged) === JSON.stringify(prev)) return prev;
      return merged;
    });
  }, [users]);

  useEffect(() => {
    localStorage.setItem(KYC_REQUESTS_KEY, JSON.stringify(kycRequests));
  }, [kycRequests]);

  useEffect(() => {
    localStorage.setItem(TRADES_KEY, JSON.stringify(trades));
  }, [trades]);

  useEffect(() => {
    if (activeTrade) {
      localStorage.setItem(ACTIVE_TRADE_KEY, JSON.stringify(activeTrade));
    } else {
      localStorage.removeItem(ACTIVE_TRADE_KEY);
    }
  }, [activeTrade]);

  useEffect(() => {
    if (lastTradeResult) {
      localStorage.setItem(TRADE_RESULT_KEY, JSON.stringify(lastTradeResult));
    } else {
      localStorage.removeItem(TRADE_RESULT_KEY);
    }
  }, [lastTradeResult]);

  useEffect(() => {
    localStorage.removeItem('btcCurrentUserEmail');
    if (user) {
      localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify({ email: user.email, role: user.role || 'user' }));
    } else {
      localStorage.removeItem(AUTH_SESSION_KEY);
    }
  }, [user]);

  useEffect(() => {
    let active = true;
    let reconnectTimer: number | null = null;
    let unsubscribeTicker: (() => void) | null = null;

    const loadMarket = async () => {
      try {
        const snapshot = await fetchBtcSnapshot();
        if (active) {
          setMarketSnapshot(snapshot);
          setMarketReady(true);
        }
      } catch {
        if (active) {
          setMarketSnapshot((current) => createFallbackSnapshot(current.price));
          setMarketReady(true);
        }
      }
    };

    const connectTicker = () => {
      if (!active) return;

      unsubscribeTicker = subscribeBtcTicker(
        (snapshot) => {
          if (active) {
            setMarketSnapshot(snapshot);
            setMarketReady(true);
          }
        },
        (state) => {
          if (!active) return;
          if (state === 'closed' || state === 'error') {
            if (reconnectTimer) window.clearTimeout(reconnectTimer);
            reconnectTimer = window.setTimeout(() => {
              connectTicker();
            }, 3000);
          }
        },
      );
    };

    loadMarket();
    connectTicker();
    const interval = setInterval(loadMarket, 30000);
    return () => {
      active = false;
      unsubscribeTicker?.();
      if (reconnectTimer) window.clearTimeout(reconnectTimer);
      clearInterval(interval);
    };
  }, []);

  const replaceUser = (email: string, updater: (entry: User) => User) => {
    let nextCurrent: User | null = user;
    setUsers((prev) =>
      prev.map((entry) => {
        if (entry.email !== email) return entry;
        const updated = updater(entry);
        if (user?.email === email) nextCurrent = updated;
        return updated;
      }),
    );
    if (nextCurrent && nextCurrent.email === email) {
      setUser(nextCurrent);
    }
  };

  const login = (username: string, _password: string) => {
    const trimmedUsername = username.trim();
    const normalizedUsername = trimmedUsername.toLowerCase();
    if (
      (normalizedUsername === ADMIN_USERNAME.toLowerCase() || normalizedUsername === ADMIN_EMAIL.toLowerCase()) &&
      _password === ADMIN_PASSWORD
    ) {
      setUser(ADMIN_USER);
      return;
    }
    const existing = users.find((entry) => (
      entry.name.trim().toLowerCase() === normalizedUsername ||
      entry.email.trim().toLowerCase() === normalizedUsername
    ));
    if (existing) {
      if (existing.password && existing.password !== _password) {
        alert('Incorrect password');
        return;
      }
      setUser(existing);
      return;
    }

    alert('Incorrect username or password');
  };

  const register = (username: string, email: string, password: string) => {
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim().toLowerCase();
    if (!trimmedUsername || !password.trim()) {
      alert('Username and password are required');
      return;
    }

    const emailHandle = trimmedUsername.toLowerCase().replace(/[^a-z0-9]+/g, '') || `user${Date.now()}`;
    const resolvedEmail = trimmedEmail || `${emailHandle}@btcplatform.com`;
    const duplicate = users.find((entry) => entry.email.toLowerCase() === resolvedEmail);
    if (duplicate) {
      alert('That email is already registered');
      return;
    }

    const freshUser: User = {
      ...mockUser,
      id: `user-${Date.now()}`,
      email: resolvedEmail,
      name: trimmedUsername,
      avatar: DEFAULT_BTC_AVATAR,
      btcBalance: 0,
      usdBalance: 0,
      stakeAmount: 0,
      isVerified: false,
      joinedDate: new Date().toISOString().slice(0, 10),
      role: 'user',
      verificationStatus: 'unverified',
      password,
      phone: '',
      country: '',
      city: '',
      postCode: '',
      job: '',
      timezone: getDefaultTimezone(),
      telegram: '',
      kyc: {
        fullName: trimmedUsername,
        phone: '',
        country: '',
        city: '',
        postCode: '',
        job: '',
        documentType: 'passport',
        frontImage: '',
        backImage: '',
        status: 'unverified',
      },
    };

    setUsers((prev) => [freshUser, ...prev]);
    setUser(freshUser);
  };

  const signInWithGoogle = ({ email, name, avatar }: { email: string; name: string; avatar?: string }) => {
    const normalizedEmail = email.trim().toLowerCase();
    const trimmedName = name.trim() || 'Google User';

    if (!normalizedEmail) {
      alert('Google account email is missing');
      return;
    }

    const existing = users.find((entry) => entry.email.toLowerCase() === normalizedEmail);
    if (existing) {
      const updatedUser: User = {
        ...existing,
        name: trimmedName || existing.name,
        avatar: avatar || existing.avatar || DEFAULT_BTC_AVATAR,
      };
      setUsers((prev) => prev.map((entry) => (entry.email === existing.email ? updatedUser : entry)));
      setUser(updatedUser);
      return;
    }

    const freshUser: User = {
      ...mockUser,
      id: `user-${Date.now()}`,
      email: normalizedEmail,
      name: trimmedName,
      avatar: avatar || DEFAULT_BTC_AVATAR,
      btcBalance: 0,
      usdBalance: 0,
      stakeAmount: 0,
      isVerified: false,
      joinedDate: new Date().toISOString().slice(0, 10),
      role: 'user',
      verificationStatus: 'unverified',
      password: undefined,
      phone: '',
      country: '',
      city: '',
      postCode: '',
      job: '',
      timezone: getDefaultTimezone(),
      telegram: '',
      kyc: {
        fullName: trimmedName,
        phone: '',
        country: '',
        city: '',
        postCode: '',
        job: '',
        documentType: 'passport',
        frontImage: '',
        backImage: '',
        status: 'unverified',
      },
    };

    setUsers((prev) => [freshUser, ...prev]);
    setUser(freshUser);
  };

  const logout = () => {
    setUser(null);
  };

  const updateUser = (data: Partial<User>) => {
    if (!user) return;
    const updated = { ...user, ...data };
    setUser(updated);
    setUsers((prev) => prev.map((entry) => (entry.email === user.email ? updated : entry)));
  };

  const submitKycRequest = (payload: KycRequest) => {
    setKycRequests((prev) => {
      const filtered = prev.filter((entry) => entry.userEmail.toLowerCase() !== payload.userEmail.toLowerCase());
      return mergeKycRequests([payload, ...filtered], users);
    });
  };

  const addTransaction = (tx: Transaction) => {
    if (!user) return;
    const transaction: Transaction = {
      ...tx,
      userEmail: tx.userEmail || user.email,
      userName: tx.userName || user.name,
    };
    setTransactions((prev) => [transaction, ...prev]);
    if (transaction.type === 'deposit' || transaction.type === 'withdraw') {
      const walletRequest = buildWalletRequestFromTransaction(transaction);
      if (!walletRequest) return;
      setWalletRequests((prev) => mergeWalletRequests([walletRequest, ...prev], transactions));
    }
  };

  const addTrade = (trade: Trade) => {
    if (!user) return;
    const nextTrade = { ...trade, userEmail: trade.userEmail || user.email };
    setTrades((prev) => [nextTrade, ...prev]);
  };

  const startTrade = (trade: ActiveTrade) => {
    setLastTradeResult(null);
    setActiveTrade(trade);
  };

  const clearTradeResult = () => {
    setLastTradeResult(null);
  };

  useEffect(() => {
    if (!activeTrade) return;

    const settleTrade = (outcomeReason: 'expiry' | 'liquidation', exitPrice: number) => {
      const resolution = outcomeReason === 'liquidation'
        ? {
            pnl: -activeTrade.amount,
            directionalMovePct: -(100 / activeTrade.leverage),
          }
        : calculatePnL({
            entryPrice: activeTrade.entryPrice,
            exitPrice,
            amount: activeTrade.amount,
            leverageValue: activeTrade.leverage,
            tradeDirection: activeTrade.direction,
          });

      const exitTime = Math.floor(Date.now() / 1000);
      const settledTrade: Trade = {
        id: activeTrade.id,
        pair: activeTrade.pair,
        direction: activeTrade.direction,
        amount: activeTrade.amount,
        leverage: activeTrade.leverage,
        entryPrice: activeTrade.entryPrice,
        exitPrice,
        liquidationPrice: activeTrade.liquidationPrice,
        entryTime: activeTrade.entryTime,
        exitTime,
        timeframe: activeTrade.timeframe,
        status: resolution.pnl >= 0 ? 'won' : 'lost',
        timestamp: new Date().toISOString(),
        userEmail: activeTrade.userEmail,
        pnl: resolution.pnl,
        priceMovePct: resolution.directionalMovePct,
        outcomeReason,
      };

      setTrades((prev) => [settledTrade, ...prev]);
      replaceUser(activeTrade.userEmail, (entry) => ({
        ...entry,
        usdBalance: Math.max(0, entry.usdBalance + resolution.pnl),
      }));
      setLastTradeResult({
        tradeId: activeTrade.id,
        won: resolution.pnl >= 0,
        pnl: resolution.pnl,
        exitPrice,
        exitTime,
        priceMovePct: resolution.directionalMovePct,
        outcomeReason,
      });
      setActiveTrade(null);
    };

    const checkTrade = () => {
      const now = Date.now();
      const liquidated = activeTrade.direction === 'up'
        ? marketSnapshot.price <= activeTrade.liquidationPrice
        : marketSnapshot.price >= activeTrade.liquidationPrice;

      if (liquidated) {
        settleTrade('liquidation', marketSnapshot.price);
        return;
      }

      if (now >= new Date(activeTrade.endTime).getTime()) {
        settleTrade('expiry', marketSnapshot.price);
      }
    };

    checkTrade();
    const interval = window.setInterval(checkTrade, 1000);

    return () => {
      window.clearInterval(interval);
    };
  }, [activeTrade, marketSnapshot.price, user]);

  const approveTransaction = (txId: string) => {
    const target = walletRequests.find((entry) => entry.id === txId) || transactions.find((entry) => entry.id === txId);
    if (!target || target.status !== 'pending' || !target.userEmail) return;

    setWalletRequests((prev) =>
      prev.map((entry) => (
        entry.id === txId
          ? { ...entry, status: 'completed', reviewedAt: new Date().toISOString(), reviewedBy: 'System Admin' }
          : entry
      )),
    );
    setTransactions((prev) =>
      prev.map((entry) => (entry.id === txId ? { ...entry, status: 'completed', reviewedBy: 'System Admin' } : entry)),
    );

    replaceUser(target.userEmail, (entry) => {
      if (target.type === 'deposit') {
        return {
          ...entry,
          btcBalance: entry.btcBalance + (target.btcAmount || 0),
          usdBalance: entry.usdBalance + target.amount,
        };
      }

      if (target.type === 'withdraw') {
        return {
          ...entry,
          usdBalance: Math.max(0, entry.usdBalance - target.amount),
        };
      }

      return entry;
    });
  };

  const rejectTransaction = (txId: string) => {
    setWalletRequests((prev) =>
      prev.map((entry) => (
        entry.id === txId
          ? { ...entry, status: 'rejected', reviewedAt: new Date().toISOString(), reviewedBy: 'System Admin' }
          : entry
      )),
    );
    setTransactions((prev) =>
      prev.map((entry) => (entry.id === txId ? { ...entry, status: 'rejected', reviewedBy: 'System Admin' } : entry)),
    );
  };

  const approveVerification = (email: string) => {
    setKycRequests((prev) => prev.map((entry) => (
      entry.userEmail === email && entry.status === 'pending'
        ? {
            ...entry,
            status: 'approved',
            reviewedAt: new Date().toISOString(),
            reviewedBy: 'System Admin',
          }
        : entry
    )));
    replaceUser(email, (entry) => ({
      ...entry,
      name: entry.kyc?.fullName || entry.name,
      phone: entry.kyc?.phone || entry.phone,
      country: entry.kyc?.country || entry.country,
      city: entry.kyc?.city || entry.city,
      postCode: entry.kyc?.postCode || entry.postCode,
      job: entry.kyc?.job || entry.job,
      isVerified: true,
      verificationStatus: 'approved',
      kyc: entry.kyc
        ? {
            ...entry.kyc,
            status: 'approved',
            reviewedAt: new Date().toISOString(),
            reviewedBy: 'System Admin',
          }
        : entry.kyc,
    }));
  };

  const rejectVerification = (email: string) => {
    setKycRequests((prev) => prev.map((entry) => (
      entry.userEmail === email && entry.status === 'pending'
        ? {
            ...entry,
            status: 'rejected',
            reviewedAt: new Date().toISOString(),
            reviewedBy: 'System Admin',
          }
        : entry
    )));
    replaceUser(email, (entry) => ({
      ...entry,
      isVerified: false,
      verificationStatus: 'rejected',
      kyc: entry.kyc
        ? {
            ...entry.kyc,
            status: 'rejected',
            reviewedAt: new Date().toISOString(),
            reviewedBy: 'System Admin',
          }
        : entry.kyc,
    }));
  };

  const authValue = { user, isAuthenticated: !!user, login, register, signInWithGoogle, logout, updateUser, submitKycRequest };
  const appValue = {
    btcPrice: marketSnapshot.price,
    btcChange24h: marketSnapshot.change24h,
    btcHigh24h: marketSnapshot.high24h,
    btcLow24h: marketSnapshot.low24h,
    btcVolume24h: marketSnapshot.volume24h,
    marketStatus: marketSnapshot.source,
    marketReady,
    transactions,
    walletRequests,
    kycRequests,
    trades,
    users,
    activeTrade,
    lastTradeResult,
    addTransaction,
    addTrade,
    startTrade,
    clearTradeResult,
    approveTransaction,
    rejectTransaction,
    approveVerification,
    rejectVerification,
  };

  return (
    <AppErrorBoundary>
      <AuthContext.Provider value={authValue}>
        <AppContext.Provider value={appValue}>
          <BrowserRouter>
            {!user ? (
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            ) : (
              <div className="min-h-screen bg-btc-dark lg:flex lg:h-screen">
                <Sidebar />
                <div className="flex min-h-screen flex-1 flex-col lg:overflow-hidden">
                  <Header
                    btcPrice={marketSnapshot.price}
                    btcChange24h={marketSnapshot.change24h}
                    marketStatus={marketSnapshot.source}
                  />
                  <main className="app-main-scroll flex-1 bg-[#0f131c] px-4 pb-28 pt-4 sm:px-5 lg:overflow-y-auto lg:px-6 lg:pb-6 lg:pt-6">
                    <Routes>
                      <Route path="/" element={user.role === 'admin' ? <Navigate to="/admin" replace /> : <HomePage />} />
                      <Route path="/finance" element={user.role === 'admin' ? <Navigate to="/admin" replace /> : <FinancePage />} />
                      <Route path="/trade" element={user.role === 'admin' ? <Navigate to="/admin" replace /> : <TradePage />} />
                      <Route path="/profile" element={user.role === 'admin' ? <Navigate to="/admin" replace /> : <ProfilePage />} />
                      <Route path="/news" element={user.role === 'admin' ? <Navigate to="/admin" replace /> : <NewsPage />} />
                      <Route path="/support" element={user.role === 'admin' ? <Navigate to="/admin" replace /> : <SupportPage />} />
                      <Route
                        path="/admin"
                        element={user.role === 'admin' ? <AdminPage /> : <Navigate to="/" replace />}
                      />
                      <Route path="*" element={<Navigate to={user.role === 'admin' ? '/admin' : '/'} replace />} />
                    </Routes>
                  </main>
                </div>
                <MobileNav />
              </div>
            )}
          </BrowserRouter>
        </AppContext.Provider>
      </AuthContext.Provider>
    </AppErrorBoundary>
  );
}

export default App;
