import { NavLink } from 'react-router-dom';
import { Home, Wallet, TrendingUp, User, Newspaper, Shield } from 'lucide-react';
import { useAuth } from '../../App';

const baseItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/trade', label: 'Trade', icon: TrendingUp },
  { path: '/news', label: 'News', icon: Newspaper },
  { path: '/finance', label: 'Wallet', icon: Wallet },
  { path: '/profile', label: 'Profile', icon: User },
];

const adminItems = [
  { path: '/admin', label: 'Admin', icon: Shield },
];

export default function MobileNav() {
  const { user } = useAuth();
  const items = user?.role === 'admin' ? adminItems : baseItems;

  return (
    <nav className="mobile-nav-shell">
      <style>{`
        .mobile-nav-shell {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 120;
          display: none;
          padding: 0 14px 14px;
          pointer-events: none;
        }
        .mobile-nav {
          display: grid;
          grid-template-columns: repeat(${items.length}, 1fr);
          gap: 8px;
          background: rgba(10, 14, 21, 0.94);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 22px;
          padding: 10px 12px;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(18px);
          pointer-events: auto;
        }
        .mobile-nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          text-decoration: none;
          color: #7f8ea3;
          font-size: 11px;
          font-weight: 600;
          padding: 8px 4px;
          border-radius: 16px;
          transition: all 0.2s ease;
        }
        .mobile-nav-item.active {
          color: #f5f7fb;
          background: linear-gradient(180deg, rgba(247, 147, 26, 0.2), rgba(52, 120, 246, 0.12));
        }
        .mobile-nav-item.active .mobile-nav-icon {
          color: #f7931a;
        }
        .mobile-nav-icon {
          width: 20px;
          height: 20px;
        }
        @media (max-width: 1023px) {
          .mobile-nav-shell {
            display: block;
          }
        }
      `}</style>
      <div className="mobile-nav">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}
            >
              <Icon className="mobile-nav-icon" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
