export const LABELS = ['bonds', 'equities'];

export const PROFILE_CHOOSE_ID = 0;
export const PROFILE_FIND_NEAREST_ID = 1;

export const PROFILES = [
  {
    title: 'conservative_investor',
    data: [80, 20],
    text: 'conservative_investor_text',
    source: 'investopedia',
    imagePath: 'img/conservative.png',
  },
  {
    title: 'cautious_investor',
    data: [70, 30],
    text: 'cautious_investor_text',
    source: 'akademia_cpd',
    imagePath: 'img/cautious.png',
  },
  {
    title: 'balanced_investor',
    data: [50, 50],
    text: 'balanced_investor_text',
    source: 'investopedia',
    imagePath: 'img/balanced.png',
  },
  {
    title: 'assertive_investor',
    data: [30, 70],
    text: 'assertive_investor_text',
    source: 'wealthica',
    imagePath: 'img/assertive.png',
  },
  {
    title: 'aggressive_investor',
    data: [20, 80],
    text: 'aggressive_investor_text',
    source: 'wealthica',
    imagePath: 'img/aggressive.png',
  },
];

export const THEME = {
  primary: '#a04bda',
  secondary: '#f59e2c',
};
