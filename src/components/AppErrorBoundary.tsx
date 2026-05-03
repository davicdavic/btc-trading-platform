import React from 'react';

type AppErrorBoundaryState = {
  hasError: boolean;
};

class AppErrorBoundary extends React.Component<React.PropsWithChildren, AppErrorBoundaryState> {
  state: AppErrorBoundaryState = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error('App runtime error:', error);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    localStorage.removeItem('btcActiveTrade');
    localStorage.removeItem('btcTradeResult');
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(180deg, #070b11, #0b1119)',
            padding: '24px',
          }}
        >
          <div
            style={{
              width: 'min(520px, 100%)',
              borderRadius: '28px',
              padding: '28px',
              background: 'rgba(15, 19, 28, 0.96)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 24px 80px rgba(0, 0, 0, 0.32)',
              color: '#eef3fb',
            }}
          >
            <div style={{ fontSize: '28px', fontWeight: 800, marginBottom: '10px' }}>BTCTradePro</div>
            <div style={{ fontSize: '20px', fontWeight: 700, marginBottom: '8px' }}>We hit a runtime error</div>
            <p style={{ color: '#8fa2ba', lineHeight: 1.6, marginBottom: '18px' }}>
              The app was protected from a blank crash screen. Reload the page, or reset the current trade cache if the issue came from old saved trade data.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button
                onClick={this.handleReload}
                style={{
                  minHeight: '48px',
                  padding: '0 18px',
                  borderRadius: '14px',
                  border: 'none',
                  background: 'linear-gradient(135deg, #f7931a, #ffb347)',
                  color: '#111',
                  fontWeight: 800,
                }}
              >
                Reload app
              </button>
              <button
                onClick={this.handleReset}
                style={{
                  minHeight: '48px',
                  padding: '0 18px',
                  borderRadius: '14px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'rgba(255, 255, 255, 0.04)',
                  color: '#eef3fb',
                  fontWeight: 700,
                }}
              >
                Reset trade cache
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AppErrorBoundary;
