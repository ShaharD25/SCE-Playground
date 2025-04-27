const pool = require('../data-access/db');

// Service to fetch monthly income report
async function getMonthlyReportService(customer) {
  const result = await pool.query(
    'SELECT SUM(amount) AS total_income FROM invoices WHERE customer = $1 AND EXTRACT(MONTH FROM created_at) = EXTRACT(MONTH FROM CURRENT_DATE)',
    [customer]
  );
  return result.rows[0];
}

// Service to fetch overall financial summary
async function getOverviewReportService(customer) {
  const result = await pool.query(
    'SELECT SUM(amount) AS total_income FROM invoices WHERE customer = $1',
    [customer]
  );
  return result.rows[0];
}

module.exports = { getMonthlyReportService, getOverviewReportService };
