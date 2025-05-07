console.log('Connecting to DB:', process.env.DB_CONNECTION_STRING);

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DB_CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
});

//
// ─── TRANSACTION ─────────────────────────────────────────────
//

// Insert new transaction
async function insertTransaction(data) {
  const { customer_id, amount, status, description } = data;
  const result = await pool.query(
    `INSERT INTO transactions (customer_id, amount, status, description)
     VALUES ($1, $2, $3, $4)
     RETURNING *`,
    [customer_id, amount, status, description]
  );
  return result.rows[0];
}

// Get all transactions
async function fetchAllTransactions() {
  const result = await pool.query(`SELECT * FROM transactions`);
  return result.rows;
}

// Get transaction by ID
async function fetchTransactionById(id) {
  const result = await pool.query(`SELECT * FROM transactions WHERE id = $1`, [id]);
  return result.rows[0];
}

// Update transaction status
async function changeTransactionStatus(id, status) {
  const result = await pool.query(
    `UPDATE transactions SET status = $1 WHERE id = $2 RETURNING *`,
    [status, id]
  );
  return result.rows[0];
}

//
// ─── INVOICE ─────────────────────────────────────────────────
//

// Insert new invoice
async function insertInvoice(data) {
  const { customer_id, amount, due_date } = data;
  const result = await pool.query(
    `INSERT INTO invoices (customer_id, amount, due_date, created_at)
     VALUES ($1, $2, $3, CURRENT_TIMESTAMP)
     RETURNING *`,
    [customer_id, amount, due_date]
  );
  return result.rows[0];
}

// Get all invoices
async function fetchAllInvoices() {
  const result = await pool.query(`SELECT * FROM invoices`);
  return result.rows;
}

// Get invoice by ID
async function fetchInvoiceById(id) {
  const result = await pool.query(`SELECT * FROM invoices WHERE id = $1`, [id]);
  return result.rows[0];
}

// Update invoice status
async function changeInvoiceStatus(id, status) {
  const result = await pool.query(
    `UPDATE invoices SET status = $1 WHERE id = $2 RETURNING *`,
    [status, id]
  );
  return result.rows[0];
}

//
// ─── RECEIPT ─────────────────────────────────────────────────
//

// Insert new receipt
async function insertReceipt(data) {
  const { customer, transaction_id } = data;
  const result = await pool.query(
    `INSERT INTO receipts (customer, transaction_id, created_at)
     VALUES ($1, $2, CURRENT_TIMESTAMP)
     RETURNING *`,
    [customer, transaction_id]
  );
  return result.rows[0];
}

// Get all receipts
async function fetchAllReceipts() {
  const result = await pool.query(`SELECT * FROM receipts`);
  return result.rows;
}

// Get receipt by ID
async function fetchReceiptById(id) {
  const result = await pool.query(`SELECT * FROM receipts WHERE id = $1`, [id]);
  return result.rows[0];
}

// Update receipt data
async function updateReceiptData(id, data) {
  const { customer, transaction_id } = data;
  const result = await pool.query(
    `UPDATE receipts SET customer = $1, transaction_id = $2 WHERE id = $3 RETURNING *`,
    [customer, transaction_id, id]
  );
  return result.rows[0];
}

//
// ─── REPORT ──────────────────────────────────────────────────
//

// Insert new report
async function insertReport(data) {
  const { title, content } = data;
  const result = await pool.query(
    `INSERT INTO reports (title, content, created_at)
     VALUES ($1, $2, CURRENT_TIMESTAMP)
     RETURNING *`,
    [title, content]
  );
  return result.rows[0];
}

// Get all reports
async function fetchAllReports() {
  const result = await pool.query(`SELECT * FROM reports`);
  return result.rows;
}

// Get report by ID
async function fetchReportById(id) {
  const result = await pool.query(`SELECT * FROM reports WHERE id = $1`, [id]);
  return result.rows[0];
}

// Update report data
async function updateReportData(id, data) {
  const { title, content } = data;
  const result = await pool.query(
    `UPDATE reports SET title = $1, content = $2 WHERE id = $3 RETURNING *`,
    [title, content, id]
  );
  return result.rows[0];
}

//
// ─── EXPORTS ─────────────────────────────────────────────────
//

module.exports = {
  // Transaction
  insertTransaction,
  fetchAllTransactions,
  fetchTransactionById,
  changeTransactionStatus,

  // Invoice
  insertInvoice,
  fetchAllInvoices,
  fetchInvoiceById,
  changeInvoiceStatus,

  // Receipt
  insertReceipt,
  fetchAllReceipts,
  fetchReceiptById,
  updateReceiptData,

  // Report
  insertReport,
  fetchAllReports,
  fetchReportById,
  updateReportData
};
