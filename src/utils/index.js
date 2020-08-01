export const getAddonQueryFromOptions = options => ({
  from: options.dateRangeFilter && options.dateRangeFilter[0],
  to: options.dateRangeFilter && options.dateRangeFilter[1],
  groups: options.groupsFilter,
  institutions: options.institutionsFilter,
  investments:
    options.investmentsFilter === 'all' ? null : options.investmentsFilter,
});
