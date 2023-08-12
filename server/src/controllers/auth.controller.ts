import { Request, Response } from 'express';
import catchAsync from '@src/utils/catch-async';
import {
  authService,
  emailService,
  tokenService,
  userService,
} from '@src/services';
import { ApiResponse, httpStatus } from '@src/utils/api.utils';

const signUp = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const newUser = await userService.createUser(email, password);

  res
    .status(httpStatus.CREATED)
    .json(new ApiResponse('User created successfully', newUser));
});

const resendEmailVerification = catchAsync(
  async (req: Request, res: Response) => {
    const { email } = req.body;
    const token = await tokenService.generateVerifyEmailToken(email);
    await emailService.sendEmailVerification(email, token);

    res.status(httpStatus.NO_CONTENT).send();
  }
);

const verifyEmail = catchAsync(async (req: Request, res: Response) => {
  await authService.verifyEmail(req.query.token as string);
  res.status(httpStatus.NO_CONTENT).send();
});

const signIn = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // Sign in user.
  const user = await authService.signIn(email, password);

  // Generate user token.
  const tokens = await tokenService.generateAuthTokens(user);

  // Success response.
  res.json({
    status: true,
    data: { user, tokens },
    message: 'Sign in successful',
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {});

const signOut = catchAsync(async (req: Request, res: Response) => {
  await authService.signOut(req.body.refreshToken);

  res.status(httpStatus.NO_CONTENT).send();
});

const forgotPassword = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;
  const token = await tokenService.generateResetPasswordToken(email);
  await emailService.sendResetPassword(email, token);

  res.status(httpStatus.NO_CONTENT).send();
});

const resetPassword = catchAsync(async (req: Request, res: Response) => {
  await authService.resetPassword(req.query.token as string, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

const getCurrentUser = catchAsync(async (req: Request, res: Response) => {});

const generateOtp = catchAsync(async (req: Request, res: Response) => {});

const verifyOtp = catchAsync(async (req: Request, res: Response) => {});

const validateOtp = catchAsync(async (req: Request, res: Response) => {});

const disableOtp = catchAsync(async (req: Request, res: Response) => {});

export default {
  signUp,
  verifyEmail,
  resendEmailVerification,
  signIn,
  refreshToken,
  forgotPassword,
  resetPassword,
  getCurrentUser,
  generateOtp,
  verifyOtp,
  validateOtp,
  disableOtp,
  signOut,
};
