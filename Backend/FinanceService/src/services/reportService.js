const {
  insertReport,
  fetchAllReports,
  fetchReportById,
  updateReportData
} = require('../data-access/db'); // Accessing the DB layer

// Service: Create a new financial report
const createReportService = async (data) => await insertReport(data);

// Service: Get all financial reports
const getAllReportsService = async () => await fetchAllReports();

// Service: Get a single report by ID
const getReportByIdService = async (id) => await fetchReportById(id);

// Service: Update report data (e.g., fix or add details)
const updateReportService = async (id, updatedData) => await updateReportData(id, updatedData);

module.exports = {
  createReportService,
  getAllReportsService,
  getReportByIdService,
  updateReportService
};
