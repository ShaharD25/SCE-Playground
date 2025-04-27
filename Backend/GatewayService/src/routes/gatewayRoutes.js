import { Router } from 'express';
import { forwardAuthRequests, forwardFinanceRequests, ping } from '../controllers/gatewayController.js';
const router = Router();

router.use('/finance', forwardFinanceRequests);  
router.use('/auth', forwardAuthRequests);
router.get('/ping', ping);

export default router;
