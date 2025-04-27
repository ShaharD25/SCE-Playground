const { getMonthlyReportService, getOverviewReportService } = require('../services/reportService');

// Controller to get monthly report
async function getMonthlyReport(req, res) {
  try {
    const customer = req.user.customer;
    const report = await getMonthlyReportService(customer);
    res.status(200).json(report);
  } catch (err) {
    console.error('Error fetching monthly report:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Controller to get overview report
async function getOverviewReport(req, res) {
  try {
    const customer = req.user.customer;
    const report = await getOverviewReportService(customer);
    res.status(200).json(report);
  } catch (err) {
    console.error('Error fetching overview report:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { getMonthlyReport, getOverviewReport };
