import { Request, Response } from 'express';
import catchAsync from '@src/utils/catch-async';
import {
  authService,
  companyService,
  emailService,
  otpService,
  tokenService,
  userService,
} from '@src/services';
import { ApiResponse, httpStatus } from '@src/utils/api.utils';
import * as ObjectUtils from '@src/utils/object.utils';


const signUpClient = catchAsync(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const newUser = await userService.createUser(name, email, password);
  const newCompany = await companyService.createCompany();
  res
    .status(httpStatus.CREATED)
    .json(new ApiResponse('User created successfully', newUser));
});

const signUpTalent = catchAsync(async (req: Request, res: Response) => {
  const { name, email, password, source } = req.body;

  // Create a new user.
  const newUser = await userService.createUser(name, email, password);

  // Send verification email with Token.
  // const token = await tokenService.generateVerifyEmailToken(email);
  // await emailService.sendEmailVerification(email, token);

  // Send verification email with OTP.
  const otp = await otpService.generateOtp(email);
  await emailService.sendOTP(email, otp);

  res
    .status(httpStatus.CREATED)
    .json(
      new ApiResponse(
        'User created successfully',
        ObjectUtils.pick(newUser.toObject(), ['email', 'name', 'firstname', 'lastname'])
      )
    );
});

const signUp = catchAsync(async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const newUser = await userService.createUser(name, email, password);

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

const verifyToken = catchAsync(async (req: Request, res: Response) => {
  await authService.verifyEmailWithToken(req.query.token as string);
  res.status(httpStatus.NO_CONTENT).send();
});

const verifyOtp = catchAsync(async (req: Request, res: Response) => {
  const { email, code } = req.body;
  await authService.verifyOtp({ email, code });
  res.json({ status: true, message: 'Verification Successful', data: email });
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

const validateOtp = catchAsync(async (req: Request, res: Response) => {});

const disableOtp = catchAsync(async (req: Request, res: Response) => {});

export default {
  signUpClient,
  signUpTalent,
  signUp,
  verifyToken,
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
