const { createReceiptService } = require('../services/receiptService');

// Controller to handle receipt creation
async function createReceipt(req, res) {
  try {
    const { transaction_id } = req.body;
    const customer = req.user.customer;

    if (!transaction_id) {
      return res.status(400).json({ error: 'Missing transaction_id' });
    }

    const receipt = await createReceiptService(customer, transaction_id);
    res.status(201).json({ message: 'Receipt created successfully', receipt });
  } catch (err) {
    console.error('Error creating receipt:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { createReceipt };
