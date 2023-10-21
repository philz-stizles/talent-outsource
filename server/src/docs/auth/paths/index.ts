import signupTalent from './signup-talent';
import signupCompany from './signup-company';
import verifyOtp from './verify-otp';
import verifyToken from './verify-token';
import signin from './signin';
import refreshToken from './refresh-token';
import forgotPassword from './forgot-password';
import resetPassword from './reset-password';
import currentUser from './current-user';

export default {
  '/auth/talent-signup': {
    ...signupTalent,
  },
  '/auth/client-signup': {
    ...signupCompany,
  },
  '/auth/verify-otp': {
    ...verifyOtp,
  },
  '/auth/verify-token': {
    ...verifyToken,
  },
  '/auth/refresh-token': {
    ...refreshToken,
  },
  '/auth/signin': {
    ...signin,
  },
  '/auth/forgot-password': {
    ...forgotPassword,
  },
  '/auth/reset-password': {
    ...resetPassword,
  },
  '/auth/current-user': {
    ...currentUser,
  },
};
