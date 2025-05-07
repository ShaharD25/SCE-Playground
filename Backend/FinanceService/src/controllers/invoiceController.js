const {
  createInvoiceService,
  getAllInvoicesService,
  getInvoiceByIdService,
  updateInvoiceStatusService
} = require('../services/invoiceService');

// Create a new invoice
const createInvoice = async (req, res, next) => {
  try {
    const invoice = await createInvoiceService(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    next(error);
  }
};

// Retrieve all invoices
const getAllInvoices = async (req, res, next) => {
  try {
    const invoices = await getAllInvoicesService();
    res.json(invoices);
  } catch (error) {
    next(error);
  }
};

// Retrieve a specific invoice by ID
const getInvoiceById = async (req, res, next) => {
  try {
    const invoice = await getInvoiceByIdService(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.json(invoice);
  } catch (error) {
    next(error);
  }
};

// Update the status of an invoice (e.g., from "unpaid" to "paid")
const updateInvoiceStatus = async (req, res, next) => {
  try {
    const updatedInvoice = await updateInvoiceStatusService(req.params.id, req.body.status);
    if (!updatedInvoice) {
      return res.status(404).json({ message: 'Invoice not found or could not be updated' });
    }
    res.json(updatedInvoice);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createInvoice,
  getAllInvoices,
  getInvoiceById,
  updateInvoiceStatus
};
