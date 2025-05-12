import { Router } from 'express';
import {
  createReceipt,
  getAllReceipts,
  getReceiptById,
  updateReceiptStatus
} from '../controllers/receiptController.js';

const router = Router();

router.post('/', createReceipt);
router.get('/', getAllReceipts);
router.get('/:id', getReceiptById);
router.put('/:id/status', updateReceiptStatus);

export default router;
