import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URI,
  ssl: { rejectUnauthorized: false },
});

// ----- INVOICES -----
export async function insertInvoice(data) {
  const { customer_id, amount, status, description } = data;
  const result = await pool.query(
    'INSERT INTO invoices (customer_id, amount, status, description) VALUES ($1, $2, $3, $4) RETURNING *',
    [customer_id, amount, status, description]
  );
  return result.rows[0];
}

export async function fetchAllInvoices() {
  const result = await pool.query('SELECT * FROM invoices');
  return result.rows;
}

export async function fetchInvoiceById(id) {
  const result = await pool.query('SELECT * FROM invoices WHERE id = $1', [id]);
  return result.rows[0];
}

export async function changeInvoiceStatus(id, status) {
  const result = await pool.query(
    'UPDATE invoices SET status = $1 WHERE id = $2 RETURNING *',
    [status, id]
  );
  return result.rows[0];
}

// ----- RECEIPTS -----
export async function insertReceipt(data) {
  const { customer_id, amount, description } = data;
  const result = await pool.query(
    'INSERT INTO receipts (customer_id, amount, description) VALUES ($1, $2, $3) RETURNING *',
    [customer_id, amount, description]
  );
  return result.rows[0];
}

export async function fetchAllReceipts() {
  const result = await pool.query('SELECT * FROM receipts');
  return result.rows;
}

export async function fetchReceiptById(id) {
  const result = await pool.query('SELECT * FROM receipts WHERE id = $1', [id]);
  return result.rows[0];
}

export async function changeReceiptStatus(id, status) {
  const result = await pool.query(
    'UPDATE receipts SET status = $1 WHERE id = $2 RETURNING *',
    [status, id]
  );
  return result.rows[0];
}


// ----- REPORTS -----
export async function insertReport(data) {
  const { title, content } = data;
  const result = await pool.query(
    'INSERT INTO reports (title, content) VALUES ($1, $2) RETURNING *',
    [title, content]
  );
  return result.rows[0];
}

export async function fetchAllReports() {
  const result = await pool.query('SELECT * FROM reports');
  return result.rows;
}

export async function fetchReportById(id) {
  const result = await pool.query('SELECT * FROM reports WHERE id = $1', [id]);
  return result.rows[0];
}
export async function changeReportStatus(id, status) {
  const result = await pool.query(
    'UPDATE reports SET status = $1 WHERE id = $2 RETURNING *',
    [status, id]
  );
  return result.rows[0];
}




// ----- TRANSACTIONS -----
export async function insertTransaction(data) {
  const { customer_id, amount, status, description } = data;
  const result = await pool.query(
    'INSERT INTO transactions (customer_id, amount, status, description) VALUES ($1, $2, $3, $4) RETURNING *',
    [customer_id, amount, status, description]
  );
  return result.rows[0];
}

export async function fetchAllTransactions() {
  const result = await pool.query('SELECT * FROM transactions');
  return result.rows;
}

export async function fetchTransactionById(id) {
  const result = await pool.query('SELECT * FROM transactions WHERE id = $1', [id]);
  return result.rows[0];
}

export async function changeTransactionStatus(id, status) {
  const result = await pool.query(
    'UPDATE transactions SET status = $1 WHERE id = $2 RETURNING *',
    [status, id]
  );
  return result.rows[0];
}
