import {
  createTransactionService,
  getAllTransactionsService,
  getTransactionByIdService,
  updateTransactionStatusService
} from '../services/transactionService.js';

export const createTransaction = async (req, res, next) => {
  try {
    const result = await createTransactionService(req.body);
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

export const getAllTransactions = async (req, res, next) => {
  try {
    const transactions = await getAllTransactionsService();
    res.status(200).json(transactions);
  } catch (error) {
    next(error);
  }
};

export const getTransactionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const transaction = await getTransactionByIdService(id);
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ message: 'Transaction not found' });
    }
  } catch (error) {
    next(error);
  }
};

export const updateTransactionStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updated = await updateTransactionStatusService(id, status);
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};
