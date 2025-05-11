const {
  insertInvoice,
  fetchAllInvoices,
  fetchInvoiceById,
  changeInvoiceStatus
} = require('../data-access/db'); // Data Access Layer

// Service: Create a new invoice
const createInvoiceService = async (data) => await insertInvoice(data);

// Service: Get all invoices
const getAllInvoicesService = async () => await fetchAllInvoices();

// Service: Get a specific invoice by its ID
const getInvoiceByIdService = async (id) => await fetchInvoiceById(id);

// Service: Update the status of an invoice (e.g., mark as paid)
const updateInvoiceStatusService = async (id, status) => await changeInvoiceStatus(id, status);

module.exports = {
  createInvoiceService,
  getAllInvoicesService,
  getInvoiceByIdService,
  updateInvoiceStatusService
};
