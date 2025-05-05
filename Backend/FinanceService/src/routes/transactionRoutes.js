const express = require('express');
const router = express.Router();
const { updateTransactionStatus,createTransaction } = require('../controllers/transactionController');
const authMiddleware = require('../../middleware/authMiddleware');

router.patch('/:id', authMiddleware, updateTransactionStatus);
router.post('/', authMiddleware, createTransaction);


router.get('/', (req, res) => {
  res.send('Transaction service is alive!');
});

module.exports = router;