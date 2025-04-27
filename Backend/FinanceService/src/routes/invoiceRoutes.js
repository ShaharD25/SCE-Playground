const express = require('express');
const router = express.Router();
const { createInvoice } = require('../controllers/invoiceController');
const authMiddleware = require('../../middleware/authMiddleware');

router.post('/', authMiddleware, createInvoice);

module.exports = router;
