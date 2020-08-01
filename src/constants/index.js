export const LABELS = ['Bonds', 'Equities'];

export const RISKS = [
  { title: 'Conservative', data: [80, 20] },
  { title: 'Cautious', data: [70, 30] },
  { title: 'Balanced', data: [50, 50] },
  { title: 'Assertive', data: [30, 70] },
  { title: 'Aggressive', data: [20, 80] },
];

export const POSITIONS_TABLE_HEADERS = [
  { text: 'Symbol', value: 'security.symbol' },
  { text: 'Name', value: 'security.name' },
  { text: 'Class', value: 'class' },
  { text: 'Category', value: 'category' },
  { text: 'Value', value: 'value' },
];
