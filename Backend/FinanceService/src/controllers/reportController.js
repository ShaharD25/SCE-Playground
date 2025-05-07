const {
  createReportService,
  getAllReportsService,
  getReportByIdService,
  updateReportService
} = require('../services/reportService');

// Create a new financial report (e.g., monthly income & expenses)
const createReport = async (req, res, next) => {
  try {
    const report = await createReportService(req.body);
    res.status(201).json(report);
  } catch (error) {
    next(error);
  }
};

// Retrieve all reports from the system
const getAllReports = async (req, res, next) => {
  try {
    const reports = await getAllReportsService();
    res.json(reports);
  } catch (error) {
    next(error);
  }
};

// Retrieve a specific report by its ID
const getReportById = async (req, res, next) => {
  try {
    const report = await getReportByIdService(req.params.id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.json(report);
  } catch (error) {
    next(error);
  }
};

// Update an existing report (e.g., add new data or fix issues)
const updateReport = async (req, res, next) => {
  try {
    const updatedReport = await updateReportService(req.params.id, req.body);
    if (!updatedReport) {
      return res.status(404).json({ message: 'Report not found or could not be updated' });
    }
    res.json(updatedReport);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createReport,
  getAllReports,
  getReportById,
  updateReport
};
