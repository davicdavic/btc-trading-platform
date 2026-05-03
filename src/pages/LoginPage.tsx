import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../App';

export default function LoginPage() {
  const { login, register } = useAuth();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignUp) {
      register(username, email, password);
      return;
    }
    login(username, password);
  };

  return (
    <div className="min-h-screen bg-btc-dark flex items-center justify-center p-4 relative overflow-hidden">
      <style>{`
        .auth-shell {
          position: relative;
          width: 100%;
          max-width: 720px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 24px;
          z-index: 1;
        }
        .auth-card-wrap {
          position: relative;
          width: 100%;
          max-width: 448px;
          margin: 0 auto;
        }
        .auth-card {
          background: rgba(30, 35, 41, 0.9);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(14px);
        }
        .auth-toggle-panel {
          margin-top: 24px;
          padding: 14px 16px;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
        }
        .auth-stats {
          margin-top: 24px;
          display: flex;
          justify-content: center;
          gap: 32px;
        }
        .auth-stat {
          text-align: center;
        }
        @media (max-width: 640px) {
          .auth-shell {
            gap: 18px;
            max-width: 760px;
          }
          .auth-card-wrap {
            max-width: 520px;
          }
          .auth-card {
            padding: 28px 24px;
            border-radius: 22px;
          }
          .auth-stats {
            gap: 18px;
            padding: 0 6px;
          }
          .auth-stat p:first-child {
            font-size: 12px;
          }
          .auth-stat p:last-child {
            font-size: 16px;
          }
        }
        @media (max-width: 420px) {
          .auth-card {
            padding: 24px 18px;
          }
          .auth-stats {
            gap: 14px;
          }
        }
      `}</style>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-btc-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-btc-green/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating BTC Icons */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute text-btc-gold/10 text-8xl font-bold animate-float"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              transform: `rotate(${i * 30}deg)`
            }}
          >
            ₿
          </div>
        ))}
      </div>

      <div className="auth-shell">
        <div className="auth-card-wrap">
          <div className="auth-card">
          {/* Logo */}
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex text-btc-text-secondary hover:text-btc-gold text-sm mb-6">
                Back to home
              </Link>
              <div className="w-20 h-20 bg-gradient-to-br from-btc-gold to-yellow-600 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-glow">
                <span className="text-4xl font-bold text-btc-dark">₿</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">BTC Trade</h1>
              <p className="text-btc-text-secondary">Professional Cryptocurrency Trading</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-btc-text-secondary mb-2">User Name</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your user name"
                  className="w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all"
                />
              </div>

              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-btc-text-secondary mb-2">Email (Optional)</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-btc-text-secondary mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 bg-btc-dark border border-btc-border rounded-lg text-white placeholder-btc-text-secondary/50 focus:border-btc-gold focus:ring-1 focus:ring-btc-gold/50 transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-btc-text-secondary hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-btc-gold to-yellow-500 text-btc-dark font-bold rounded-lg hover:shadow-lg hover:shadow-btc-gold/30 transition-all duration-300 transform hover:scale-[1.02]"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            {/* Toggle */}
            <div className="auth-toggle-panel">
              <p className="text-center text-btc-text-secondary">
              {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  onClick={() => setIsSignUp(!isSignUp)}
                  className="text-btc-gold hover:underline font-medium"
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>

            {/* Demo hint */}
            <div className="mt-4 p-3 bg-btc-dark/50 rounded-lg border border-btc-border">
              <p className="text-xs text-btc-text-secondary text-center">
                {isSignUp ? 'New accounts start as unverified and must complete profile verification before trading.' : 'Demo: Click Sign In with pre-filled credentials'}
              </p>
            </div>
          </div>
        </div>

        <div className="auth-stats">
          <div className="auth-stat">
            <p className="text-btc-text-secondary text-sm">24h Volume</p>
            <p className="text-white font-bold">$2.4B</p>
          </div>
          <div className="auth-stat">
            <p className="text-btc-text-secondary text-sm">Active Traders</p>
            <p className="text-white font-bold">45,892</p>
          </div>
          <div className="auth-stat">
            <p className="text-btc-text-secondary text-sm">Win Rate</p>
            <p className="text-btc-green font-bold">78%</p>
          </div>
        </div>
      </div>
    </div>
  );
}
