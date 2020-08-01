import { LABELS } from '@/constants';

export const getAddonQueryFromOptions = options => ({
  from: options.dateRangeFilter && options.dateRangeFilter[0],
  to: options.dateRangeFilter && options.dateRangeFilter[1],
  groups: options.groupsFilter,
  institutions: options.institutionsFilter,
  investments:
    options.investmentsFilter === 'all' ? null : options.investmentsFilter,
});

export const makeChartData = data => ({
  labels: LABELS,
  datasets: [
    {
      backgroundColor: ['#00D8FF', '#E46651'],
      data,
    },
  ],
});
