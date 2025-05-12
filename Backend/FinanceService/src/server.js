// server.js
import express from 'express';
import dotenv from 'dotenv';
import invoiceRoutes from './routes/invoiceRoutes.js';
import transactionRoutes from './routes/transactionRoutes.js';
import receiptRoutes from './routes/receiptRoutes.js';
import reportRoutes from './routes/reportRoutes.js';

dotenv.config();

console.log('server.js started');

const app = express();
app.use(express.json());

console.log('loading routes...');

app.use('/', invoiceRoutes);
console.log('invoiceRoutes loaded');

app.use('/', transactionRoutes);
console.log('transactionRoutes loaded');

app.use('/', receiptRoutes);
console.log('receiptRoutes loaded');

app.use('/', reportRoutes);
console.log('reportRoutes loaded');

const PORT = process.env.PORT || 4002;
app.listen(PORT, () => {
  console.log(`FinanceService is running on port ${PORT}`);
});
