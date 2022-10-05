import React from 'react';

function CurrencyInput(props) {
  const { currencies, onAmountChange, onCurrencyChange, amount, currency } =
    props;

  return (
    <div>
      <input
        type="number"
        className="input"
        value={amount}
        onChange={(e) => onAmountChange(e.target.value)}
      />
      <select
        value={currency}
        onChange={(e) => onCurrencyChange(e.target.value)}
      >
        {currencies.map((currency) => (
          <option value={currency} key={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CurrencyInput;
