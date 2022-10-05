import './App.css';
import CurrencyInput from './CurrencyInput';

import useAxios from './hook/useAxios';

function App() {
  const {
    rates,
    error,
    loading,
    amount1,
    amount2,
    amount3,
    currency1,
    currency2,
    currency3,
    handleAmount1Change,
    handleAmount2Change,
    handleAmount3Change,
    handleCurrency1Change,
    handleCurrency2Change,
    handleCurrency3Change,
  } = useAxios();

  return (
    <div className="container">
      <h1>Convert</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {error && (
            <div>
              <p>{error.message}</p>
            </div>
          )}
          <CurrencyInput
            onAmountChange={handleAmount1Change}
            onCurrencyChange={handleCurrency1Change}
            currencies={Object.keys(rates)}
            amount={amount1}
            currency={currency1}
          />
          <div className="equals">=</div>
          <CurrencyInput
            onAmountChange={handleAmount2Change}
            onCurrencyChange={handleCurrency2Change}
            currencies={Object.keys(rates)}
            amount={amount2}
            currency={currency2}
          />
          <div className="equals">=</div>
          <CurrencyInput
            onAmountChange={handleAmount3Change}
            onCurrencyChange={handleCurrency3Change}
            currencies={Object.keys(rates)}
            amount={amount3}
            currency={currency3}
          />
        </div>
      )}
    </div>
  );
}

export default App;
