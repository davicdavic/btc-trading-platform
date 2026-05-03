import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, ShieldCheck, TrendingUp, Wallet } from 'lucide-react';
import { useApp } from '../App';
import heroVideo from '../../videos/hero.mp4';

export default function LandingPage() {
  const { btcPrice, btcChange24h, marketStatus, marketReady } = useApp();

  return (
    <div className="landing-shell">
      <style>{`
        .landing-shell {
          min-height: 100vh;
          background: #0b0e11;
          color: #fff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        .landing-nav {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 18px 24px;
          background: rgba(11, 14, 17, 0.92);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(14px);
        }
        .landing-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 24px;
          font-weight: 800;
        }
        .brand-dot {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
        }
        .landing-actions {
          display: flex;
          gap: 12px;
        }
        .landing-btn {
          min-height: 44px;
          padding: 0 18px;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .landing-btn.ghost {
          color: #fff;
          border: 1px solid rgba(255,255,255,0.12);
        }
        .landing-btn.primary {
          background: #f7931a;
          color: #111;
        }
        .landing-hero {
          position: relative;
          min-height: calc(100vh - 78px);
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .landing-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .landing-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, rgba(11,14,17,.92) 20%, rgba(11,14,17,.52) 58%, rgba(11,14,17,.88) 100%),
            radial-gradient(circle at top right, rgba(247,147,26,.24), transparent 34%);
        }
        .landing-content {
          position: relative;
          z-index: 1;
          max-width: 1320px;
          margin: 0 auto;
          padding: 48px 24px;
          width: 100%;
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          gap: 28px;
          align-items: end;
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255,255,255,.08);
          color: #f6b353;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 18px;
        }
        .landing-title {
          font-size: clamp(42px, 7vw, 80px);
          line-height: .96;
          font-weight: 800;
          letter-spacing: -.05em;
          max-width: 10ch;
          margin-bottom: 18px;
        }
        .landing-title span { color: #f7931a; }
        .landing-copy p {
          max-width: 56ch;
          color: #bdc7d5;
          font-size: 18px;
          line-height: 1.75;
          margin-bottom: 22px;
        }
        .landing-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 24px;
        }
        .stat-card, .side-card {
          background: rgba(17, 23, 34, .78);
          border: 1px solid rgba(255,255,255,.08);
          border-radius: 22px;
          padding: 18px;
        }
        .stat-card strong {
          display: block;
          font-size: 28px;
          margin-bottom: 6px;
        }
        .stat-card span {
          color: #8f9eb2;
          font-size: 13px;
        }
        .side-grid {
          display: grid;
          gap: 16px;
        }
        .side-card h3 {
          font-size: 14px;
          color: #f6b353;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin-bottom: 10px;
        }
        .side-card strong {
          display: block;
          font-size: 34px;
          font-family: 'Roboto Mono', monospace;
          margin-bottom: 8px;
        }
        .side-card strong.loading-price {
          color: #8f9eb2;
        }
        .side-card-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          color: #8f9eb2;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .side-card-label::before {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: ${marketStatus === 'live' ? '#0ecb81' : '#f6b353'};
          box-shadow: 0 0 0 6px ${marketStatus === 'live' ? 'rgba(14, 203, 129, 0.14)' : 'rgba(246, 179, 83, 0.14)'};
        }
        .side-card-change {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
        }
        .side-card-change.up {
          background: rgba(14, 203, 129, 0.14);
          color: #0ecb81;
        }
        .side-card-change.down {
          background: rgba(246, 70, 93, 0.14);
          color: #f6465d;
        }
        .side-card p {
          color: #a8b3c5;
          line-height: 1.7;
        }
        .feature-row {
          display: grid;
          gap: 12px;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }
        .feature-item svg { color: #f7931a; margin-top: 3px; }
        .feature-item div strong { display: block; margin-bottom: 4px; }
        .feature-item div span { color: #8f9eb2; font-size: 14px; }
        .landing-footer {
          position: relative;
          max-width: 1320px;
          margin: 24px auto 0;
          padding: 34px 28px 32px;
          display: grid;
          grid-template-columns: 1.35fr repeat(3, 1fr);
          gap: 28px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            radial-gradient(circle at top left, rgba(247, 147, 26, 0.16), transparent 28%),
            radial-gradient(circle at top right, rgba(247, 147, 26, 0.1), transparent 22%),
            linear-gradient(180deg, rgba(10, 14, 22, 0.96), rgba(7, 10, 16, 0.98));
          box-shadow: 0 26px 80px rgba(0, 0, 0, 0.24);
        }
        .landing-footer::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(180deg, rgba(255,255,255,0.04), transparent 18%);
        }
        .footer-brand {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          max-width: 360px;
        }
        .footer-coin {
          width: 48px;
          height: 48px;
          flex: 0 0 auto;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
          font-size: 24px;
          font-weight: 800;
          box-shadow: 0 18px 40px rgba(247, 147, 26, 0.24);
        }
        .footer-brand h3 {
          margin: 0 0 10px;
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .footer-brand p {
          margin: 0;
          max-width: 30ch;
        }
        .footer-brand p,
        .footer-link,
        .footer-bottom {
          color: #8f9eb2;
          font-size: 14px;
          line-height: 1.75;
        }
        .footer-column {
          position: relative;
          z-index: 1;
        }
        .footer-title {
          margin-bottom: 10px;
          color: #f6b353;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-size: 12px;
          font-weight: 700;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .footer-link {
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-link:hover {
          color: #fff;
        }
        .footer-bottom {
          grid-column: 1 / -1;
          position: relative;
          z-index: 1;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }
        @media (max-width: 960px) {
          .landing-content { grid-template-columns: 1fr; }
          .landing-stats { grid-template-columns: 1fr; }
          .landing-footer { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 680px) {
          .landing-nav {
            padding: 14px 16px;
            flex-wrap: wrap;
          }
          .landing-brand { font-size: 20px; }
          .landing-actions { width: 100%; }
          .landing-btn { flex: 1; justify-content: center; }
          .landing-content { padding: 32px 16px; }
          .landing-copy p { font-size: 16px; }
          .landing-footer {
            margin-top: 20px;
            padding: 24px 16px 26px;
            grid-template-columns: 1fr;
            gap: 18px;
            border-radius: 22px;
          }
        }
      `}</style>
      <nav className="landing-nav">
        <div className="landing-brand">
          <div className="brand-dot">₿</div>
          <span>BTCTrade<span style={{ color: '#f7931a' }}>Pro</span></span>
        </div>
        <div className="landing-actions">
          <Link to="/login" className="landing-btn ghost">Sign In</Link>
          <Link to="/login" className="landing-btn primary">Start Now</Link>
        </div>
      </nav>

      <section className="landing-hero">
        <video className="landing-video" src={heroVideo} autoPlay muted loop playsInline />
        <div className="landing-overlay" />
        <div className="landing-content">
          <div className="landing-copy">
            <div className="eyebrow"><ShieldCheck size={14} /> Professional Bitcoin trading platform</div>
            <h1 className="landing-title">Trade <span>Bitcoin</span> Build Wealth</h1>
            <p>Join a pro-style BTC platform with live market data, wallet approvals, advanced charting, and a premium mobile-first experience.</p>
            <div className="landing-actions">
              <Link to="/login" className="landing-btn primary">Sign In <ArrowRight size={16} /></Link>
              <Link to="/login" className="landing-btn ghost">Create Account</Link>
            </div>
            <div className="landing-stats">
              <div className="stat-card"><strong>$2.4B+</strong><span>Trading Volume</span></div>
              <div className="stat-card"><strong>5M+</strong><span>Users</span></div>
              <div className="stat-card"><strong>99.9%</strong><span>Uptime</span></div>
            </div>
          </div>
          <div className="side-grid">
            <div className="side-card">
              <h3>BTC/USDT</h3>
              <div className="side-card-label">
                {marketReady ? (marketStatus === 'live' ? 'Live Market' : 'Fallback Market') : 'Loading Market'}
              </div>
              <strong className={!marketReady ? 'loading-price' : undefined}>
                {marketReady
                  ? `$${btcPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                  : 'Loading...'}
              </strong>
              {marketReady && (
                <div className={`side-card-change ${btcChange24h >= 0 ? 'up' : 'down'}`}>
                  {btcChange24h >= 0 ? '+' : ''}{btcChange24h.toFixed(2)}% 24h
                </div>
              )}
              <p>Real-time Bitcoin pricing powers the trade desk after sign-in, with wallet and approval flows connected across the app.</p>
            </div>
            <div className="side-card">
              <h3>Why BTCTradePro</h3>
              <div className="feature-row">
                <div className="feature-item"><BarChart2 size={18} /><div><strong>Live Trade Desk</strong><span>Real BTC charting and market sync.</span></div></div>
                <div className="feature-item"><Wallet size={18} /><div><strong>Wallet Review Flow</strong><span>Admin-reviewed deposits and withdrawals.</span></div></div>
                <div className="feature-item"><TrendingUp size={18} /><div><strong>Mobile Pro UX</strong><span>Dedicated screens for trade, wallet, profile, and support.</span></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="footer-brand">
          <div className="footer-coin">₿</div>
          <div>
            <h3>BTCTradePro</h3>
            <p>The world's leading Bitcoin trading platform with advanced tools and institutional-grade security.</p>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-title">Products</div>
          <div className="footer-links">
            <Link to="/login" className="footer-link">Spot Trading</Link>
            <Link to="/login" className="footer-link">Futures</Link>
            <Link to="/login" className="footer-link">Staking</Link>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-title">Company</div>
          <div className="footer-links">
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Careers</a>
            <a href="#" className="footer-link">Press</a>
          </div>
        </div>
        <div className="footer-column">
          <div className="footer-title">Support</div>
          <div className="footer-links">
            <a href="#" className="footer-link">Telegram</a>
            <Link to="/login" className="footer-link">Help Center</Link>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">2026 BTCTradePro. All rights reserved.</div>
      </footer>
    </div>
  );
}
