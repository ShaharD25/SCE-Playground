import express from 'express';
import {
  createReport,
  getAllReports,
  getReportById,
  updateReportStatus
} from '../controllers/reportController.js';

const router = express.Router();

router.post('/', createReport);
router.get('/', getAllReports);
router.get('/:id', getReportById);
router.put('/:id/status', updateReportStatus);

export default router;
