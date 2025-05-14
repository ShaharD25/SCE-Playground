// authentication-service/src/routes/authRoutes.js
import { Router } from 'express';
import {
  signup,
  signin,
  validateToken,
  deleteUser
} from '../controllers/authController.js';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/validate-token', validateToken);
router.get('/ping', validateToken);
router.post('/ping', (req, res) => res.status(200).json({ message: 'pong' }));
router.get('/ping', (req, res) => res.status(200).json({ message: 'pong' }));

router.delete('/user', deleteUser);

export default router;
