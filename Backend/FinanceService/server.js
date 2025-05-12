// server.js
import express from 'express';
import dotenv from 'dotenv';

import invoiceRoutes from './src/routes/invoiceRoutes.js';
const transactionRoutes = require('./src/routes/transactionRoutes');
import receiptRoutes from './src/routes/receiptRoutes.js';
import reportRoutes from './src/routes/reportRoutes.js';

dotenv.config();

console.log('server.js started');

const app = express();
app.use(express.json());

console.log('loading routes...');

app.use('/invoices', invoiceRoutes);
console.log('invoiceRoutes loaded');

app.use('/transactions', transactionRoutes);
console.log('transactionRoutes loaded');

app.use('/receipts', receiptRoutes);
console.log('receiptRoutes loaded');

app.use('/reports', reportRoutes);
console.log('reportRoutes loaded');

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`FinanceService is running on port ${PORT}`);
});
