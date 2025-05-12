import {
  insertTransaction,
  fetchAllTransactions,
  fetchTransactionById,
  changeTransactionStatus
} from '../data-access/db.js';

export const createTransactionService = async (data) => await insertTransaction(data);
export const getAllTransactionsService = async () => await fetchAllTransactions();
export const getTransactionByIdService = async (id) => await fetchTransactionById(id);
export const updateTransactionStatusService = async (id, status) => await changeTransactionStatus(id, status);
