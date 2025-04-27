const pool = require('../../db'); // החיבור לדאטאבייס

// Service to update transaction status
const updateTransactionStatusService = async (id, status) => {
  const query = 'UPDATE transactions SET status = $1 WHERE id = $2';
  const values = [status, id];
  await pool.query(query, values);
};

// Service to insert a new transaction
const insertTransaction = async ({ customer_id, amount, status, description }) => {
  const query = `
    INSERT INTO transactions (customer_id, amount, status, description, created_at)
    VALUES ($1, $2, $3, $4, NOW())
    RETURNING *;
  `;

  const values = [customer_id, amount, status, description];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

module.exports = {
  updateTransactionStatusService,
  insertTransaction
};
