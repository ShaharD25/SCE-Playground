import { Router } from 'express';
import { forwardAuthRequests, forwardFinanceRequests, ping } from '../controllers/gatewayController.js';
const router = Router();

router.use('/auth', forwardAuthRequests);
router.use('/finance', forwardFinanceRequests);  
router.get('/ping', ping);

export default router;
