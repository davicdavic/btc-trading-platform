import { useMemo, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { ArrowDownCircle, ArrowUpCircle, Bitcoin, Check, Copy, Lock, Wallet } from 'lucide-react';
import { useAuth, useApp } from '../App';
import type { Transaction } from '../types';
import { DEPOSIT_WALLET, formatNumber } from '../utils/mockData';

export default function FinancePage() {
  const { user, updateUser } = useAuth();
  const { btcPrice, transactions, addTransaction } = useApp();

  const [activeTab, setActiveTab] = useState<'deposit' | 'withdraw' | 'stake'>('deposit');
  const [depositAmount, setDepositAmount] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawAddress, setWithdrawAddress] = useState('');
  const [stakeAmount, setStakeAmount] = useState('');
  const [depositReady, setDepositReady] = useState(false);
  const [depositSubmitted, setDepositSubmitted] = useState(false);
  const [withdrawSubmitted, setWithdrawSubmitted] = useState(false);
  const [stakeSubmitted, setStakeSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const userTransactions = useMemo(
    () => transactions.filter((entry) => entry.userEmail === user?.email).slice(0, 8),
    [transactions, user?.email],
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(DEPOSIT_WALLET);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  const requestDeposit = () => {
    if (!depositAmount || parseFloat(depositAmount) <= 0) return;
    setDepositReady(true);
    setDepositSubmitted(false);
  };

  const submitDeposit = () => {
    if (!user || !depositAmount) return;
    const btcAmount = parseFloat(depositAmount);
    const amount = btcAmount * btcPrice;
    const nextTransaction: Transaction = {
      id: `tx-${Date.now()}`,
      type: 'deposit',
      amount,
      btcAmount,
      walletAddress: DEPOSIT_WALLET,
      userEmail: user.email,
      userName: user.name,
      status: 'pending',
      timestamp: new Date().toISOString(),
    };
    addTransaction(nextTransaction);
    setDepositSubmitted(true);
    setDepositAmount('');
    setDepositReady(false);
  };

  const submitWithdraw = () => {
    if (!user || !withdrawAmount) return;
    const amount = parseFloat(withdrawAmount);
    if (amount > (user.usdBalance || 0)) {
      alert('Insufficient USD balance');
      return;
    }
    addTransaction({
      id: `tx-${Date.now()}`,
      type: 'withdraw',
      amount,
      btcAmount: amount / btcPrice,
      withdrawAddress,
      userEmail: user.email,
      userName: user.name,
      status: 'pending',
      timestamp: new Date().toISOString(),
    });
    setWithdrawSubmitted(true);
    setWithdrawAmount('');
    setWithdrawAddress('');
  };

  const submitStake = () => {
    if (!user || !stakeAmount) return;
    const amount = parseFloat(stakeAmount);
    if (amount > user.btcBalance) {
      alert('Insufficient BTC balance');
      return;
    }
    updateUser({
      btcBalance: user.btcBalance - amount,
      stakeAmount: (user.stakeAmount || 0) + amount,
    });
    addTransaction({
      id: `tx-${Date.now()}`,
      type: 'stake',
      amount: amount * btcPrice,
      btcAmount: amount,
      userEmail: user.email,
      userName: user.name,
      status: 'completed',
      timestamp: new Date().toISOString(),
    });
    setStakeSubmitted(true);
    setStakeAmount('');
  };

  return (
    <div className="finance-shell">
      <style>{`
        .finance-shell {
          max-width: 1220px;
          margin: 0 auto;
          color: #eef3fb;
          display: grid;
          gap: 22px;
        }
        .card {
          background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
        }
        .page-head {
          padding: 26px;
        }
        .page-head h1 {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin-bottom: 8px;
        }
        .page-head p {
          color: #90a0b6;
        }
        .balance-grid,
        .content-grid {
          display: grid;
          gap: 18px;
        }
        .balance-grid {
          grid-template-columns: repeat(3, 1fr);
        }
        .balance-card {
          padding: 22px;
        }
        .balance-icon {
          width: 48px;
          height: 48px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 14px;
          background: rgba(247, 147, 26, 0.12);
          color: #f7931a;
        }
        .balance-card h3 {
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #8fa2ba;
          margin-bottom: 8px;
        }
        .balance-card strong {
          font-size: 30px;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 800;
        }
        .balance-card p {
          color: #90a0b6;
          margin-top: 8px;
          font-size: 13px;
        }
        .content-grid {
          grid-template-columns: minmax(0, 1fr) 380px;
        }
        .wallet-main {
          padding: 24px;
        }
        .tab-row {
          display: flex;
          gap: 10px;
          margin-bottom: 22px;
          flex-wrap: wrap;
        }
        .tab-btn {
          min-height: 42px;
          padding: 0 16px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.03);
          color: #8fa2ba;
          font-weight: 700;
        }
        .tab-btn.active {
          background: rgba(247, 147, 26, 0.16);
          border-color: rgba(247, 147, 26, 0.36);
          color: #f6b353;
        }
        .flow-card {
          padding: 22px;
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.03);
        }
        .flow-card h2 {
          font-size: 22px;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .flow-card p {
          color: #90a0b6;
          line-height: 1.7;
        }
        .field {
          margin-top: 18px;
        }
        .field label {
          display: block;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #8fa2ba;
          margin-bottom: 8px;
        }
        .amount-input {
          width: 100%;
          min-height: 56px;
          padding: 0 18px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.03);
          color: #eef3fb;
          font-size: 24px;
          font-weight: 800;
          font-family: 'JetBrains Mono', monospace;
        }
        .amount-note {
          color: #90a0b6;
          font-size: 13px;
          margin-top: 8px;
        }
        .cta {
          margin-top: 18px;
          width: 100%;
          min-height: 52px;
          border: none;
          border-radius: 16px;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
          font-weight: 800;
          font-size: 15px;
        }
        .qr-panel {
          padding: 22px;
          border-radius: 22px;
          background: linear-gradient(180deg, rgba(20, 27, 38, 0.88), rgba(13, 18, 26, 0.92));
          border: 1px solid rgba(247, 147, 26, 0.16);
          text-align: center;
          display: grid;
          gap: 16px;
        }
        .deposit-layout {
          display: grid;
          gap: 18px;
        }
        .deposit-box-head strong {
          display: block;
          font-size: 18px;
          margin-bottom: 6px;
        }
        .deposit-box-head span {
          color: #8fa2ba;
          font-size: 13px;
          line-height: 1.6;
        }
        .network-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: 999px;
          background: rgba(247, 147, 26, 0.14);
          color: #f6b353;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .qr-wrap {
          display: flex;
          justify-content: center;
        }
        .address-box {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 16px;
          padding: 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.04);
        }
        .address-box code {
          flex: 1;
          color: #eef3fb;
          font-size: 13px;
          word-break: break-all;
        }
        .icon-btn {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          border: none;
          background: rgba(255, 255, 255, 0.06);
          color: #eef3fb;
        }
        .status-banner {
          margin-top: 16px;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(52, 120, 246, 0.16);
          color: #cde0ff;
          line-height: 1.6;
        }
        .history-card {
          padding: 24px;
        }
        .history-card h3 {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 18px;
        }
        .tx-list {
          display: grid;
          gap: 12px;
        }
        .tx-item {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto auto;
          gap: 12px;
          align-items: center;
          padding: 14px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.03);
        }
        .tx-icon {
          width: 42px;
          height: 42px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tx-icon.deposit { background: rgba(14, 203, 129, 0.14); color: #0ecb81; }
        .tx-icon.withdraw { background: rgba(246, 70, 93, 0.14); color: #f6465d; }
        .tx-icon.stake { background: rgba(247, 147, 26, 0.14); color: #f7931a; }
        .tx-meta strong {
          display: block;
          text-transform: capitalize;
        }
        .tx-meta span,
        .tx-status {
          color: #8fa2ba;
          font-size: 12px;
        }
        .tx-amount {
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
        }
        .tx-status.completed { color: #0ecb81; }
        .tx-status.pending { color: #f6b353; }
        .tx-status.rejected { color: #f6465d; }
        .tx-status-label {
          text-transform: capitalize;
        }
        @media (max-width: 1080px) {
          .balance-grid,
          .content-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 760px) {
          .page-head,
          .wallet-main,
          .history-card,
          .balance-card {
            padding: 18px;
          }
          .tx-item {
            grid-template-columns: auto 1fr;
          }
        }
      `}</style>

      <section className="card page-head">
        <h1>Finance Center</h1>
        <p>Deposit, withdraw, and manage your demo BTC wallet with a more professional exchange flow.</p>
      </section>

      <section className="balance-grid">
        <div className="card balance-card">
          <div className="balance-icon"><Wallet size={24} /></div>
          <h3>USD Balance</h3>
          <strong>${formatNumber(user?.usdBalance || 0)}</strong>
          <p>Available for trading and withdrawals after System Admin verification.</p>
        </div>
        <div className="card balance-card">
          <div className="balance-icon"><Bitcoin size={24} /></div>
          <h3>BTC Holdings</h3>
          <strong>{(user?.btcBalance || 0).toFixed(6)} BTC</strong>
          <p>Live value: ${(((user?.btcBalance || 0) * btcPrice)).toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
        </div>
        <div className="card balance-card">
          <div className="balance-icon"><Lock size={24} /></div>
          <h3>Staked BTC</h3>
          <strong>{(user?.stakeAmount || 0).toFixed(6)} BTC</strong>
          <p>Passive rewards stay in demo mode and can be showcased to users.</p>
        </div>
      </section>

      <section className="content-grid">
        <div className="card wallet-main">
          <div className="tab-row">
            <button className={`tab-btn ${activeTab === 'deposit' ? 'active' : ''}`} onClick={() => setActiveTab('deposit')}>Deposit</button>
            <button className={`tab-btn ${activeTab === 'withdraw' ? 'active' : ''}`} onClick={() => setActiveTab('withdraw')}>Withdraw</button>
            <button className={`tab-btn ${activeTab === 'stake' ? 'active' : ''}`} onClick={() => setActiveTab('stake')}>Stake</button>
          </div>

          {activeTab === 'deposit' && (
            <div className="deposit-layout">
              <div className="flow-card">
                <h2>Deposit BTC</h2>
                <p>Enter how much BTC the user will deposit. After you prepare the request, a separate wallet box appears with the QR code, wallet address, and finish button.</p>
                <div className="field">
                  <label>Deposit Amount (BTC)</label>
                  <input className="amount-input" value={depositAmount} onChange={(event) => setDepositAmount(event.target.value)} type="number" placeholder="0.01000000" />
                  <div className="amount-note">
                    Website credit after verification: {depositAmount ? `$${formatNumber(parseFloat(depositAmount || '0') * btcPrice)}` : '$0.00'} USDT
                  </div>
                </div>
                <button className="cta" onClick={requestDeposit}>Prepare Deposit</button>
              </div>

              {depositReady && (
                <div className="qr-panel">
                  <div className="deposit-box-head">
                    <strong>BTC Deposit Wallet</strong>
                    <span>Send exactly {parseFloat(depositAmount).toFixed(8)} BTC to this wallet, then click finish deposit. Status will stay pending until System Admin verifies it.</span>
                  </div>
                  <div className="network-pill">BTC Network Only</div>
                  <div className="qr-wrap">
                    <QRCodeSVG value={DEPOSIT_WALLET} size={176} bgColor="#ffffff" fgColor="#000000" />
                  </div>
                  <div className="address-box">
                    <code>{DEPOSIT_WALLET}</code>
                    <button className="icon-btn" onClick={handleCopy}>
                      {copied ? <Check size={18} /> : <Copy size={18} />}
                    </button>
                  </div>
                  <div className="amount-note">
                    Pending credit: {parseFloat(depositAmount).toFixed(8)} BTC and ${formatNumber(parseFloat(depositAmount) * btcPrice)} USDT
                  </div>
                  <button className="cta" onClick={submitDeposit}>Finish Deposit</button>
                </div>
              )}

              {depositSubmitted && (
                <div className="status-banner">
                  Deposit submitted and now pending. After System Admin verifies it, the user BTC balance and USD trade balance will both increase.
                </div>
              )}
            </div>
          )}

          {activeTab === 'withdraw' && (
            <div className="flow-card">
              <h2>Withdraw USD</h2>
              <p>Submit a withdrawal request using your available USD balance. The amount is deducted only after System Admin approval.</p>
              <div className="field">
                <label>Withdrawal Amount (USD)</label>
                <input className="amount-input" value={withdrawAmount} onChange={(event) => setWithdrawAmount(event.target.value)} type="number" placeholder="500" />
                <div className="amount-note">Available: ${formatNumber(user?.usdBalance || 0)}</div>
              </div>
              <div className="field">
                <label>BTC Wallet Address</label>
                <input className="amount-input" style={{ fontSize: '16px', fontWeight: 600 }} value={withdrawAddress} onChange={(event) => setWithdrawAddress(event.target.value)} type="text" placeholder="Paste your BTC wallet address" />
              </div>
              <button className="cta" onClick={submitWithdraw}>Submit Withdrawal</button>
              {withdrawSubmitted && (
                <div className="status-banner">Withdrawal request submitted. System Admin approval will remove the amount from your wallet.</div>
              )}
            </div>
          )}

          {activeTab === 'stake' && (
            <div className="flow-card">
              <h2>Stake BTC</h2>
              <p>Move BTC into the staking pool and make the wallet area feel more complete for demo users.</p>
              <div className="field">
                <label>Stake Amount (BTC)</label>
                <input className="amount-input" value={stakeAmount} onChange={(event) => setStakeAmount(event.target.value)} type="number" placeholder="0.050000" />
                <div className="amount-note">Available BTC: {(user?.btcBalance || 0).toFixed(6)}</div>
              </div>
              <button className="cta" onClick={submitStake}>Start Staking</button>
              {stakeSubmitted && (
                <div className="status-banner">BTC moved to staking successfully. The balance updates immediately in this demo.</div>
              )}
            </div>
          )}
        </div>

        <aside className="card history-card">
          <h3>Recent Activity</h3>
          <div className="tx-list">
            {userTransactions.map((tx) => (
              <div key={tx.id} className="tx-item">
                <div className={`tx-icon ${tx.type}`}>
                  {tx.type === 'deposit' ? <ArrowDownCircle size={20} /> : tx.type === 'withdraw' ? <ArrowUpCircle size={20} /> : <Lock size={20} />}
                </div>
                <div className="tx-meta">
                  <strong>{tx.type}</strong>
                  <span>{new Date(tx.timestamp).toLocaleString()}</span>
                </div>
                <div className="tx-amount">${formatNumber(tx.amount)}</div>
                <div className={`tx-status ${tx.status}`}>
                  <span className="tx-status-label">{tx.status === 'completed' ? 'verified' : tx.status}</span>
                  {tx.reviewedBy ? ` • ${tx.reviewedBy}` : ''}
                </div>
              </div>
            ))}
            {userTransactions.length === 0 && <div className="amount-note">No transactions yet.</div>}
          </div>
        </aside>
      </section>
    </div>
  );
}
