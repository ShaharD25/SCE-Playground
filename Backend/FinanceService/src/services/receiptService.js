const {
  insertReceipt,
  fetchAllReceipts,
  fetchReceiptById,
  updateReceiptData
} = require('../data-access/db'); // Accessing DB layer

// Service: Create a new receipt
const createReceiptService = async (data) => {
  return await insertReceipt(data);
};

// Service: Get all receipts
const getAllReceiptsService = async () => {
  return await fetchAllReceipts();
};

// Service: Get a receipt by its ID
const getReceiptByIdService = async (id) => {
  return await fetchReceiptById(id);
};

// Service: Update a receipt with new data
const updateReceiptService = async (id, newData) => {
  return await updateReceiptData(id, newData);
};

module.exports = {
  createReceiptService,
  getAllReceiptsService,
  getReceiptByIdService,
  updateReceiptService
};

