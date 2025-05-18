import React, { useState } from 'react';
import api from '../services/api';

function CreateTransactionPage() {
  const [customerId, setCustomerId] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      if (!createdAt) throw new Error('Please select a month.');
  
      const fullDate = new Date(`${createdAt}-01T00:00:00Z`);
      if (isNaN(fullDate.getTime())) throw new Error('Invalid date format.');
  
      const response = await api.post('/finance/transaction', {
        customer_id: Number(customerId),
        amount: Number(amount),
        status,
        description,
        created_at: fullDate.toISOString()
      });
  
      if (status.toLowerCase() === 'paid') {
        alert('Receipt has been sent to your email');
      } else {
        alert('Transaction created successfully!');
      }
  
      setCustomerId('');
      setAmount('');
      setStatus('');
      setDescription('');
      setCreatedAt('');
    } catch (error) {
      console.error('Failed to create transaction:', error);
      alert(error.message || 'Failed to create transaction');
    }
  };
  
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Create Transaction</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Customer ID:</label><br />
          <input
            type="number"
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Amount:</label><br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Status:</label><br />
          <input
            type="text"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Description:</label><br />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Created At (YYYY-MM):</label><br />
          <input
            type="month"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            required
          />
        </div>

        <br />
        <button type="submit">Save Transaction</button>
      </form>
    </div>
  );
}

export default CreateTransactionPage;
