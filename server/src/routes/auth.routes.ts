import express from 'express';
import { authController } from '@src/controllers';
import { authLimiter, validator } from '@src/middlewares';
import { authValidation } from '@src/validations';
import tokenRoutes from '@src/routes/otp.routes';
import config from '@src/config';

const router = express.Router();

// limit repeated failed requests to auth endpoints
if (config.env === 'production') {
  router.use(authLimiter);
}

router.post('/signup', validator(authValidation.signUp), authController.signUp);

router.post(
  '/client-signup',
  validator(authValidation.signUp),
  authController.signUpCompany
);

router.post(
  '/talent-signup',
  validator(authValidation.signUpTalent),
  authController.signUpTalent
);

router.post(
  '/verify-token',
  validator(authValidation.verifyToken),
  authController.verifyToken
);

router.post(
  '/verify-otp',
  validator(authValidation.verifyOtp),
  authController.verifyOtp
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
