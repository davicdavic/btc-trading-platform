export const MAINTENANCE_MARGIN_RATE = 0.005;

export function calculateLiquidationPrice(
  entryPrice: number,
  leverageValue: number,
  tradeDirection: 'up' | 'down',
) {
  const moveToLiquidation = Math.max((1 / leverageValue) - MAINTENANCE_MARGIN_RATE, 0.0025);

  return tradeDirection === 'up'
    ? entryPrice * (1 - moveToLiquidation)
    : entryPrice * (1 + moveToLiquidation);
}

export function calculatePnL({
  entryPrice,
  exitPrice,
  amount,
  leverageValue,
  tradeDirection,
}: {
  entryPrice: number;
  exitPrice: number;
  amount: number;
  leverageValue: number;
  tradeDirection: 'up' | 'down';
}) {
  const rawMove = (exitPrice - entryPrice) / entryPrice;
  const directionalMove = tradeDirection === 'up' ? rawMove : -rawMove;
  const leveragedReturn = directionalMove * leverageValue;
  const pnl = Math.max(-amount, amount * leveragedReturn);

  return {
    pnl,
    directionalMovePct: directionalMove * 100,
  };
}
