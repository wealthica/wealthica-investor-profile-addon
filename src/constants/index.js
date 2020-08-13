export const LABELS = ['Bonds', 'Equities'];

export const PROFILE_CHOOSE_ID = 0;
export const PROFILE_FIND_NEAREST_ID = 1;

export const PROFILES = [
  {
    title: 'Conservative Investor',
    data: [80, 20],
    text:
      'The Conservative Investor prioritizes the preservation of capital over market returns. She seeks to protect an investment portfolio’s value by investing in lower-risk securities such as fixed-income and money market securities, and often blue-chip or large-cap equities.',
    source: 'Investopedia',
    imagePath: './images/Conservative.png',
  },
  {
    title: 'Cautious Investor',
    data: [70, 30],
    text:
      'The Cautious Investor prioritizes the preservation of capital over market returns. She prefers more stable, lower risk investments, especially those which offer more liquidity. The cautious investor has a lower equity exposure than investors with a more adventurous style.',
    source: 'AkademiaCPD',
    imagePath: './images/Cautious.png',
  },
  {
    title: 'Balanced Investor',
    data: [50, 50],
    text:
      'The Balanced Investor seeks a balance between capital preservation and growth. It is used by investors with a moderate risk tolerance and generally consists of a 50/50 mixture of stocks and bonds. It is at the middle of the risk-reward spectrum.',
    source: 'Investopedia',
    imagePath: './images/Balanced.png',
  },
  {
    title: 'Assertive Investor',
    data: [30, 70],
    text:
      'The Assertive Investor seeks high long term capital growth by investing mostly in growth assets. She remains cautious towards taking high levels of long term risks. You accept the possibility of a negative annual return that may occur once in a while.',
    source: 'Wealthica',
    imagePath: './images/Assertive.png',
  },
  {
    title: 'Aggressive Investor',
    data: [20, 80],
    text:
      'The Aggressive Investor seeks to maximise long term capital growth by investing predominantly in stocks (or ETFs). She is aware of the high risk of a negative return and potential for capital loss in the short term. She sometimes gets higher returns for taking bigger risks.',
    source: 'Wealthica',
    imagePath: './images/Aggressive.png',
  },
];

export const THEME = {
  primary: '#a04bda',
  secondary: '#f59e2c',
};
