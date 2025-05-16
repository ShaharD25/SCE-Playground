// src/data-access/db.js

import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(process.env.DB_CONNECTION_STRING, {
  dialect: 'postgres',
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// ----- INVOICES -----
export async function insertInvoice(data) {
  const { customer_id, amount, status, description } = data;
  const [result] = await sequelize.query(
    'INSERT INTO invoices (customer_id, amount, status, description) VALUES ($1, $2, $3, $4) RETURNING *',
    { bind: [customer_id, amount, status, description], type: sequelize.QueryTypes.INSERT }
  );
  return result[0];
}

export async function fetchAllInvoices() {
  const [result] = await sequelize.query('SELECT * FROM invoices');
  return result;
}

export async function fetchInvoiceById(id) {
  const [result] = await sequelize.query('SELECT * FROM invoices WHERE id = $1', {
    bind: [id],
  });
  return result[0];
}

export async function changeInvoiceStatus(id, status) {
  const [result] = await sequelize.query(
    'UPDATE invoices SET status = $1 WHERE id = $2 RETURNING *',
    { bind: [status, id] }
  );
  return result[0];
}

// ----- RECEIPTS -----
export async function insertReceipt(data) {
  const { customer_id, amount, description } = data;
  const [result] = await sequelize.query(
    'INSERT INTO receipts (customer_id, amount, description) VALUES ($1, $2, $3) RETURNING *',
    { bind: [customer_id, amount, description] }
  );
  return result[0];
}

export async function fetchAllReceipts() {
  const [result] = await sequelize.query('SELECT * FROM receipts');
  return result;
}

export async function fetchReceiptById(id) {
  const [result] = await sequelize.query('SELECT * FROM receipts WHERE id = $1', {
    bind: [id],
  });
  return result[0];
}

export async function changeReceiptStatus(id, status) {
  const [result] = await sequelize.query(
    'UPDATE receipts SET status = $1 WHERE id = $2 RETURNING *',
    { bind: [status, id] }
  );
  return result[0];
}

// ----- REPORTS -----
export async function insertReport(data) {
  const { title, content } = data;
  const [result] = await sequelize.query(
    'INSERT INTO reports (title, content) VALUES ($1, $2) RETURNING *',
    { bind: [title, content] }
  );
  return result[0];
}

export async function fetchAllReports() {
  const [result] = await sequelize.query('SELECT * FROM reports');
  return result;
}

export async function fetchReportById(id) {
  const [result] = await sequelize.query('SELECT * FROM reports WHERE id = $1', {
    bind: [id],
  });
  return result[0];
}

export async function changeReportStatus(id, status) {
  const [result] = await sequelize.query(
    'UPDATE reports SET status = $1 WHERE id = $2 RETURNING *',
    { bind: [status, id] }
  );
  return result[0];
}

// ----- TRANSACTIONS -----
export async function insertTransaction(data) {
  const { customer_id, amount, status, description } = data;
  const [result] = await sequelize.query(
    'INSERT INTO transaction (customer_id, amount, status, description) VALUES ($1, $2, $3, $4) RETURNING *',
    { bind: [customer_id, amount, status, description] }
  );
  return result[0];
}

export async function fetchAllTransactions() {
  const [result] = await sequelize.query('SELECT * FROM transactions');
  return result;
}

export async function fetchTransactionById(id) {
  const [result] = await sequelize.query('SELECT * FROM transactions WHERE id = $1', {
    bind: [id],
  });
  return result[0];
}

export async function changeTransactionStatus(id, status) {
  const [result] = await sequelize.query(
    'UPDATE transactions SET status = $1 WHERE id = $2 RETURNING *',
    { bind: [status, id] }
  );
  return result[0];
}
