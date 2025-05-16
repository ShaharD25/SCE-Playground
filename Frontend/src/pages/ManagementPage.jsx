import React, { useState } from 'react';
import api from '../services/api';

function ManagementPage() {
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const fetchIncome = async () => {
    try {
      setError('');
      const response = await api.get('/finance/management/income');
      setResult(`Total Income: ${response.data.total_income}`);
    } catch (err) {
      console.error(err);
      setError('Failed to load income');
    }
  };

  const fetchTransactionCount = async () => {
    try {
      setError('');
      const response = await api.get('/finance/management/count');
      setResult(`Total Transactions: ${response.data.transaction_count}`);
    } catch (err) {
      console.error(err);
      setError('Failed to load transaction count');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Management Summary</h2>

      <button onClick={fetchIncome}>Show Total Income</button>
      <button onClick={fetchTransactionCount} style={{ marginLeft: '1rem' }}>
        Show Transaction Count
      </button>

      <div style={{ marginTop: '1rem' }}>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {result && <p><strong>{result}</strong></p>}
      </div>
    </div>
  );
}

export default ManagementPage;
