const pool = require('../data-access/db');

// Service to insert a new receipt
async function createReceiptService(customer, transaction_id) {
  const result = await pool.query(
    'INSERT INTO receipts (customer, transaction_id, created_at) VALUES ($1, $2, CURRENT_TIMESTAMP) RETURNING *',
    [customer, transaction_id]
  );
  return result.rows[0];
}

module.exports = { createReceiptService };
