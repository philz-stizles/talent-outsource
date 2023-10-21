import express from 'express';
import { authController } from '@src/controllers';

const router = express.Router();

router.post('/generate', authController.generateOtp);
router.post('/verify', authController.verifyOtp);
router.post('/validate', authController.validateOtp);
router.post('disable', authController.disableOtp);

export default router;
