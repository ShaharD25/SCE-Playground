const express = require('express');
const router = express.Router();
const { createInvoice } = require('../controllers/invoiceController');
const authMiddleware = require('../../middleware/authMiddleware');

router.post('/', authMiddleware, createInvoice);
router.get('/', (req, res) => {
  res.send('Invoice service is alive!');
});

module.exports = router;