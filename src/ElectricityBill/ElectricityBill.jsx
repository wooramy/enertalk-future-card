import React, { PropTypes } from 'react';

const UNIT = {
  KR: {
    ko: { label: '원', pre: false },
    en: { label: '₩ ', pre: true },
    ja: { label: '₩ ', pre: true },
  },
  US: {
    ko: { label: '$ ', pre: true },
    en: { label: '$ ', pre: true },
    ja: { label: '$ ', pre: true },
  },
  JP: {
    ko: { label: '¥ ', pre: true },
    en: { label: '¥ ', pre: true },
    ja: { label: '円', pre: false },
  },
};

Object.freeze(UNIT);

function filterFloatingPoint(amount = 0, precision = 0) {
  return parseFloat(amount.toFixed(precision));
}

function ElectricityBill({ amount, ...options }) {

  const { precision, country, language } = options;
  let displayAmount;
  let displayUnit;

  displayAmount = filterFloatingPoint(amount, precision).toLocaleString();
  displayUnit = UNIT[country][language];

  return (
    <span>
      {displayUnit.pre ? <span className="unit">{displayUnit.label}</span> : null}
      <span className="amount">{displayAmount}</span>
      {displayUnit.pre ? null: <span className="unit">{displayUnit.label}</span>}
    </span>
  );
}

function InvalidPropError(propName, componentName) {
  return new Error(
    'Invalid prop `' + propName + '` supplied to' +
    ' `' + componentName + '`. Validation failed.'
  );
}

ElectricityBill.defaultProps = {
  amount: 0,
  precision: 0,
  country: 'US',
  language: 'en',
};

ElectricityBill.propTypes = {
  amount: PropTypes.number,
  precision: PropTypes.number,
  country: function(props, propName, componentName) {
    const allowedCountries = ['KR', 'US', 'JP'];

    if (allowedCountries.indexOf(props[propName]) === -1) {
      return InvalidPropError(propName, componentName);
    }
  },
  language: function(props, propName, componentName) {
    const allowedLanguages = ['ko', 'en', 'ja'];

    if (allowedLanguages.indexOf(props[propName]) === -1) {
      return InvalidPropError(propName, componentName);
    }
  },
};

export default ElectricityBill;
export {
  filterFloatingPoint,
};
