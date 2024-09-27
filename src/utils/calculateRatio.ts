export const calculateRatio = (win?: number, lose?: number, drawn?: number): string => {
  const totalGames = (win || 0) + (lose || 0) + (drawn || 0);
  return totalGames && win ? (win / totalGames).toFixed(3) : "0.000";
};
