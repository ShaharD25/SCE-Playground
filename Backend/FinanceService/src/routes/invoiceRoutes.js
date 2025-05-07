const express = require('express');
const router = express.Router();

const {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  updateInvoiceStatus
} = require('../controllers/invoiceController');

// Middleware placeholder – does not perform authentication 
const authMiddleware = require('../../middleware/authMiddleware');

// Create a new invoice
router.post('/', authMiddleware, createInvoice);

// get all invoices
router.get('/', authMiddleware, getAllInvoices);

// get a specific invoice by its ID
router.get('/:id', authMiddleware, getInvoiceById);

// Update the status of a specific invoice (e.g., from "pending" to "paid")
router.patch('/:id', authMiddleware, updateInvoiceStatus);

module.exports = router;
