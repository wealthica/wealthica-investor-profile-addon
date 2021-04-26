import isFinite from "lodash/fp/isFinite";
import numeral from "numeral";
import * as _ from "lodash";

function formatNumber(value, format) {
  if (!isFinite(value)) return "";
  return numeral(value).format(format);
}

export function formatMoney(value, options = {}) {
  if (options.privateMode) return "";
  if (!isFinite(value)) return options.allowNil ? "" : "N/A";

  const { currency, showCurrency, parentheses } = options;
  const symbol = (currency && currency.sign) || options.symbol || "$";
  const number = options.round ? "0,0" : "0,0.00";
  let format = options.format
    ? `${symbol}${options.format}`
    : `${symbol}${number}`;

  if (options.language === "fr") {
    format = options.format
      ? `${options.format} ${symbol}`
      : `${number} ${symbol}`;
  }

  let formatted = formatNumber(value, format.replace(symbol, "$")).replace(
    "$",
    symbol
  );

  if (showCurrency) formatted = `${formatted} ${currency._id.toUpperCase()}`;
  if (parentheses) formatted = `(${formatted})`;

  return formatted;
}

export function formatPercentage(value, options = {}) {
  if (!_.isFinite(value)) return options.allowNil ? "" : "N/A";

  return formatNumber(value, options.round ? "0%" : "0.00%");
}
