// frontend/src/pages/UpdateStatusPage.jsx
import React, { useState } from 'react';
import api from '../services/api';

function UpdateStatusPage() {
  const [transactionId, setTransactionId] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleUpdate = async () => {
    try {
      setError('');
      const response = await api.put(`/finance/transaction/${transactionId}/status`, { status });
      setMessage(`Transaction ${response.data.id} updated to status "${response.data.status}"`);
    } catch (err) {
      console.error(err);
      setError('Failed to update transaction status');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Update Transaction Status</h2>
      <input
        type="text"
        placeholder="Transaction ID"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
        style={{ marginRight: '1rem' }}
      />
      <input
        type="text"
        placeholder="New Status (e.g. paid)"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        style={{ marginRight: '1rem' }}
      />
      <button onClick={handleUpdate}>Update</button>

      <div style={{ marginTop: '1rem' }}>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </div>
  );
}

export default UpdateStatusPage;
