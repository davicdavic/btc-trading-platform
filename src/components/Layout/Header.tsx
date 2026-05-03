import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, ChevronDown, LogOut, Settings, User, Wallet, Wifi, WifiOff } from 'lucide-react';
import { useAuth } from '../../App';

interface HeaderProps {
  btcPrice: number;
  btcChange24h: number;
  marketStatus: 'live' | 'fallback';
}

export default function Header({ btcPrice, btcChange24h, marketStatus }: HeaderProps) {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement | null>(null);
  const notificationMenuRef = useRef<HTMLDivElement | null>(null);
  const btcValueUsd = (user?.btcBalance || 0) * btcPrice;

  const notifications = [
    { id: 1, title: 'Deposit Confirmed', message: 'Your BTC deposit of 0.025 BTC has been confirmed', time: '2 min ago', unread: true },
    { id: 2, title: 'Trade Closed', message: 'BTC/USD settled with a +$150 result', time: '15 min ago', unread: true },
    { id: 3, title: 'Withdrawal Processed', message: 'Your wallet request is now complete', time: '1 hour ago', unread: false },
  ];

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (!target) return;

      if (showDropdown && profileMenuRef.current && !profileMenuRef.current.contains(target)) {
        setShowDropdown(false);
      }

      if (showNotifications && notificationMenuRef.current && !notificationMenuRef.current.contains(target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [showDropdown, showNotifications]);

  return (
    <header className="pro-header">
      <style>{`
        .pro-header {
          position: sticky;
          top: 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 16px 18px;
          background: rgba(15, 18, 26, 0.96);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(16px);
        }
        .pro-header * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .header-main,
        .header-right,
        .header-brand,
        .header-ticker,
        .summary-card,
        .profile-chip,
        .user-btn {
          display: flex;
          align-items: center;
        }
        .header-main {
          justify-content: space-between;
          gap: 16px;
        }
        .header-brand {
          gap: 14px;
          min-width: 0;
        }
        .brand-icon {
          width: 40px;
          height: 40px;
          border-radius: 14px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          font-size: 22px;
          font-weight: 800;
          box-shadow: 0 12px 32px rgba(247, 147, 26, 0.25);
        }
        .brand-copy h1 {
          font-size: 15px;
          line-height: 1.1;
          font-weight: 700;
          color: #f5f7fb;
        }
        .brand-copy p {
          display: none;
        }
        .header-ticker {
          gap: 8px;
          min-width: 0;
          padding: 0;
          border-radius: 0;
          background: transparent;
          border: none;
          flex-direction: row;
          align-items: center;
          white-space: nowrap;
        }
        .ticker-top {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          width: auto;
          min-width: 0;
        }
        .ticker-middle {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 8px;
          width: auto;
          min-width: 0;
        }
        .ticker-market-copy {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .ticker-top .status-chip {
          display: none;
        }
        .ticker-symbol {
          color: #f5f7fb;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
        }
        .ticker-price {
          color: #f5f7fb;
          font-size: 13px;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          white-space: nowrap;
        }
        .ticker-change {
          font-size: 12px;
          font-weight: 700;
          padding: 4px 8px;
          border-radius: 999px;
        }
        .ticker-change.positive {
          color: #0ecb81;
          background: rgba(14, 203, 129, 0.15);
        }
        .ticker-change.negative {
          color: #f6465d;
          background: rgba(246, 70, 93, 0.15);
        }
        .header-right {
          gap: 12px;
        }
        .balance-badge {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 10px 14px;
          background: rgba(255, 255, 255, 0.04);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .balance-label {
          display: block;
          font-size: 10px;
          color: #7f8ea3;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }
        .balance-value {
          color: #eef3fb;
          font-size: 13px;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
        }
        .balance-value.btc {
          color: #f7931a;
        }
        .balance-divider {
          width: 1px;
          height: 28px;
          background: rgba(255, 255, 255, 0.08);
        }
        .header-btn,
        .user-btn {
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.04);
          border-radius: 14px;
          color: #d3dcea;
        }
        .header-btn {
          position: relative;
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .notification-dot {
          position: absolute;
          top: 8px;
          right: 8px;
          width: 8px;
          height: 8px;
          background: #f6465d;
          border-radius: 50%;
        }
        .user-menu {
          position: relative;
        }
        .menu-backdrop {
          display: none;
        }
        .user-btn {
          gap: 8px;
          padding: 8px 12px;
          cursor: pointer;
        }
        .user-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f7931a, #ff9500);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 12px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .user-avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .user-name {
          font-size: 13px;
          font-weight: 600;
          color: #eef3fb;
        }
        .dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          min-width: 220px;
          background: #131821;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
          overflow: hidden;
          z-index: 1000;
        }
        .dropdown-header {
          padding: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .dropdown-name {
          font-weight: 600;
          color: #e8e8e8;
          margin-bottom: 2px;
        }
        .dropdown-email {
          font-size: 12px;
          color: #888;
        }
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          color: #ccc;
          text-decoration: none;
          transition: all 0.2s;
          cursor: pointer;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
          font-size: 13px;
        }
        .dropdown-item:hover {
          background: #252525;
          color: #e8e8e8;
        }
        .dropdown-item.danger {
          color: #f6465d;
        }
        .notification-dropdown {
          width: 360px;
          max-height: 400px;
          overflow-y: auto;
        }
        .notification-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .notification-title {
          font-weight: 600;
          color: #e8e8e8;
        }
        .notification-item {
          display: flex;
          gap: 12px;
          padding: 14px 16px;
          border-bottom: 1px solid #222;
        }
        .notification-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #252525;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #f7931a;
          flex-shrink: 0;
        }
        .notification-content {
          flex: 1;
        }
        .notification-item-title {
          font-weight: 600;
          font-size: 13px;
          color: #e8e8e8;
          margin-bottom: 4px;
        }
        .notification-message,
        .notification-time {
          font-size: 12px;
          color: #888;
        }
        .unread-dot {
          width: 8px;
          height: 8px;
          background: #3478f6;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 4px;
        }
        .header-summary {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr) auto;
          gap: 12px;
        }
        .summary-card {
          justify-content: space-between;
          gap: 12px;
          min-width: 0;
          padding: 12px 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
        .summary-label {
          font-size: 11px;
          color: #7f8ea3;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          margin-bottom: 4px;
        }
        .summary-value {
          color: #f5f7fb;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          font-weight: 700;
        }
        .summary-sub {
          color: #7f8ea3;
          font-size: 12px;
          white-space: nowrap;
        }
        .profile-chip {
          gap: 10px;
        }
        .summary-user-name {
          font-size: 13px;
        }
        .status-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: ${marketStatus === 'live' ? '#0ecb81' : '#f7931a'};
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }
        @media (max-width: 1023px) {
          .balance-badge {
            display: none;
          }
          .header-summary {
            grid-template-columns: 1fr 1fr;
          }
          .summary-card:last-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 720px) {
          .pro-header {
            padding: 8px 10px;
            gap: 6px;
          }
          .brand-copy p,
          .user-name {
            display: none;
          }
          .brand-copy h1 {
            font-size: 13px;
          }
          .header-ticker {
            padding: 6px 8px;
            gap: 4px;
            border-radius: 12px;
            background: linear-gradient(180deg, rgba(17, 25, 37, 0.96), rgba(13, 19, 29, 0.86));
            border-color: rgba(72, 113, 173, 0.35);
            box-shadow: 0 8px 18px rgba(0, 0, 0, 0.18);
          }
          .ticker-symbol {
            font-size: 8px;
            letter-spacing: 0.08em;
            text-transform: uppercase;
          }
          .ticker-top {
            align-items: flex-start;
          }
          .ticker-market-copy {
            gap: 2px;
          }
          .ticker-price {
            font-size: 13px;
            line-height: 1;
          }
          .ticker-change {
            font-size: 9px;
            padding: 3px 7px;
            flex-shrink: 0;
          }
          .header-right .status-chip {
            display: none;
          }
          .ticker-top .status-chip {
            display: inline-flex;
            font-size: 8px;
            padding: 0;
            letter-spacing: 0.08em;
            flex-shrink: 0;
          }
          .summary-card {
            padding: 7px 9px;
            border-radius: 12px;
            gap: 8px;
          }
          .summary-label {
            font-size: 9px;
            margin-bottom: 2px;
          }
          .summary-value {
            font-size: 11px;
          }
          .summary-sub {
            font-size: 9px;
          }
          .user-avatar {
            width: 22px;
            height: 22px;
          }
          .header-main {
            flex-wrap: wrap;
            gap: 10px;
          }
          .header-summary {
            grid-template-columns: 1fr 1fr;
            gap: 6px;
          }
          .profile-chip {
            gap: 8px;
          }
          .summary-user-card {
            display: none;
          }
          .summary-user-card .summary-label {
            display: none;
          }
          .summary-user-card .profile-chip {
            display: none;
          }
          .summary-user-card .status-chip {
            display: none;
          }
          .notification-dropdown {
            width: min(88vw, 320px);
            max-height: min(64vh, 420px);
          }
          .status-chip {
            font-size: 10px;
            gap: 4px;
          }
          .menu-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(5, 9, 16, 0.22);
            backdrop-filter: blur(2px);
            z-index: 960;
          }
          .dropdown {
            position: fixed;
            top: 60px;
            right: 12px;
            left: auto;
            min-width: 0;
            width: min(88vw, 320px);
            border-radius: 16px;
            max-height: calc(100vh - 92px);
            z-index: 980;
          }
          .notification-dropdown {
            width: min(88vw, 320px);
          }
          .dropdown-header,
          .notification-header {
            padding: 12px;
          }
          .dropdown-name {
            font-size: 13px;
          }
          .dropdown-email {
            font-size: 10px;
            word-break: break-word;
          }
          .dropdown-item {
            padding: 12px;
            font-size: 13px;
          }
          .notification-item {
            padding: 12px;
            gap: 9px;
          }
          .notification-item-title {
            font-size: 11px;
          }
          .notification-message,
          .notification-time {
            font-size: 10px;
            line-height: 1.45;
          }
          .notification-icon {
            width: 30px;
            height: 30px;
          }
          .header-btn,
          .user-btn {
            border-radius: 12px;
          }
        }
      `}</style>

      <div className="header-main">
        <div className="header-brand">
          <div className="brand-icon">₿</div>
          <div className="brand-copy">
            <h1>BTC Trade Pro</h1>
          </div>
        </div>

        <div className="header-ticker">
          <div className="ticker-top">
            <span className="ticker-symbol">BTC/USD</span>
            <div className="status-chip">
              {marketStatus === 'live' ? <Wifi size={14} /> : <WifiOff size={14} />}
              {marketStatus}
            </div>
          </div>
          <div className="ticker-middle">
            <span className="ticker-price">
              ${btcPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            <span className={`ticker-change ${btcChange24h >= 0 ? 'positive' : 'negative'}`}>
              {btcChange24h >= 0 ? '+' : ''}{btcChange24h.toFixed(2)}%
            </span>
          </div>
        </div>

        <div className="header-right">
          <div className="balance-badge">
            <div>
              <span className="balance-label">USD</span>
              <span className="balance-value">
                ${(user?.usdBalance || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            </div>
            <div className="balance-divider" />
            <div>
              <span className="balance-label">BTC</span>
              <span className="balance-value btc">{(user?.btcBalance || 0).toFixed(6)}</span>
            </div>
          </div>

          <div className="user-menu" ref={notificationMenuRef}>
            {showNotifications && <button type="button" className="menu-backdrop" onClick={() => setShowNotifications(false)} aria-label="Close notifications" />}
            <button className="header-btn" onClick={() => setShowNotifications(!showNotifications)}>
              <Bell size={20} />
              <span className="notification-dot" />
            </button>

            {showNotifications && (
              <div className="dropdown notification-dropdown">
                <div className="notification-header">
                  <span className="notification-title">Notifications</span>
                  <span style={{ color: '#3478f6', fontSize: '12px', cursor: 'pointer' }}>Mark all as read</span>
                </div>
                {notifications.map((notif) => (
                  <div key={notif.id} className="notification-item">
                    <div className="notification-icon">
                      <Wallet size={16} />
                    </div>
                    <div className="notification-content">
                      <div className="notification-item-title">{notif.title}</div>
                      <div className="notification-message">{notif.message}</div>
                      <div className="notification-time">{notif.time}</div>
                    </div>
                    {notif.unread && <div className="unread-dot" />}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="user-menu" ref={profileMenuRef}>
            {showDropdown && <button type="button" className="menu-backdrop" onClick={() => setShowDropdown(false)} aria-label="Close profile menu" />}
            <button className="user-btn" onClick={() => setShowDropdown(!showDropdown)}>
              <div className="user-avatar">
                {user?.avatar ? <img src={user.avatar} alt={user.name || 'User'} /> : (user?.name?.charAt(0).toUpperCase() || 'U')}
              </div>
              <span className="user-name">{user?.name || 'User'}</span>
              <ChevronDown size={16} color="#888" />
            </button>

            {showDropdown && (
              <div className="dropdown">
                <div className="dropdown-header">
                  <div className="dropdown-name">{user?.name}</div>
                  <div className="dropdown-email">{user?.email}</div>
                </div>
                <Link to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                  <User size={16} />
                  Profile
                </Link>
                <Link to="/finance" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                  <Wallet size={16} />
                  Wallet
                </Link>
                <Link to="/profile" className="dropdown-item" onClick={() => setShowDropdown(false)}>
                  <Settings size={16} />
                  Settings
                </Link>
                <button className="dropdown-item danger" onClick={() => { logout(); setShowDropdown(false); }}>
                  <LogOut size={16} />
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="header-summary">
        <div className="summary-card">
          <div>
            <div className="summary-label">Portfolio BTC</div>
            <div className="summary-value">{(user?.btcBalance || 0).toFixed(6)} BTC</div>
          </div>
          <div className="summary-sub">
            ${btcValueUsd.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </div>
        </div>

        <div className="summary-card">
          <div>
            <div className="summary-label">Cash Balance</div>
            <div className="summary-value">
              ${(user?.usdBalance || 0).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
          <div className={`ticker-change ${btcChange24h >= 0 ? 'positive' : 'negative'}`}>
            {btcChange24h >= 0 ? '+' : ''}{btcChange24h.toFixed(2)}%
          </div>
        </div>

        <div className="summary-card summary-user-card">
          <div className="profile-chip">
            <div className="user-avatar">
              {user?.avatar ? <img src={user.avatar} alt={user.name || 'User'} /> : (user?.name?.charAt(0).toUpperCase() || 'U')}
            </div>
            <div>
              <div className="summary-label">Signed In</div>
              <div className="summary-value summary-user-name">{user?.name || 'User'}</div>
            </div>
          </div>
          <div className="status-chip">
            {marketStatus === 'live' ? <Wifi size={14} /> : <WifiOff size={14} />}
            {marketStatus}
          </div>
        </div>
      </div>
    </header>
  );
}
