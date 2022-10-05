import { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from '../helper';

const baseUrl = 'https://open.er-api.com/v6/latest/USD';

const useAxios = () => {
  const [rates, setRates] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [amount1, setAmount1] = useState(1);
  const [amount2, setAmount2] = useState(1);
  const [amount3, setAmount3] = useState(1);
  const [currency1, setCurrency1] = useState('UAH');
  const [currency2, setCurrency2] = useState('USD');
  const [currency3, setCurrency3] = useState('EUR');
  const fetchRates = () => {
    axios
      .get(`${baseUrl}`)
      .then((response) => setRates(response.data.rates))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchRates();
  }, []);
  function handleAmount1Change(amount1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount3(format((amount1 * rates[currency3]) / rates[currency1]));
    setAmount1(amount1);
  }

  function handleCurrency1Change(currency1) {
    setAmount2(format((amount1 * rates[currency2]) / rates[currency1]));
    setAmount3(format((amount1 * rates[currency3]) / rates[currency1]));
    setCurrency1(currency1);
  }

  function handleAmount2Change(amount2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount3(format((amount2 * rates[currency3]) / rates[currency2]));
    setAmount2(amount2);
  }

  function handleCurrency2Change(currency2) {
    setAmount1(format((amount2 * rates[currency1]) / rates[currency2]));
    setAmount3(format((amount2 * rates[currency3]) / rates[currency2]));
    setCurrency2(currency2);
  }
  function handleAmount3Change(amount3) {
    setAmount1(format((amount3 * rates[currency1]) / rates[currency3]));
    setAmount2(format((amount3 * rates[currency2]) / rates[currency3]));
    setAmount3(amount3);
  }

  function handleCurrency3Change(currency3) {
    setAmount1(format((amount3 * rates[currency1]) / rates[currency3]));
    setAmount2(format((amount3 * rates[currency2]) / rates[currency3]));
    setCurrency3(currency3);
  }
  return {
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
  };
};

export default useAxios;
