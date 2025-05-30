import express from 'express';
import { forwardAuthRequests, forwardFinanceRequests, ping } from '../controllers/gatewayController.js';
const router = express.Router();

router.use('/auth', forwardAuthRequests);
router.use('/finance', forwardFinanceRequests);  
router.get('/ping', ping);

export default router;
