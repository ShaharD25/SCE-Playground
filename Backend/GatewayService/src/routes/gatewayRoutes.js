import { Router } from 'express';
import { forwardAuthRequests, forwardProductsRequests, ping } from '../controllers/gatewayController.js';

const router = Router();

router.use('/auth', forwardAuthRequests);
router.use('/products', forwardProductsRequests);
router.get('/ping', ping);

export default router;
