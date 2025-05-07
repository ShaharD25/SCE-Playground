const {
  insertTransaction,
  fetchAllTransactions,
  fetchTransactionById,
  changeTransactionStatus
} = require('../data-access/db'); // Data Access Layer

// Service: Create a new transaction
const createTransactionService = async (data) => {
  return await insertTransaction(data);
};

// Service: Get all transactions
const getAllTransactionsService = async () => {
  return await fetchAllTransactions();
};

// Service: Get a transaction by its ID
const getTransactionByIdService = async (id) => {
  return await fetchTransactionById(id);
};

// Service: Update the status of a transaction
const updateTransactionStatusService = async (id, status) => {
  return await changeTransactionStatus(id, status);
};

module.exports = {
  createTransactionService,
  getAllTransactionsService,
  getTransactionByIdService,
  updateTransactionStatusService
};
