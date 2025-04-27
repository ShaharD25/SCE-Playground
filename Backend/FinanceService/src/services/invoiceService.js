const pool = require('../data-access/db');

// Service to insert a new invoice
async function createInvoiceService(customer, amount) {
  const result = await pool.query(
    'INSERT INTO invoices (customer, amount, created_at) VALUES ($1, $2, CURRENT_TIMESTAMP) RETURNING *',
    [customer, amount]
  );
  return result.rows[0];
}

module.exports = { createInvoiceService };
