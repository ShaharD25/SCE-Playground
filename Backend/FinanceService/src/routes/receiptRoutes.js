const express = require('express');
const router = express.Router();
const { createReceipt } = require('../controllers/receiptController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, createReceipt);

router.get('/', (req, res) => {
  res.send('Receipt service is alive!');
});


module.exports = router;
