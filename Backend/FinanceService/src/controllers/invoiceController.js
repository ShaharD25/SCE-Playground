const { createInvoiceService } = require('../services/invoiceService');

// Controller to handle invoice creation
async function createInvoice(req, res) {
  try {
    const { amount } = req.body;
    const customer = req.user.customer;

    if (!amount) {
      return res.status(400).json({ error: 'Missing amount' });
    }

    const invoice = await createInvoiceService(customer, amount);
    res.status(201).json({ message: 'Invoice created successfully', invoice });
  } catch (err) {
    console.error('Error creating invoice:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = { createInvoice };
