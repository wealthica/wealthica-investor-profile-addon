import { LABELS, THEME } from '@/constants';

export const makeChartData = data => ({
  labels: LABELS,
  datasets: [
    {
      backgroundColor: [THEME.primary, THEME.secondary],
      data,
    },
  ],
});

/**
 * @param {array} positions
 * @return [bonds, equities]
 */
export const analyzePositions = positions => {
  let data = [0, 0];
  positions.forEach(position => {
    const i = position.class === 'equity' ? 1 : 0;
    data[i] += position.value;
  });

  return data;
};
