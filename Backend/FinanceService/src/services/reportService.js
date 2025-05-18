import {
  insertReport,
  fetchAllReports,
  fetchReportById,
  changeReportStatus,
  sequelize
} from '../data-access/db.js';

export const createReportService = async (data) => await insertReport(data);
export const getAllReportsService = async () => await fetchAllReports();
export const getReportByIdService = async (id) => await fetchReportById(id);
export const updateReportStatusService = async (id, status) => await changeReportStatus(id, status);
export const getSummaryReportService = async () => {
  const [transactionCountResult] = await sequelize.query('SELECT COUNT(*) AS transaction_count FROM transaction');
  const [incomeSumResult] = await sequelize.query('SELECT SUM(amount) AS total_income FROM transaction');
  const [avgPaymentResult] = await sequelize.query('SELECT AVG(amount) AS average_payment FROM transaction');

  return {
    transaction_count: Number(transactionCountResult[0].transaction_count),
    total_income: Number(incomeSumResult[0].total_income),
    average_payment: Number(avgPaymentResult[0].average_payment),
  };
};
export const getMonthlyReportService = async (month) => {
  const [rows] = await sequelize.query(`
    SELECT * FROM transaction
    WHERE TO_CHAR(created_at, 'YYYY-MM') = $1
    ORDER BY created_at DESC
  `, {
    bind: [month]
  });

  return rows;
};