const { updateTransactionStatusService, insertTransaction } = require('../services/transactionService');

// Controller to update transaction status
async function updateTransactionStatus(req, res) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ error: 'Missing status' });
    }

    await updateTransactionStatusService(id, status);
    res.status(200).json({ message: 'Transaction status updated successfully' });
  } catch (err) {
    console.error('Error updating transaction:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Controller to create a new transaction
async function createTransaction(req, res) {
  try {
    const { customer_id, amount, status, description } = req.body;

    if (!customer_id || !amount || !status || !description) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const newTransaction = await insertTransaction({
      customer_id,
      amount,
      status,
      description
    });

    res.status(201).json(newTransaction);
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  updateTransactionStatus,
  createTransaction
};
