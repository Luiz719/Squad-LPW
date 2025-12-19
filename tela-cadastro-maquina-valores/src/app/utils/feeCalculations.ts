export const calculateSpread = (charge: number, cost: number) => {
  const spread = charge - cost;
  return Number(spread.toFixed(2));
};

export const validateFees = (charge: number, cost: number) => {
  if (cost > charge) return "Atenção: Você está tendo prejuízo nesta taxa.";
  if (charge < 0 || cost < 0) return "Valores não podem ser negativos.";
  return "";
};