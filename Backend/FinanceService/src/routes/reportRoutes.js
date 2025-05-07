const express = require('express');
const router = express.Router();

const {
  createReport,
  getAllReports,
  getReportById,
  updateReport
} = require('../controllers/reportController');

// Middleware placeholder – does not perform any authentication
const authMiddleware = require('../../middleware/authMiddleware');

// Create a new financial report
router.post('/', authMiddleware, createReport);

// Retrieve all reports
router.get('/', authMiddleware, getAllReports);

// Retrieve a single report by its ID
router.get('/:id', authMiddleware, getReportById);

// Update an existing report by its ID
router.patch('/:id', authMiddleware, updateReport);

module.exports = router;
