import { useState, useRef, useEffect } from 'react';
import { CheckCircle2, MessageCircle, Send, ShieldCheck, User } from 'lucide-react';
import { useAuth } from '../App';
import type { ChatMessage } from '../types';

const mockMessages: ChatMessage[] = [
  {
    id: '1',
    senderId: 'admin',
    senderName: 'Support Desk',
    message: 'Welcome to BTCTradePro support. Tell us if you need help with deposit approval, wallet status, or your trade desk.',
    timestamp: '2026-04-28T10:00:00',
    isAdmin: true,
  },
];

export default function SupportPage() {
  const { user } = useAuth();
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = () => {
    if (!newMessage.trim()) return;

    const nextMessage: ChatMessage = {
      id: `msg-${Date.now()}`,
      senderId: user?.id || 'user',
      senderName: user?.name || 'User',
      message: newMessage,
      timestamp: new Date().toISOString(),
      isAdmin: false,
    };

    setMessages((prev) => [...prev, nextMessage]);
    setNewMessage('');
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: `msg-${Date.now() + 1}`,
            senderId: 'admin',
            senderName: 'Support Desk',
            message: 'Your request has been logged. For wallet actions, our admin reviews pending deposits and withdrawals from the back office queue.',
            timestamp: new Date().toISOString(),
            isAdmin: true,
          },
        ]);
      }, 1400);
    }, 500);
  };

  return (
    <div className="support-shell">
      <style>{`
        .support-shell {
          display: grid;
          gap: 22px;
          color: #eef3fb;
        }
        .card {
          background: linear-gradient(180deg, rgba(15, 19, 28, 0.94), rgba(12, 16, 24, 0.9));
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 28px;
          box-shadow: 0 24px 80px rgba(0, 0, 0, 0.24);
        }
        .hero {
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }
        .hero-main {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .hero-icon {
          width: 54px;
          height: 54px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(247, 147, 26, 0.14);
          color: #f6b353;
        }
        .hero h1 {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.03em;
        }
        .hero p {
          color: #8fa2ba;
          margin-top: 6px;
        }
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          background: rgba(14, 203, 129, 0.14);
          color: #0ecb81;
          font-size: 12px;
          font-weight: 700;
        }
        .grid {
          display: grid;
          grid-template-columns: 290px minmax(0, 1fr);
          gap: 18px;
        }
        .sidebar,
        .chat-card {
          min-height: 620px;
        }
        .sidebar {
          padding: 22px;
        }
        .sidebar h3 {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 14px;
        }
        .quick-list {
          display: grid;
          gap: 10px;
        }
        .quick-btn {
          text-align: left;
          min-height: 46px;
          padding: 0 14px;
          border-radius: 14px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.03);
          color: #eef3fb;
        }
        .chat-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .chat-head {
          padding: 18px 22px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .chat-stream {
          flex: 1;
          overflow-y: auto;
          padding: 22px;
          display: grid;
          gap: 14px;
        }
        .message-row {
          display: flex;
        }
        .message-row.user {
          justify-content: flex-end;
        }
        .message-wrap {
          max-width: min(78%, 620px);
          display: flex;
          gap: 10px;
        }
        .message-row.user .message-wrap {
          flex-direction: row-reverse;
        }
        .avatar {
          width: 40px;
          height: 40px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.07);
          overflow: hidden;
          flex-shrink: 0;
        }
        .avatar img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .bubble {
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(255, 255, 255, 0.04);
        }
        .message-row.user .bubble {
          background: rgba(247, 147, 26, 0.16);
        }
        .bubble strong {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 8px;
          font-size: 13px;
        }
        .bubble p {
          line-height: 1.7;
          color: #d2dbea;
        }
        .bubble small {
          display: block;
          margin-top: 8px;
          color: #8fa2ba;
        }
        .composer {
          padding: 18px 22px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          gap: 12px;
        }
        .composer input {
          flex: 1;
          min-height: 50px;
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: rgba(255, 255, 255, 0.03);
          color: #eef3fb;
          padding: 0 16px;
        }
        .send-btn {
          width: 50px;
          height: 50px;
          border-radius: 16px;
          border: none;
          background: linear-gradient(135deg, #f7931a, #ffb347);
          color: #111;
        }
        @media (max-width: 980px) {
          .grid {
            grid-template-columns: 1fr;
          }
          .sidebar,
          .chat-card {
            min-height: unset;
          }
        }
      `}</style>

      <section className="card hero">
        <div className="hero-main">
          <div className="hero-icon"><MessageCircle size={24} /></div>
          <div>
            <h1>Support Center</h1>
            <p>Professional help desk for wallet issues, KYC, and trade questions.</p>
          </div>
        </div>
        <div className="status-pill">
          <ShieldCheck size={16} />
          Live Team Online
        </div>
      </section>

      <section className="grid">
        <aside className="card sidebar">
          <h3>Quick actions</h3>
          <div className="quick-list">
            {['Deposit approval', 'Withdrawal queue', 'Trade issue', 'KYC question'].map((item) => (
              <button key={item} className="quick-btn" onClick={() => setNewMessage(item)}>
                {item}
              </button>
            ))}
          </div>
        </aside>

        <div className="card chat-card">
          <div className="chat-head">
            <strong>Conversation</strong>
            <span className="status-pill">Avg. response: 5 min</span>
          </div>
          <div className="chat-stream">
            {messages.map((msg) => (
              <div key={msg.id} className={`message-row ${msg.isAdmin ? 'admin' : 'user'}`}>
                <div className="message-wrap">
                  <div className="avatar">
                    {msg.isAdmin ? <ShieldCheck size={18} /> : user?.avatar ? <img src={user.avatar} alt={user.name} /> : <User size={18} />}
                  </div>
                  <div className="bubble">
                    <strong>
                      {msg.senderName}
                      {msg.isAdmin && <CheckCircle2 size={14} color="#0ecb81" />}
                    </strong>
                    <p>{msg.message}</p>
                    <small>{new Date(msg.timestamp).toLocaleTimeString()}</small>
                  </div>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message-row admin">
                <div className="message-wrap">
                  <div className="avatar"><ShieldCheck size={18} /></div>
                  <div className="bubble"><p>Support is typing...</p></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="composer">
            <input value={newMessage} onChange={(event) => setNewMessage(event.target.value)} onKeyDown={(event) => event.key === 'Enter' && sendMessage()} placeholder="Type your support request..." />
            <button className="send-btn" onClick={sendMessage}><Send size={20} /></button>
          </div>
        </div>
      </section>
    </div>
  );
}
