const express = require('express');
const router = express.Router();
const { getMonthlyReport, getOverviewReport } = require('../controllers/reportController');
const authMiddleware = require('../../middleware/authMiddleware');

router.get('/monthly', authMiddleware, getMonthlyReport);
router.get('/overview', authMiddleware, getOverviewReport);

module.exports = router;
