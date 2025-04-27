const pool = require('../data-access/db');

// Service to update transaction status
async function updateTransactionStatusService(id, status) {
  await pool.query(
    'UPDATE transactions SET status = $1 WHERE id = $2',
    [status, id]
  );
}

module.exports = { updateTransactionStatusService };
