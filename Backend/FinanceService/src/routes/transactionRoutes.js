// transactionRoutes.js
const express = require('express');
const {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransactionStatus
} = require('../controllers/transactionController');

const router = express.Router();

router.post('/', createTransaction);
router.get('/', getAllTransactions);
router.get('/:id', getTransactionById);
router.put('/:id/status', updateTransactionStatus);

module.exports = router;

