const express = require('express');
const router = express.Router();
const { createReceipt } = require('../controllers/receiptController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createReceipt);

module.exports = router;
