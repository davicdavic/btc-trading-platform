import { CheckCircle2, Clock3, ShieldCheck, UserRound, Wallet2, XCircle } from 'lucide-react';
import { useApp } from '../App';
import { formatNumber } from '../utils/mockData';

function formatTimestamp(value?: string) {
  if (!value) return 'Not available';
  return new Date(value).toLocaleString();
}

export default function AdminPage() {
  const {
    users,
    walletRequests,
    kycRequests,
    approveTransaction,
    rejectTransaction,
    approveVerification,
    rejectVerification,
  } = useApp();

  const registeredUsers = users
    .filter((entry) => entry.role !== 'admin')
    .sort((a, b) => new Date(b.joinedDate).getTime() - new Date(a.joinedDate).getTime());
  const pendingWalletRequests = walletRequests
    .filter((entry) => entry.status === 'pending')
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  const pendingKycRequests = kycRequests
    .filter((entry) => entry.status === 'pending')
    .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
  const reviewedWalletRequests = walletRequests
    .filter((entry) => entry.status !== 'pending')
    .sort((a, b) => new Date(b.reviewedAt || b.timestamp).getTime() - new Date(a.reviewedAt || a.timestamp).getTime())
    .slice(0, 10);
  const reviewedKycRequests = kycRequests
    .filter((entry) => entry.status !== 'pending')
    .sort((a, b) => new Date(b.reviewedAt || b.submittedAt).getTime() - new Date(a.reviewedAt || a.submittedAt).getTime())
    .slice(0, 10);

  const approvedUsers = registeredUsers.filter((entry) => entry.verificationStatus === 'approved').length;
  const pendingUsers = registeredUsers.filter((entry) => entry.verificationStatus === 'pending').length;
  const totalWalletVolume = pendingWalletRequests.reduce((sum, entry) => sum + entry.amount, 0);

  return (
    <div className="admin-page">
      <style>{`
        .admin-page {
          display: grid;
          gap: 22px;
          color: #edf2fb;
        }
        .admin-card {
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            radial-gradient(circle at top right, rgba(52, 120, 246, 0.12), transparent 24%),
            linear-gradient(180deg, rgba(15, 19, 28, 0.96), rgba(11, 16, 24, 0.94));
          box-shadow: 0 28px 90px rgba(0, 0, 0, 0.26);
        }
        .hero {
          padding: 26px;
          display: grid;
          gap: 20px;
        }
        .hero-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }
        .hero-title {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .hero-icon {
          width: 56px;
          height: 56px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(52, 120, 246, 0.14);
          color: #7fb0ff;
        }
        .hero h1 {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.04em;
          margin-bottom: 6px;
        }
        .hero p {
          max-width: 700px;
          color: #90a0b7;
          line-height: 1.7;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 42px;
          padding: 0 16px;
          border-radius: 999px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: #d8e1ef;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .hero-badges {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }
        .stat {
          padding: 20px;
          border-radius: 24px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
        }
        .stat-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          color: #95a5bc;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .stat strong {
          display: block;
          margin-top: 14px;
          font-size: 30px;
          font-weight: 800;
        }
        .stat span {
          display: block;
          margin-top: 8px;
          color: #8a9ab2;
          font-size: 13px;
        }
        .section-card {
          padding: 24px;
        }
        .section-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          margin-bottom: 18px;
          flex-wrap: wrap;
        }
        .section-head h2 {
          font-size: 24px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .section-head p {
          color: #8fa2ba;
          font-size: 14px;
        }
        .section-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #b6c6db;
          font-size: 12px;
          font-weight: 700;
        }
        .queue-list,
        .history-list,
        .user-list {
          display: grid;
          gap: 12px;
        }
        .queue-item,
        .history-item,
        .user-item {
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.05);
          background: rgba(255,255,255,0.03);
          padding: 18px;
        }
        .queue-item {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr) auto;
          gap: 16px;
          align-items: center;
        }
        .queue-meta strong,
        .history-item strong,
        .user-item strong {
          display: block;
          font-size: 16px;
          font-weight: 800;
        }
        .queue-meta small,
        .history-meta,
        .user-meta {
          display: block;
          margin-top: 5px;
          color: #8fa2ba;
          line-height: 1.6;
        }
        .queue-side {
          display: grid;
          gap: 6px;
        }
        .queue-side span {
          color: #8fa2ba;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .queue-side strong {
          font-size: 20px;
          font-weight: 800;
        }
        .queue-actions {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: flex-end;
        }
        .action-btn {
          min-height: 42px;
          padding: 0 16px;
          border: none;
          border-radius: 14px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 800;
        }
        .approve-btn {
          background: rgba(14, 203, 129, 0.16);
          color: #0ecb81;
        }
        .reject-btn {
          background: rgba(246, 70, 93, 0.16);
          color: #f6465d;
        }
        .two-col {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, .8fr);
          gap: 22px;
        }
        .user-item {
          display: grid;
          grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr) minmax(0, .8fr);
          gap: 16px;
          align-items: center;
        }
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 30px;
          padding: 0 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
        }
        .status-pill.pending {
          background: rgba(247, 147, 26, 0.14);
          color: #f6b353;
        }
        .status-pill.approved,
        .status-pill.completed {
          background: rgba(14, 203, 129, 0.14);
          color: #0ecb81;
        }
        .status-pill.rejected,
        .status-pill.unverified {
          background: rgba(246, 70, 93, 0.14);
          color: #f6465d;
        }
        .docs {
          display: grid;
          gap: 8px;
          margin-top: 10px;
        }
        .doc-line {
          color: #8fa2ba;
          font-size: 12px;
          line-height: 1.6;
        }
        .history-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .empty-state {
          border-radius: 20px;
          border: 1px dashed rgba(255,255,255,0.1);
          padding: 20px;
          color: #8fa2ba;
          background: rgba(255,255,255,0.02);
        }
        @media (max-width: 1180px) {
          .stats-grid,
          .history-grid,
          .two-col,
          .queue-item,
          .user-item {
            grid-template-columns: 1fr;
          }
          .queue-actions {
            justify-content: flex-start;
          }
        }
      `}</style>

      <section className="admin-card hero">
        <div className="hero-top">
          <div className="hero-title">
            <div className="hero-icon"><ShieldCheck size={26} /></div>
            <div>
              <h1>Admin Operations</h1>
              <p>Separate back-office review center for users, deposits, withdrawals, and identity checks. Every queue is rebuilt from live app data so pending requests do not get lost.</p>
            </div>
          </div>
          <div className="hero-badges">
            <div className="hero-badge">
              <UserRound size={14} />
              <span>{registeredUsers.length} website users</span>
            </div>
            <div className="hero-badge">
              <Clock3 size={14} />
              <span>{pendingWalletRequests.length + pendingKycRequests.length} open reviews</span>
            </div>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat">
            <div className="stat-head">
              <span>Total Website Users</span>
              <UserRound size={18} />
            </div>
            <strong>{registeredUsers.length}</strong>
            <span>Every created account is counted here for the admin team</span>
          </div>
          <div className="stat">
            <div className="stat-head">
              <span>Pending Wallet</span>
              <Wallet2 size={18} />
            </div>
            <strong>{pendingWalletRequests.length}</strong>
            <span>${formatNumber(totalWalletVolume)} waiting for review</span>
          </div>
          <div className="stat">
            <div className="stat-head">
              <span>Pending KYC</span>
              <ShieldCheck size={18} />
            </div>
            <strong>{pendingKycRequests.length}</strong>
            <span>{pendingUsers} users currently waiting on approval</span>
          </div>
          <div className="stat">
            <div className="stat-head">
              <span>Verified Users</span>
              <CheckCircle2 size={18} />
            </div>
            <strong>{approvedUsers}</strong>
            <span>Accounts already approved by admin review</span>
          </div>
        </div>
      </section>

      <section className="two-col">
        <section className="admin-card section-card">
          <div className="section-head">
            <div>
              <h2>Pending Wallet Requests</h2>
              <p>Deposits and withdrawals awaiting manual admin action.</p>
            </div>
            <div className="section-tag">
              <Wallet2 size={14} />
              <span>{pendingWalletRequests.length} active</span>
            </div>
          </div>
          <div className="queue-list">
            {pendingWalletRequests.map((entry) => (
              <article key={entry.id} className="queue-item">
                <div className="queue-meta">
                  <strong>{entry.userName}</strong>
                  <small>{entry.userEmail}</small>
                  <small>{entry.type === 'withdraw' ? `Withdraw to ${entry.withdrawAddress || 'No wallet address'}` : `Deposit wallet ${entry.walletAddress || 'Not supplied'}`}</small>
                  <small>Submitted {formatTimestamp(entry.timestamp)}</small>
                </div>
                <div className="queue-side">
                  <span>{entry.type}</span>
                  <strong>${formatNumber(entry.amount)}</strong>
                  <small>{entry.btcAmount ? `${entry.btcAmount.toFixed(8)} BTC` : 'USD request only'}</small>
                </div>
                <div className="queue-actions">
                  <button className="action-btn approve-btn" onClick={() => approveTransaction(entry.id)}>
                    <CheckCircle2 size={16} />
                    <span>Approve</span>
                  </button>
                  <button className="action-btn reject-btn" onClick={() => rejectTransaction(entry.id)}>
                    <XCircle size={16} />
                    <span>Reject</span>
                  </button>
                </div>
              </article>
            ))}
            {pendingWalletRequests.length === 0 && <div className="empty-state">No wallet requests are waiting right now.</div>}
          </div>
        </section>

        <section className="admin-card section-card">
          <div className="section-head">
            <div>
              <h2>Pending KYC Reviews</h2>
              <p>Identity requests sent from user profiles for verification.</p>
            </div>
            <div className="section-tag">
              <ShieldCheck size={14} />
              <span>{pendingKycRequests.length} active</span>
            </div>
          </div>
          <div className="queue-list">
            {pendingKycRequests.map((entry) => (
              <article key={entry.id} className="queue-item">
                <div className="queue-meta">
                  <strong>{entry.fullName}</strong>
                  <small>{entry.userEmail}</small>
                  <small>{entry.phone} • {entry.country}, {entry.city} {entry.postCode}</small>
                  <small>{entry.job} • {entry.documentType.replace('_', ' ')}</small>
                  <div className="docs">
                    <div className="doc-line">Front document: {entry.frontImage || 'Not uploaded'}</div>
                    <div className="doc-line">Back document: {entry.backImage || 'Not uploaded'}</div>
                  </div>
                </div>
                <div className="queue-side">
                  <span>KYC Request</span>
                  <strong>Pending</strong>
                  <small>Submitted {formatTimestamp(entry.submittedAt)}</small>
                </div>
                <div className="queue-actions">
                  <button className="action-btn approve-btn" onClick={() => approveVerification(entry.userEmail)}>
                    <CheckCircle2 size={16} />
                    <span>Approve</span>
                  </button>
                  <button className="action-btn reject-btn" onClick={() => rejectVerification(entry.userEmail)}>
                    <XCircle size={16} />
                    <span>Reject</span>
                  </button>
                </div>
              </article>
            ))}
            {pendingKycRequests.length === 0 && <div className="empty-state">No KYC reviews are waiting right now.</div>}
          </div>
        </section>
      </section>

      <section className="admin-card section-card">
        <div className="section-head">
          <div>
            <h2>Registered Website Users</h2>
            <p>Every account created on the website appears here with verification status, timezone, and balances.</p>
          </div>
          <div className="section-tag">
            <UserRound size={14} />
            <span>{registeredUsers.length} accounts</span>
          </div>
        </div>
        <div className="user-list">
          {registeredUsers.map((entry) => (
            <article key={entry.email} className="user-item">
              <div>
                <strong>{entry.name}</strong>
                <div className="user-meta">{entry.email}</div>
                <div className="user-meta">Joined {entry.joinedDate}</div>
              </div>
              <div>
                <div className={`status-pill ${entry.verificationStatus || 'unverified'}`}>{entry.verificationStatus || 'unverified'}</div>
                <div className="user-meta">{entry.country || 'Country not set'} • {entry.timezone || 'Timezone not set'}</div>
              </div>
              <div>
                <div className="user-meta">USD ${formatNumber(entry.usdBalance)}</div>
                <div className="user-meta">BTC {(entry.btcBalance || 0).toFixed(6)}</div>
              </div>
            </article>
          ))}
          {registeredUsers.length === 0 && <div className="empty-state">No registered users found.</div>}
        </div>
      </section>

      <section className="history-grid">
        <section className="admin-card section-card">
          <div className="section-head">
            <div>
              <h2>Wallet Review History</h2>
              <p>Latest deposit and withdrawal decisions made by admin.</p>
            </div>
          </div>
          <div className="history-list">
            {reviewedWalletRequests.map((entry) => (
              <article key={entry.id} className="history-item">
                <strong>{entry.userName}</strong>
                <div className={`status-pill ${entry.status}`}>{entry.status}</div>
                <div className="history-meta">{entry.userEmail}</div>
                <div className="history-meta">{entry.type} • ${formatNumber(entry.amount)}</div>
                <div className="history-meta">{entry.btcAmount ? `${entry.btcAmount.toFixed(8)} BTC` : 'No BTC amount stored'}</div>
                <div className="history-meta">Reviewed {formatTimestamp(entry.reviewedAt || entry.timestamp)}{entry.reviewedBy ? ` • ${entry.reviewedBy}` : ''}</div>
              </article>
            ))}
            {reviewedWalletRequests.length === 0 && <div className="empty-state">No wallet reviews have been completed yet.</div>}
          </div>
        </section>

        <section className="admin-card section-card">
          <div className="section-head">
            <div>
              <h2>KYC Review History</h2>
              <p>Latest identity approval and rejection activity.</p>
            </div>
          </div>
          <div className="history-list">
            {reviewedKycRequests.map((entry) => (
              <article key={entry.id} className="history-item">
                <strong>{entry.fullName}</strong>
                <div className={`status-pill ${entry.status}`}>{entry.status}</div>
                <div className="history-meta">{entry.userEmail}</div>
                <div className="history-meta">{entry.country}, {entry.city} • {entry.documentType.replace('_', ' ')}</div>
                <div className="history-meta">Reviewed {formatTimestamp(entry.reviewedAt || entry.submittedAt)}{entry.reviewedBy ? ` • ${entry.reviewedBy}` : ''}</div>
              </article>
            ))}
            {reviewedKycRequests.length === 0 && <div className="empty-state">No KYC reviews have been completed yet.</div>}
          </div>
        </section>
      </section>
    </div>
  );
}
