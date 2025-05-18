import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

function ManagementPage() {
  const navigate = useNavigate();

  const [summary, setSummary] = useState(null);
  const [error, setError] = useState('');

  const fetchSummary = async () => {
    try {
      const response = await api.get('/finance/report/summary');
      setSummary(response.data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to load summary report');
      setSummary(null);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Management Summary</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '250px' }}>
        <button onClick={() => navigate('/update-status')}>
          Update Transaction Status
        </button>

        <button onClick={() => navigate('/finance/management/monthly')}>
          Monthly Report
        </button>

        <button onClick={fetchSummary}>
          Show Summary Report
        </button>
      </div>

      <div style={{ marginTop: '2rem' }}>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {summary && (
          <>
            <p><strong>Total Transactions:</strong> {summary.transaction_count}</p>
            <p><strong>Total Income:</strong> ₪ {summary.total_income}</p>
            <p><strong>Average Payment:</strong> ₪ {summary.average_payment}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default ManagementPage;

