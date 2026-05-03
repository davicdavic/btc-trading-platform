create extension if not exists "uuid-ossp";

create table if not exists users (
  id uuid primary key default uuid_generate_v4(),
  email text unique not null,
  password_hash text not null,
  role text not null default 'user',
  frozen boolean not null default false,
  leverage_cap integer not null default 20,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists wallet_balances (
  user_id uuid primary key references users(id) on delete cascade,
  available_usdt numeric(24, 8) not null default 0,
  locked_usdt numeric(24, 8) not null default 0,
  available_btc numeric(24, 8) not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists trading_pairs (
  symbol text primary key,
  base_asset text not null,
  quote_asset text not null,
  min_order_size numeric(24, 8) not null,
  max_order_size numeric(24, 8) not null,
  max_leverage integer not null,
  maintenance_margin_rate numeric(10, 8) not null,
  maker_fee_bps integer not null,
  taker_fee_bps integer not null,
  suspended boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references users(id) on delete cascade,
  symbol text not null references trading_pairs(symbol),
  type text not null,
  side text not null,
  margin_mode text not null,
  leverage integer not null,
  quantity numeric(24, 8) not null,
  remaining_quantity numeric(24, 8) not null,
  limit_price numeric(24, 8),
  stop_price numeric(24, 8),
  take_profit_price numeric(24, 8),
  stop_loss_price numeric(24, 8),
  notional numeric(24, 8) not null,
  initial_margin numeric(24, 8) not null,
  estimated_fees numeric(24, 8) not null,
  status text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists positions (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references users(id) on delete cascade,
  symbol text not null references trading_pairs(symbol),
  side text not null,
  margin_mode text not null,
  leverage integer not null,
  quantity numeric(24, 8) not null,
  entry_price numeric(24, 8) not null,
  mark_price numeric(24, 8) not null,
  margin numeric(24, 8) not null,
  notional numeric(24, 8) not null,
  liquidation_price numeric(24, 8) not null,
  maintenance_margin_rate numeric(10, 8) not null,
  funding_accrued numeric(24, 8) not null default 0,
  fees_accrued numeric(24, 8) not null default 0,
  take_profit_price numeric(24, 8),
  stop_loss_price numeric(24, 8),
  status text not null default 'open',
  opened_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists trade_fills (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid not null references orders(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  symbol text not null references trading_pairs(symbol),
  side text not null,
  price numeric(24, 8) not null,
  quantity numeric(24, 8) not null,
  notional numeric(24, 8) not null,
  liquidity_role text not null,
  fee_bps integer not null,
  fee_paid numeric(24, 8) not null,
  created_at timestamptz not null default now()
);

create table if not exists funding_rates (
  id uuid primary key default uuid_generate_v4(),
  symbol text not null references trading_pairs(symbol),
  rate numeric(12, 10) not null,
  applied_at timestamptz not null default now()
);

create table if not exists market_candles (
  id uuid primary key default uuid_generate_v4(),
  symbol text not null references trading_pairs(symbol),
  interval text not null,
  open_time bigint not null,
  close_time bigint not null,
  open numeric(24, 8) not null,
  high numeric(24, 8) not null,
  low numeric(24, 8) not null,
  close numeric(24, 8) not null,
  volume numeric(24, 8) not null,
  unique(symbol, interval, open_time)
);

create table if not exists liquidation_events (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references users(id) on delete cascade,
  symbol text not null references trading_pairs(symbol),
  position_id uuid not null,
  mark_price numeric(24, 8) not null,
  margin_balance numeric(24, 8) not null,
  created_at timestamptz not null default now()
);

create table if not exists audit_logs (
  id uuid primary key default uuid_generate_v4(),
  type text not null,
  actor_id uuid,
  payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_orders_user_status on orders(user_id, status);
create index if not exists idx_positions_user_status on positions(user_id, status);
create index if not exists idx_trade_fills_symbol_created on trade_fills(symbol, created_at desc);
create index if not exists idx_market_candles_symbol_interval_time on market_candles(symbol, interval, open_time desc);
