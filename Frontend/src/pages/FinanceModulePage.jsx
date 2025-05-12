import React, { useState } from 'react';
import api from '../services/api'; 

function FinanceModulePage() {
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Sending to backend:', {
        customer_id: Number(customerId),
        amount: Number(amount),
        status,
        description,
      });

      const response = await api.post('/finance/transaction', {
        customer_id: Number(customerId),
        amount: Number(amount),
        status,
        description,
      });

      console.log(' Server response:', response.data);
      alert('Transaction created successfully!');

      
      setCustomerId('');
      setAmount('');
      setStatus('');
      setDescription('');
      
    } catch (error) {
      console.error(' Failed to send data:', error.response?.data || error.message);
      alert('Failed to send transaction');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome to the Finance Module</h2>

      <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Customer ID:</label><br />
          <input
            type="number"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            placeholder="Enter customer ID"
            required
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Amount:</label><br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            required
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Status:</label><br />
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            placeholder="Enter status"
            required
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Description:</label><br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter description"
            required
          />
        </div>

        <button type="submit">Save Transaction</button>
      </form>
    </div>
  );
}

export default FinanceModulePage;
