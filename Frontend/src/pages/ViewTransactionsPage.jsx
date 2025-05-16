import React, { useState } from 'react';
import api from '../services/api';

function ViewTransactionsPage() {
  const [customerId, setCustomerId] = useState('');
  const [month, setMonth] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      setError('');
      const response = await api.get('/finance/transaction', {
        params: {
          customer_id: customerId,
          month,
        },
      });
      setTransactions(response.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch transactions');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>View Transactions</h2>

      <label>Customer ID:</label><br />
      <input
        type="text"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        placeholder="Enter your ID"
      />
      <br /><br />

      <label>Select Month (YYYY-MM):</label><br />
      <input
        type="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />
      <br /><br />

      <button onClick={handleSubmit}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {transactions.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Results:</h3>
          <ul>
            {transactions.map((t) => (
              <li key={t.id}>
                ID: {t.id}, Amount: {t.amount}, Status: {t.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ViewTransactionsPage;
