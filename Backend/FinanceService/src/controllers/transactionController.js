const {
  createTransactionService,
  getAllTransactionsService,
  getTransactionByIdService,
  updateTransactionStatusService
} = require('../services/transactionService');

// Create a new transaction
const createTransaction = async (req, res, next) => {
  try {
    const transaction = await createTransactionService(req.body);
    res.status(201).json(transaction);
  } catch (error) {
    next(error);
  }
};

// Get all transactions
const getAllTransactions = async (req, res, next) => {
  try {
    const transactions = await getAllTransactionsService();
    res.json(transactions);
  } catch (error) {
    next(error);
  }
};

// Get a specific transaction by ID
const getTransactionById = async (req, res, next) => {
  try {
    const transaction = await getTransactionByIdService(req.params.id);
    if (!transaction) {
      return res.status(404).json({ message: 'Transaction not found' });
    }
    res.json(transaction);
  } catch (error) {
    next(error);
  }
};

// Update the status of a transaction
const updateTransactionStatus = async (req, res, next) => {
  try {
    const updatedTransaction = await updateTransactionStatusService(req.params.id, req.body.status);
    if (!updatedTransaction) {
      return res.status(404).json({ message: 'Transaction not found or could not be updated' });
    }
    res.json(updatedTransaction);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransactionStatus
};
