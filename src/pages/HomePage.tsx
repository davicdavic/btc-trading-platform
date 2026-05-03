import { Link } from 'react-router-dom';
import { ArrowRight, BarChart2, Clock3, Globe2, Newspaper, ShieldCheck, Star, TrendingDown, TrendingUp, Wallet } from 'lucide-react';
import { useApp } from '../App';
import { mockLeaderboard } from '../utils/mockData';
import heroVideo from '../../videos/hero.mp4';

const marketRows = [
  { symbol: 'ETH', name: 'Ethereum', price: 3120.44, change: 1.18, high: 3186.20, low: 3068.55 },
  { symbol: 'SOL', name: 'Solana', price: 167.23, change: 2.74, high: 170.84, low: 160.92 },
  { symbol: 'XRP', name: 'XRP', price: 0.6542, change: -0.42, high: 0.6674, low: 0.6418 },
  { symbol: 'BNB', name: 'BNB', price: 604.72, change: 0.88, high: 613.11, low: 596.42 },
];

const homeNews = [
  { id: 'n1', title: 'ETF inflows keep Bitcoin demand elevated through the New York session', meta: 'Macro Flow', image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=900&q=80' },
  { id: 'n2', title: 'Miners tighten supply while spot desks track fresh BTC accumulation', meta: 'Mining', image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=900&q=80' },
  { id: 'n3', title: 'Traders watch the next reclaim zone as BTC volatility expands again', meta: 'Technical', image: 'https://images.unsplash.com/photo-1640161704729-cbe966a08476?auto=format&fit=crop&w=900&q=80' },
  { id: 'n4', title: 'Market desks watch BTC liquidity as U.S. trading opens with stronger spot demand', meta: 'Liquidity', image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&w=900&q=80' },
  { id: 'n5', title: 'Bitcoin options activity rises as traders position for a bigger breakout range', meta: 'Derivatives', image: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=900&q=80' },
  { id: 'n6', title: 'Macro desks rotate back into BTC as risk appetite improves across crypto markets', meta: 'Macro', image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=900&q=80' },
];

const historyMoments = [
  { year: '2009', title: 'Genesis block mined', text: 'Bitcoin launched as the first decentralized digital asset network.' },
  { year: '2017', title: 'Global breakout cycle', text: 'BTC reached mainstream awareness and became a major macro market conversation.' },
  { year: '2024', title: 'Spot ETF era', text: 'Institutional access deepened and daily market participation broadened.' },
];

const reviews = [
  { name: 'Sarah Miller', role: 'Swing Trader', avatar: 'https://randomuser.me/api/portraits/women/68.jpg', text: 'The mobile layout finally feels like a real trading app. I can check BTC, wallet status, and support without hunting around.', profit: '+$12,450' },
  { name: 'Daniel Brooks', role: 'Day Trader', avatar: 'https://randomuser.me/api/portraits/men/75.jpg', text: 'The trade desk is clean, the chart is live, and the admin-confirmed wallet flow makes the demo feel much closer to a real exchange.', profit: '+$8,930' },
  { name: 'Emily Park', role: 'BTC Investor', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', text: 'Profile, deposit, and review sections now look premium. This feels much more trustworthy than a generic crypto landing page.', profit: '+$21,600' },
  { name: 'Noah Grant', role: 'Scalp Trader', avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Noah', text: 'Phone version feels way tighter now and the quick wallet flow is actually believable.', profit: '+$4,180' },
  { name: 'Amelia Ross', role: 'Portfolio Manager', avatar: 'https://randomuser.me/api/portraits/women/52.jpg', text: 'I like that the KYC and admin approval flow now feels connected instead of fake.', profit: '+$15,700' },
  { name: 'Leo Quinn', role: 'Momentum Trader', avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=Leo', text: 'Great trade interface. The chart and wallet behavior make the whole demo feel more serious.', profit: '+$6,520' },
  { name: 'Mia Lopez', role: 'BTC Analyst', avatar: 'https://randomuser.me/api/portraits/women/22.jpg', text: 'The profile system is much better with avatar choice and editable trader details.', profit: '+$9,410' },
  { name: 'Kai Mercer', role: 'Algo Trader', avatar: 'https://api.dicebear.com/7.x/bottts/svg?seed=Kai', text: 'The moving review strip and mixed avatar style make the home page feel more alive.', profit: '+$11,230' },
  { name: 'Sophia Reed', role: 'Long-Term Holder', avatar: 'https://randomuser.me/api/portraits/women/31.jpg', text: 'Deposit first, admin review later, balance updates after approval. That flow now makes sense.', profit: '+$3,890' },
  { name: 'Ethan Cruz', role: 'Macro Trader', avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=Ethan', text: 'The landing page now feels like an actual product page, not a login wall.', profit: '+$13,040' },
  { name: 'Grace Park', role: 'Futures Trader', avatar: 'https://randomuser.me/api/portraits/women/57.jpg', text: 'Top trader cards and reviews now look premium on my phone, which matters a lot.', profit: '+$18,660' },
  { name: 'Mason Cole', role: 'High-Frequency Trader', avatar: 'https://api.dicebear.com/7.x/personas/svg?seed=Mason', text: 'The whole platform is closer to a professional exchange demo now.', profit: '+$7,880' },
];

const marketFilters = ['All', '0 Fees', '50% Fees', 'Margin Trading', 'RWA', 'SOL Ecosystem'];
const marketVisuals: Record<string, { icon: string; favorite?: boolean; tags?: string[]; bg: string; color: string }> = {
  BTC: { icon: '₿', favorite: true, tags: ['10X'], bg: '#ffb11a', color: '#fff' },
  ETH: { icon: 'Ξ', favorite: true, tags: ['10X'], bg: '#0c0d10', color: '#fff' },
  XRP: { icon: '✕', favorite: true, tags: ['10X'], bg: '#0b0b0d', color: '#fff' },
  SOL: { icon: 'S', tags: ['10X'], bg: '#0f1720', color: '#67ffd8' },
  BNB: { icon: '◇', tags: ['10X'], bg: '#f3ba2f', color: '#111' },
};

export default function HomePage() {
  const { btcPrice, btcChange24h, btcHigh24h, btcLow24h, btcVolume24h, marketStatus, marketReady } = useApp();

  const btcCard = {
    symbol: 'BTC',
    name: 'Bitcoin',
    price: btcPrice,
    change: btcChange24h,
    volume: btcVolume24h,
    high: btcHigh24h,
    low: btcLow24h,
  };

  return (
    <div className="home-shell">
      <style>{`
        .home-shell {
          color: #eef3fb;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .glass-card {
          background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.28);
        }
        .hero-card {
          position: relative;
          overflow: hidden;
          min-height: 520px;
          padding: 36px;
        }
        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(120deg, rgba(3, 7, 18, 0.9) 18%, rgba(3, 7, 18, 0.52) 58%, rgba(3, 7, 18, 0.85) 100%),
            radial-gradient(circle at top right, rgba(247, 147, 26, 0.22), transparent 34%);
        }
        .hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(340px, 0.8fr);
          gap: 28px;
          align-items: end;
          min-height: 448px;
        }
        .hero-copy {
          max-width: 640px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          color: #f6b353;
          width: fit-content;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.7px;
          text-transform: uppercase;
        }
        .hero-title {
          font-size: clamp(34px, 5vw, 62px);
          line-height: 0.98;
          letter-spacing: -0.04em;
          font-weight: 800;
          max-width: 10ch;
        }
        .hero-title span {
          color: #f6b353;
        }
        .hero-text {
          color: #b5c0d0;
          font-size: 16px;
          line-height: 1.7;
          max-width: 56ch;
        }
        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }
        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 48px;
          padding: 0 20px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 700;
          transition: transform 0.2s ease;
        }
        .hero-btn:hover {
          transform: translateY(-2px);
        }
        .hero-btn.primary {
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
          box-shadow: 0 16px 36px rgba(247, 147, 26, 0.28);
        }
        .hero-btn.secondary {
          background: rgba(255, 255, 255, 0.08);
          color: #eef3fb;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .hero-aside {
          display: grid;
          gap: 16px;
        }
        .market-hero-card {
          padding: 22px;
          border-radius: 24px;
          background: linear-gradient(180deg, rgba(12, 17, 25, 0.88), rgba(7, 11, 17, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        .market-hero-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 18px;
        }
        .market-hero-meta {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .market-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          font-size: 24px;
          font-weight: 800;
        }
        .market-hero-label {
          color: #8fa2ba;
          font-size: 12px;
          margin-top: 4px;
        }
        .market-status {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${marketStatus === 'live' ? '#0ecb81' : '#f6b353'};
        }
        .market-hero-price {
          font-family: 'JetBrains Mono', monospace;
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 800;
          margin-bottom: 10px;
        }
        .market-hero-price.loading {
          color: #8fa2ba;
        }
        .market-hero-change {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 18px;
        }
        .market-hero-change.up {
          background: rgba(14, 203, 129, 0.14);
          color: #0ecb81;
        }
        .market-hero-change.down {
          background: rgba(246, 70, 93, 0.14);
          color: #f6465d;
        }
        .market-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }
        .market-stat {
          padding: 14px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }
        .market-stat-label {
          color: #7f8ea3;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 6px;
        }
        .market-stat-value {
          color: #eef3fb;
          font-weight: 700;
          font-size: 15px;
          font-family: 'JetBrains Mono', monospace;
        }
        .quick-grid,
        .story-grid,
        .timeline-grid {
          display: grid;
          gap: 16px;
        }
        .quick-grid {
          grid-template-columns: repeat(4, 1fr);
        }
        .quick-card {
          padding: 20px;
        }
        .quick-icon {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          background: rgba(247, 147, 26, 0.12);
          color: #f6b353;
        }
        .quick-value {
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 6px;
          letter-spacing: -0.03em;
        }
        .quick-label {
          font-size: 13px;
          color: #90a0b6;
        }
        .section-card {
          padding: 24px;
        }
        .section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 18px;
        }
        .section-title {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .section-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #7cb0ff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }
        .story-marquee {
          overflow: hidden;
          position: relative;
        }
        .story-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: story-scroll 34s linear infinite;
        }
        .story-track:hover {
          animation-play-state: paused;
        }
        .story-card {
          overflow: hidden;
          border-radius: 22px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          min-width: 320px;
          max-width: 320px;
        }
        .story-image {
          width: 100%;
          height: 172px;
          object-fit: cover;
        }
        @keyframes story-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .story-copy {
          padding: 18px;
        }
        .story-meta {
          color: #f6b353;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }
        .story-title {
          font-size: 18px;
          line-height: 1.35;
          font-weight: 700;
          margin-bottom: 14px;
        }
        .story-cta {
          color: #7cb0ff;
          font-size: 13px;
          font-weight: 700;
          text-decoration: none;
        }
        .market-table {
          background: linear-gradient(180deg, rgba(18, 22, 31, 0.98), rgba(14, 18, 26, 0.96));
          color: #eef3fb;
          border-radius: 26px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.26);
        }
        .market-filters {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          scrollbar-width: none;
        }
        .market-filters::-webkit-scrollbar {
          display: none;
        }
        .market-filterbar {
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.01);
        }
        .market-filter-chip {
          flex: 0 0 auto;
          min-height: 46px;
          padding: 0 18px;
          border: 0;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.06);
          color: #99a6b8;
          font-size: 14px;
          font-weight: 500;
        }
        .market-filter-chip.active {
          background: rgba(243, 162, 39, 0.14);
          color: #f3a227;
          font-weight: 700;
        }
        .market-list-head,
        .market-list-row {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(220px, 0.8fr);
          gap: 16px;
          align-items: center;
          padding: 18px;
        }
        .market-list-head {
          color: #8f9cb0;
          font-size: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .market-list-head-right {
          text-align: right;
        }
        .market-list-row {
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .market-list-row:last-child {
          border-bottom: 0;
        }
        .market-pair {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }
        .market-star {
          color: #f3a227;
          flex: 0 0 auto;
        }
        .market-star.off {
          color: #667386;
        }
        .market-coin {
          width: 46px;
          height: 46px;
          border-radius: 999px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          font-weight: 800;
          flex: 0 0 auto;
        }
        .market-pair-copy {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          min-width: 0;
        }
        .market-pair-copy strong {
          font-size: 18px;
          letter-spacing: -0.02em;
          color: #f2f6fc;
        }
        .market-pair-copy strong span {
          color: #8f9cb0;
          font-weight: 600;
        }
        .market-tag {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 30px;
          padding: 0 10px;
          border-radius: 8px;
          background: rgba(243, 162, 39, 0.14);
          color: #f3a227;
          font-size: 12px;
          font-weight: 700;
        }
        .market-price-block {
          text-align: right;
        }
        .market-price-main {
          color: #f2f6fc;
          font-size: 18px;
          font-weight: 700;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: -0.02em;
        }
        .market-price-change {
          margin-top: 4px;
          font-size: 13px;
          font-weight: 700;
        }
        .timeline-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .timeline-card {
          padding: 22px;
        }
        .timeline-year {
          color: #f6b353;
          font-weight: 800;
          font-size: 28px;
          margin-bottom: 10px;
        }
        .timeline-title {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }
        .timeline-text {
          color: #9ca9bc;
          line-height: 1.65;
          font-size: 14px;
        }
        .leaderboard-list {
          display: grid;
          gap: 12px;
        }
        .reviews-marquee {
          overflow: hidden;
          position: relative;
        }
        .reviews-track {
          display: flex;
          gap: 16px;
          width: max-content;
          animation: reviews-scroll 46s linear infinite;
        }
        .reviews-track:hover {
          animation-play-state: paused;
        }
        .review-card {
          padding: 22px;
          min-width: 320px;
          max-width: 320px;
        }
        .review-head {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }
        .review-head img {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          object-fit: cover;
        }
        .review-role {
          color: #8fa2ba;
          font-size: 12px;
        }
        .review-text {
          color: #c7d1de;
          line-height: 1.75;
          font-size: 14px;
          margin-bottom: 14px;
        }
        .review-profit {
          color: #0ecb81;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
        }
        @keyframes reviews-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .site-footer {
          display: grid;
          grid-template-columns: 1.35fr repeat(3, 1fr);
          gap: 28px;
          padding: 10px 4px 0;
          margin-top: 2px;
        }
        .footer-brand {
          display: flex;
          align-items: flex-start;
          gap: 14px;
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
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 10px;
        }
        .footer-brand p,
        .footer-link,
        .footer-bottom {
          color: #9aa7b9;
          line-height: 1.7;
          font-size: 14px;
        }
        .footer-title {
          font-size: 12px;
          color: #f6b353;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
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
          color: #eef3fb;
        }
        .footer-bottom {
          grid-column: 1 / -1;
          padding-top: 8px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .leaderboard-row {
          display: grid;
          grid-template-columns: 64px minmax(0, 1.2fr) 1fr 1fr;
          gap: 12px;
          align-items: center;
          padding: 14px 18px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.03);
        }
        .leaderboard-rank {
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(247, 147, 26, 0.16);
          color: #f6b353;
          font-weight: 800;
        }
        .leaderboard-user {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
        }
        .leaderboard-avatar {
          width: 42px;
          height: 42px;
          border-radius: 14px;
        }
        .leaderboard-user strong {
          display: block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .leaderboard-user span {
          color: #8fa2ba;
          font-size: 12px;
        }
        @media (max-width: 1180px) {
          .hero-grid {
            grid-template-columns: 1fr;
            align-items: start;
          }
          .quick-grid,
          .timeline-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .site-footer {
            grid-template-columns: 1fr 1fr;
          }
        }
        @media (max-width: 820px) {
          .hero-card {
            min-height: unset;
            padding: 22px;
          }
          .hero-text {
            font-size: 15px;
          }
          .market-stats,
          .quick-grid,
          .timeline-grid,
          .site-footer {
            grid-template-columns: 1fr;
          }
          .review-card {
            min-width: 280px;
            max-width: 280px;
          }
          .story-card {
            min-width: 280px;
            max-width: 280px;
          }
          .market-hero-card,
          .section-card {
            padding: 18px;
          }
          .market-table,
          .leaderboard-list,
          .timeline-grid {
            gap: 16px;
          }
          .market-table {
            border-radius: 22px;
          }
          .market-filterbar,
          .market-list-head,
          .market-list-row {
            padding-left: 14px;
            padding-right: 14px;
          }
          .market-filter-chip {
            min-height: 40px;
            padding: 0 14px;
            font-size: 13px;
          }
          .market-list-head,
          .market-list-row {
            grid-template-columns: minmax(0, 1fr) minmax(128px, auto);
            gap: 10px;
          }
          .market-pair {
            gap: 10px;
          }
          .market-coin {
            width: 40px;
            height: 40px;
            font-size: 19px;
          }
          .market-pair-copy strong {
            font-size: 15px;
          }
          .market-tag {
            min-height: 26px;
            padding: 0 8px;
            font-size: 11px;
          }
          .market-price-main {
            font-size: 16px;
          }
          .market-price-change {
            font-size: 12px;
          }
          .leaderboard-list {
            gap: 10px;
            overflow-x: auto;
            padding-bottom: 4px;
          }
          .leaderboard-list::-webkit-scrollbar {
            display: none;
          }
          .leaderboard-row {
            min-width: 100%;
            width: 100%;
            grid-template-columns: 40px minmax(0, 1fr) minmax(78px, auto) minmax(56px, auto);
            gap: 8px;
            padding: 12px;
            border-radius: 16px;
            box-sizing: border-box;
          }
          .leaderboard-rank {
            width: 30px;
            height: 30px;
            border-radius: 12px;
            font-size: 12px;
          }
          .leaderboard-avatar {
            width: 34px;
            height: 34px;
            border-radius: 12px;
          }
          .leaderboard-user {
            gap: 8px;
          }
          .leaderboard-user strong {
            font-size: 12px;
          }
          .leaderboard-user span,
          .market-cell-label {
            font-size: 10px;
          }
          .market-cell-value {
            font-size: 11px;
          }
          .timeline-card {
            padding: 18px;
            margin-right: 0;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.07);
            box-shadow: none;
          }
          .timeline-year {
            font-size: 22px;
            margin-bottom: 6px;
          }
          .timeline-title {
            font-size: 16px;
          }
          .timeline-text {
            font-size: 13px;
            max-width: 30ch;
          }
        }
      `}</style>

      <section className="hero-card glass-card">
        <video className="hero-video" src={heroVideo} autoPlay muted loop playsInline />
        <div className="hero-overlay" />
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">
              <ShieldCheck size={14} />
              Professional BTC demo workspace
            </div>
            <h1 className="hero-title">
              Trade <span>Bitcoin</span> with a cleaner pro layout on every screen.
            </h1>
            <p className="hero-text">
              Live BTC pricing, mobile-first navigation, dedicated trade and wallet flows, and a home screen that feels like a real market desk instead of one stretched page.
            </p>
            <div className="hero-actions">
              <Link to="/trade" className="hero-btn primary">
                Open Trade Desk
                <ArrowRight size={18} />
              </Link>
              <Link to="/finance" className="hero-btn secondary">Go to Deposit</Link>
            </div>
          </div>

          <div className="hero-aside">
            <div className="market-hero-card">
              <div className="market-hero-header">
                <div className="market-hero-meta">
                  <div className="market-icon">₿</div>
                  <div>
                    <strong>Bitcoin / USD</strong>
                    <div className="market-hero-label">Real-time market sync</div>
                  </div>
                </div>
                <div className="market-status">{marketReady ? marketStatus : 'loading'}</div>
              </div>

              <div className={`market-hero-price ${marketReady ? '' : 'loading'}`}>
                {marketReady
                  ? `$${btcCard.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
                  : 'Loading...'}
              </div>
              {marketReady && (
                <div className={`market-hero-change ${btcCard.change >= 0 ? 'up' : 'down'}`}>
                  {btcCard.change >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                  {btcCard.change >= 0 ? '+' : ''}{btcCard.change.toFixed(2)}%
                </div>
              )}

              <div className="market-stats">
                <div className="market-stat">
                  <div className="market-stat-label">24h High</div>
                  <div className="market-stat-value">${btcCard.high.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                </div>
                <div className="market-stat">
                  <div className="market-stat-label">24h Low</div>
                  <div className="market-stat-value">${btcCard.low.toLocaleString(undefined, { maximumFractionDigits: 2 })}</div>
                </div>
                <div className="market-stat">
                  <div className="market-stat-label">24h Volume</div>
                  <div className="market-stat-value">{btcCard.volume.toLocaleString(undefined, { maximumFractionDigits: 0 })} BTC</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quick-grid">
        <div className="quick-card glass-card">
          <div className="quick-icon"><Wallet size={22} /></div>
          <div className="quick-value">$2.4B</div>
          <div className="quick-label">Spot and derivatives volume across the desk</div>
        </div>
        <div className="quick-card glass-card">
          <div className="quick-icon"><BarChart2 size={22} /></div>
          <div className="quick-value">1m / 5m / 1h / 1D</div>
          <div className="quick-label">Timeframes available on the BTC trade chart</div>
        </div>
        <div className="quick-card glass-card">
          <div className="quick-icon"><Globe2 size={22} /></div>
          <div className="quick-value">156</div>
          <div className="quick-label">Countries simulated for the global trading audience</div>
        </div>
        <div className="quick-card glass-card">
          <div className="quick-icon"><Clock3 size={22} /></div>
          <div className="quick-value">24 / 7</div>
          <div className="quick-label">Always-on BTC market monitoring and wallet access</div>
        </div>
      </section>

      <section className="section-card glass-card">
        <div className="section-head">
          <div className="section-title">BTC news on the current home screen</div>
          <Link to="/news" className="section-link">
            More news
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="story-marquee">
          <div className="story-track">
            {[...homeNews, ...homeNews].map((item, index) => (
              <article key={`${item.id}-${index}`} className="story-card">
                <img src={item.image} alt={item.title} className="story-image" />
                <div className="story-copy">
                  <div className="story-meta">{item.meta}</div>
                  <div className="story-title">{item.title}</div>
                  <Link to="/news" className="story-cta">Read market brief</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-card glass-card">
        <div className="section-head">
          <div className="section-title">Market board</div>
          <Link to="/trade" className="section-link">
            Trade BTC
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="market-table">
          <div style={{ width: '100%' }}>
            <div className="market-filterbar">
              <div className="market-filters">
                {marketFilters.map((filter, index) => (
                  <button key={filter} type="button" className={`market-filter-chip ${index === 0 ? 'active' : ''}`}>
                    {filter}
                  </button>
                ))}
              </div>
            </div>
            <div className="market-list-head">
              <div>Trading Pairs</div>
              <div className="market-list-head-right">Last Traded Price/24H Change %</div>
            </div>
          {[btcCard, ...marketRows].map((coin) => (
            <div key={coin.symbol} className="market-list-row">
              <div className="market-pair">
                <Star
                  size={18}
                  fill={marketVisuals[coin.symbol]?.favorite ? 'currentColor' : 'none'}
                  className={`market-star ${marketVisuals[coin.symbol]?.favorite ? '' : 'off'}`}
                />
                <div
                  className="market-coin"
                  style={{
                    background: marketVisuals[coin.symbol]?.bg || '#e7eefc',
                    color: marketVisuals[coin.symbol]?.color || '#2b5db6',
                  }}
                >
                  {marketVisuals[coin.symbol]?.icon || coin.symbol.charAt(0)}
                </div>
                <div className="market-pair-copy">
                  <strong>{coin.symbol}<span>/USDT</span></strong>
                  {(marketVisuals[coin.symbol]?.tags || []).map((tag) => (
                    <span key={`${coin.symbol}-${tag}`} className="market-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="market-price-block">
                <div className="market-price-main">
                  {coin.price.toLocaleString(undefined, { minimumFractionDigits: coin.price > 1 ? 2 : 4, maximumFractionDigits: coin.price > 1 ? 2 : 4 })}
                </div>
                <div className="market-price-change" style={{ color: coin.change > 0 ? '#0ecb81' : coin.change < 0 ? '#f6465d' : '#9aa3b1' }}>
                  {coin.change > 0 ? '+' : ''}{coin.change.toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>

      <section className="timeline-grid">
        {historyMoments.map((item) => (
          <div key={item.year} className="timeline-card glass-card">
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-title">{item.title}</div>
            <div className="timeline-text">{item.text}</div>
          </div>
        ))}
      </section>

      <section className="section-card glass-card">
        <div className="section-head">
          <div className="section-title">Top BTC traders</div>
          <div className="section-link">
            <Newspaper size={15} />
            Monthly ranking
          </div>
        </div>
        <div className="leaderboard-list">
          {mockLeaderboard.slice(0, 5).map((user) => (
            <div key={user.rank} className="leaderboard-row">
              <div className="leaderboard-rank">{user.rank}</div>
              <div className="leaderboard-user">
                <img src={user.avatar} alt={user.name} className="leaderboard-avatar" />
                <div>
                  <strong>{user.name}</strong>
                  <span>{user.trades} trades</span>
                </div>
              </div>
              <div>
                <div className="market-cell-label">Profit</div>
                <div className="market-cell-value" style={{ color: '#0ecb81' }}>${user.profit.toLocaleString()}</div>
              </div>
              <div>
                <div className="market-cell-label">Win rate</div>
                <div className="market-cell-value">{user.winRate}%</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-card glass-card">
        <div className="section-head">
          <div className="section-title">What traders are saying</div>
        </div>
        <div className="reviews-marquee">
          <div className="reviews-track">
            {[...reviews, ...reviews].map((review, index) => (
              <article key={`${review.name}-${index}`} className="review-card glass-card">
                <div className="review-head">
                  <img src={review.avatar} alt={review.name} />
                  <div>
                    <strong>{review.name}</strong>
                    <div className="review-role">{review.role}</div>
                  </div>
                </div>
                <div className="review-text">{review.text}</div>
                <div className="review-profit">{review.profit}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-brand">
          <div className="footer-coin">₿</div>
          <div>
            <h3>BTCTradePro</h3>
            <p>The world's leading Bitcoin trading platform with advanced tools and institutional-grade security.</p>
          </div>
        </div>
        <div>
          <div className="footer-title">Products</div>
          <div className="footer-links">
            <Link to="/trade" className="footer-link">Spot Trading</Link>
            <Link to="/trade" className="footer-link">Futures</Link>
            <Link to="/finance" className="footer-link">Staking</Link>
          </div>
        </div>
        <div>
          <div className="footer-title">Company</div>
          <div className="footer-links">
            <a href="#" className="footer-link">About Us</a>
            <a href="#" className="footer-link">Careers</a>
            <a href="#" className="footer-link">Press</a>
          </div>
        </div>
        <div>
          <div className="footer-title">Support</div>
          <div className="footer-links">
            <a href="#" className="footer-link">Telegram</a>
            <Link to="/support" className="footer-link">Help Center</Link>
            <a href="#" className="footer-link">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">2026 BTCTradePro. All rights reserved.</div>
      </footer>
    </div>
  );
}
