import React, { useState } from 'react';
import api from '../services/api';

function MonthlyReportPage() {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [report, setReport] = useState(null);
  const [error, setError] = useState('');

  const fetchMonthlyReport = async () => {
    try {
      if (!selectedMonth) throw new Error('Please select a month');

      const fullDate = new Date(`${selectedMonth}-01T00:00:00Z`);
      if (isNaN(fullDate.getTime())) throw new Error('Invalid date format');

      const year = fullDate.getUTCFullYear();
      const month = fullDate.getUTCMonth() + 1; // ינואר = 0, לכן מוסיפים 1

      const response = await api.get('/finance/report/monthly', {
        params: { year, month }
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
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        required
      />
      <br /><br />

      <button onClick={fetchMonthlyReport}>Get Report</button>

      <div style={{ marginTop: '1rem' }}>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {report && (
          <>
            <p><strong>Transactions in {selectedMonth}:</strong> {report.transaction_count}</p>
            <p><strong>Total Income:</strong> ₪ {report.total_income}</p>
            <p><strong>Average Payment:</strong> ₪ {report.average_payment}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default MonthlyReportPage;
