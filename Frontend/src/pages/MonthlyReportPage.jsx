import React, { useState } from 'react';
import api from '../services/api';

function MonthlyReportPage() {
  const [month, setMonth] = useState('');
  const [report, setReport] = useState(null);
  const [error, setError] = useState('');

  const fetchMonthlyReport = async () => {
    try {
      const response = await api.get('/finance/report/monthly', {
        params: { month },
      });
      setReport(response.data);
      setError('');
    } catch (err) {
      console.error(err);
      setError('Failed to load monthly report');
      setReport(null);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Monthly Report</h2>

      <label>Select Month (YYYY-MM):</label><br />
      <input
        type="month"
        value={month}
        onChange={(e) => setMonth(e.target.value)}
      />
      <br /><br />

      <button onClick={fetchMonthlyReport}>Get Report</button>

      <div style={{ marginTop: '1rem' }}>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {report && (
          <>
            <p><strong>Transactions in {month}:</strong> {report.transaction_count}</p>
            <p><strong>Total Income:</strong> ₪ {report.total_income}</p>
            <p><strong>Average Payment:</strong> ₪ {report.average_payment}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default MonthlyReportPage;
