const express = require('express');
const router = express.Router();
const { updateTransactionStatus } = require('../controllers/transactionController');
const authMiddleware = require('../../middleware/authMiddleware');

router.patch('/:id', authMiddleware, updateTransactionStatus);

module.exports = router;
