import isFinite from "lodash/fp/isFinite";
import numeral from "numeral";

function formatNumber(value, format) {
  if (!isFinite(value)) return "";
  return numeral(value).format(format);
}

export default (value, options = {}) => {
  if (options.privateMode) return "";
  if (!isFinite(value)) return options.allowNil ? "" : "N/A";

  const { currency, showCurrency, parentheses } = options;
  const symbol = (currency && currency.sign) || options.symbol || "$";
  const number = options.round ? "0,0" : "0,0.00";
  const format = options.format
    ? `${symbol}${options.format}`
    : `${symbol}${number}`;

  let formatted = formatNumber(value, format.replace(symbol, "$")).replace(
    "$",
    symbol
  );

  if (showCurrency) formatted = `${formatted} ${currency._id.toUpperCase()}`;
  if (parentheses) formatted = `(${formatted})`;

  return formatted;
};
