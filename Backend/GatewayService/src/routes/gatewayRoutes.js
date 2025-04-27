import { Router } from 'express';
import { forwardAuthRequests ,ping } from '../controllers/gatewayController.js';
import { forwardProductsRequests } from '../controllers/gatewayController.js'; 

const router = Router();

router.use('/auth', forwardAuthRequests);
router.use('/products', forwardProductsRequests);
router.get('/ping', ping);

export default router;
