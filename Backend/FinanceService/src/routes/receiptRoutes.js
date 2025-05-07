const express = require('express');
const router = express.Router();

const {
  createReceipt,
  getAllReceipts,
  getReceiptById,
  updateReceipt
} = require('../controllers/receiptController');

// Middleware placeholder – currently does not enforce authentication
const authMiddleware = require('../../middleware/authMiddleware');

// Create a new receipt (usually after a transaction has been paid)
router.post('/', authMiddleware, createReceipt);

// Retrieve all receipts from the system
router.get('/', authMiddleware, getAllReceipts);

// Retrieve a specific receipt using its unique ID
router.get('/:id', authMiddleware, getReceiptById);

// Update the content or details of a specific receipt
router.patch('/:id', authMiddleware, updateReceipt);

module.exports = router;
