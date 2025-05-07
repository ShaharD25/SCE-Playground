const express = require('express');
const router = express.Router();

const {
  createTransaction,
  updateTransactionStatus,
  getAllTransactions,
  getTransactionById
} = require('../controllers/transactionController');

// Middleware placeholder – currently does not enforce authentication
const authMiddleware = require('../../middleware/authMiddleware');

// Create a new transaction (e.g., after a user action or purchase)
router.post('/', authMiddleware, createTransaction);

// Update the status of a specific transaction (e.g., mark as paid)
router.patch('/:id', authMiddleware, updateTransactionStatus);

// Retrieve all transactions
router.get('/', authMiddleware, getAllTransactions);

// Retrieve a specific transaction by its ID
router.get('/:id', authMiddleware, getTransactionById);

module.exports = router;
