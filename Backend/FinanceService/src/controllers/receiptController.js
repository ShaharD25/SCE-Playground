const {
  createReceiptService,
  getAllReceiptsService,
  getReceiptByIdService,
  updateReceiptService
} = require('../services/receiptService');

// Create a new receipt (usually after a transaction is completed)
const createReceipt = async (req, res, next) => {
  try {
    const receipt = await createReceiptService(req.body);
    res.status(201).json(receipt);
  } catch (error) {
    next(error);
  }
};

// Retrieve all receipts from the database
const getAllReceipts = async (req, res, next) => {
  try {
    const receipts = await getAllReceiptsService();
    res.json(receipts);
  } catch (error) {
    next(error);
  }
};

// Retrieve a specific receipt by its ID
const getReceiptById = async (req, res, next) => {
  try {
    const receipt = await getReceiptByIdService(req.params.id);
    if (!receipt) {
      return res.status(404).json({ message: 'Receipt not found' });
    }
    res.json(receipt);
  } catch (error) {
    next(error);
  }
};

// Update an existing receipt (e.g., correct the content or status)
const updateReceipt = async (req, res, next) => {
  try {
    const updatedReceipt = await updateReceiptService(req.params.id, req.body);
    if (!updatedReceipt) {
      return res.status(404).json({ message: 'Receipt not found or could not be updated' });
    }
    res.json(updatedReceipt);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createReceipt,
  getAllReceipts,
  getReceiptById,
  updateReceipt
};
