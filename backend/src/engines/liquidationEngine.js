const {
  computeMaintenanceMargin,
  computeMarginRatio,
  computeUnrealizedPnl,
  shouldLiquidate,
} = require('./riskEngine');

function evaluatePositionForLiquidation(position, pair, markPrice) {
  const maintenanceMargin = computeMaintenanceMargin(position.notional, pair.maintenanceMarginRate);
  const unrealizedPnl = computeUnrealizedPnl({
    side: position.side,
    quantity: position.quantity,
    entryPrice: position.entryPrice,
    markPrice,
  });
  const marginBalance = position.margin + unrealizedPnl - position.fundingAccrued - position.feesAccrued;
  const marginRatio = computeMarginRatio({ maintenanceMargin, marginBalance });

  return {
    maintenanceMargin,
    unrealizedPnl,
    marginBalance,
    marginRatio,
    shouldLiquidate: shouldLiquidate({ maintenanceMargin, marginBalance }),
  };
}

module.exports = {
  evaluatePositionForLiquidation,
};
