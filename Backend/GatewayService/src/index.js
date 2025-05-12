// gateway-service/index.js
import 'dotenv/config';
import express, { json } from 'express';
import { errorHandler } from './middleware/errorHandler.js';
import financeRoutes from './routes/gatewayRoutes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors({
  origin: 'https://sce-frontend.onrender.com',
  credentials: true
}));

app.use(express.json());


app.use('/finance', financeRoutes);


app.use(errorHandler);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Gateway service running on port: ${PORT}`);
});
