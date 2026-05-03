import { NavLink } from 'react-router-dom';
import {
  ChevronRight,
  HelpCircle,
  Home,
  LogOut,
  MessageCircle,
  Newspaper,
  Settings,
  Shield,
  TrendingUp,
  User,
  Wallet,
} from 'lucide-react';
import { useAuth } from '../../App';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/trade', icon: TrendingUp, label: 'Trade' },
  { path: '/finance', icon: Wallet, label: 'Finance' },
  { path: '/news', icon: Newspaper, label: 'News' },
  { path: '/profile', icon: User, label: 'Profile' },
];

const adminNavItems = [
  { path: '/admin', icon: Shield, label: 'Admin Dashboard' },
];

export default function Sidebar() {
  const { logout, user } = useAuth();
  const isAdmin = user?.role === 'admin';

  return (
    <aside className="app-sidebar">
      <style>{`
        .app-sidebar {
          width: 260px;
          background: linear-gradient(180deg, #0b0f15, #0a0d12);
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          height: 100vh;
          position: sticky;
          top: 0;
        }
        .app-sidebar * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .sidebar-logo {
          padding: 20px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #f7931a, #ff9500);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-icon span {
          font-size: 22px;
          font-weight: 800;
          color: #000;
        }
        .logo-text h1 {
          font-size: 18px;
          font-weight: 700;
          color: #e8e8e8;
          letter-spacing: -0.5px;
        }
        .logo-text p {
          font-size: 11px;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .sidebar-nav {
          flex: 1;
          padding: 16px 12px;
          overflow-y: auto;
        }
        .nav-section {
          margin-bottom: 24px;
        }
        .nav-section-title {
          font-size: 10px;
          font-weight: 700;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 0 12px;
          margin-bottom: 8px;
        }
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          border-radius: 12px;
          color: #8894a5;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
          margin-bottom: 4px;
          position: relative;
        }
        .nav-item:hover {
          background: #141a24;
          color: #e8eef8;
        }
        .nav-item.active {
          background: linear-gradient(180deg, rgba(20, 33, 52, 0.96), rgba(20, 33, 52, 0.72));
          color: #7cb0ff;
        }
        .nav-item.active::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 24px;
          background: #3478f6;
          border-radius: 0 3px 3px 0;
        }
        .nav-item-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
        }
        .nav-item-text {
          flex: 1;
        }
        .nav-item-badge {
          background: #f6465d;
          color: white;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .nav-item-arrow {
          opacity: 0;
          transition: opacity 0.2s;
        }
        .nav-item:hover .nav-item-arrow {
          opacity: 1;
        }
        .sidebar-footer {
          padding: 16px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }
        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .footer-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 16px;
          border-radius: 8px;
          color: #666;
          text-decoration: none;
          font-size: 13px;
          transition: all 0.2s;
        }
        .footer-item:hover {
          background: #141a24;
          color: #8894a5;
        }
        .logout-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          width: 100%;
          border-radius: 8px;
          color: #f6465d;
          background: transparent;
          border: none;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 8px;
        }
        .logout-btn:hover {
          background: rgba(246, 70, 93, 0.1);
        }
        .admin-section {
          background: linear-gradient(135deg, rgba(52, 120, 246, 0.1), rgba(52, 120, 246, 0.05));
          border: 1px solid rgba(52, 120, 246, 0.2);
          border-radius: 10px;
          margin: 16px 12px;
          padding: 12px;
        }
        .admin-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .admin-badge {
          background: #3478f6;
          color: white;
          font-size: 9px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .admin-title {
          font-size: 11px;
          color: #888;
        }
        @media (max-width: 1023px) {
          .app-sidebar {
            display: none;
          }
        }
      `}</style>

      <div className="sidebar-logo">
        <div className="logo-container">
          <div className="logo-icon">
            <span>₿</span>
          </div>
          <div className="logo-text">
            <h1>BTC Trade</h1>
            <p>Pro Platform</p>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {isAdmin ? (
          <div className="admin-section">
            <div className="admin-header">
              <span className="admin-badge">Admin</span>
              <span className="admin-title">Back Office</span>
            </div>
            {adminNavItems.map((item) => {
              const Icon = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                >
                  <Icon className="nav-item-icon" size={20} />
                  <span className="nav-item-text">{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        ) : (
          <>
            <div className="nav-section">
              <div className="nav-section-title">Main Menu</div>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                  >
                    <Icon className="nav-item-icon" size={20} />
                    <span className="nav-item-text">{item.label}</span>
                    <ChevronRight className="nav-item-arrow" size={16} />
                  </NavLink>
                );
              })}
            </div>

            <div className="nav-section">
              <div className="nav-section-title">Support</div>
              <NavLink to="/support" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                <MessageCircle className="nav-item-icon" size={20} />
                <span className="nav-item-text">Support Chat</span>
                <span className="nav-item-badge">Live</span>
              </NavLink>
            </div>
          </>
        )}
      </nav>

      <div className="sidebar-footer">
        {!isAdmin && (
          <div className="footer-nav">
            <a href="#" className="footer-item">
              <Settings size={16} />
              Settings
            </a>
            <a href="#" className="footer-item">
              <HelpCircle size={16} />
              Help Center
            </a>
          </div>
        )}
        <button onClick={logout} className="logout-btn">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </aside>
  );
}
