import express from 'express';
import { authController } from '@src/controllers';
import { validator } from '@src/middlewares';
import { authValidation } from '@src/validations';
import tokenRoutes from '@src/routes/token.routes'

const router = express.Router();

router.post('/signup', validator(authValidation.signUp), authController.signUp);

router.post(
  '/verify-email',
  validator(authValidation.verifyEmail),
  authController.verifyEmail
);

router.post('/signin', validator(authValidation.signIn), authController.signIn);

router.post('/refresh-token', authController.refreshToken);

router.post(
  '/forgot-password',
  validator(authValidation.forgotPassword),
  authController.forgotPassword
);

router.post('/reset-password', authController.resetPassword);

router.get('/current-user', authController.getCurrentUser);

router.use('/token', tokenRoutes);

export default router;
