import express from 'express';
import { forwardAuthRequests, forwardFinanceRequests, ping } from '../controllers/gatewayController.js';
const router = express.Router();

router.use('/', forwardAuthRequests);
router.use('/', forwardFinanceRequests);  
router.get('/', ping);

export default router;
