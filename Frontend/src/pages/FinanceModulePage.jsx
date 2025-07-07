import React from 'react';
import { useNavigate } from 'react-router-dom';

function FinanceModulePage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Finance Module</h2>

      <button onClick={() => navigate('/finance/create')}>
        Create Transaction
      </button>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => navigate('/finance-module/view')}>
          View Transactions
        </button>
      </div>

      <div style={{ marginTop: '1rem' }}>
        <button onClick={() => navigate('/finance/management')}>
          Management
        </button>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default FinanceModulePage;
=======
export default FinanceModulePage;
>>>>>>> 9f70c9e15933a17fe18aa1b756cabd0286646031
