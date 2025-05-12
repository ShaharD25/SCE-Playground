import express from 'express';
import {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransactionStatus
} from '../controllers/transactionController.js';

const router = express.Router();

router.get('/ping', (req, res) => res.send('pong'));

router.post('/transaction', createTransaction);
router.get('/transaction', getAllTransactions);
router.get('/transaction:id', getTransactionById);
router.put('/transaction:id/status', updateTransactionStatus);

export default router;



