import {
  insertTransaction,
  fetchAllTransactions,
  fetchTransactionById,
  changeTransactionStatus,
  insertInvoice
} from '../data-access/db.js';


export const createTransactionService = async (data) => {
  const transaction = await insertTransaction(data);
  await insertInvoice(data); // 👈 יצירת חשבונית באופן אוטומטי אחרי יצירת עסקה
  return transaction;
};

export const getAllTransactionsService = async () => await fetchAllTransactions();
export const getTransactionByIdService = async (id) => await fetchTransactionById(id);
export const updateTransactionStatusService = async (id, status) => await changeTransactionStatus(id, status);
