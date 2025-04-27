const express = require('express');
const router = express.Router();
const { getMonthlyReport, getOverviewReport } = require('../controllers/reportController');
const authMiddleware = require('../../middleware/authMiddleware');

router.get('/monthly', authMiddleware, getMonthlyReport);
router.get('/overview', authMiddleware, getOverviewReport);

router.get('/', (req, res) => {
  res.send('Report service is alive!');
});


module.exports = router;
