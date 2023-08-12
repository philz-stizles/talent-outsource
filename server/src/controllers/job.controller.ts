import { Request, Response } from 'express';
import catchAsync from '@src/utils/catch-async';
import { authService, tokenService, userService } from '@src/services';
import { ApiResponse, httpStatus } from '@src/utils/api.utils';

const createJob = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const newUser = await userService.createUser(email, password);

  res
    .status(httpStatus.CREATED)
    .json(new ApiResponse('User created successfully', newUser));
});

const getJobs = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // Login User.
  const user = await authService.signIn(email, password);

  // Generate token.
  const tokens = await tokenService.generateAuthTokens(user);

  // Success response.
  res.json({
    status: true,
    data: { user, tokens },
    message: 'Sign in successful',
  });
});

const getJob = catchAsync(async (req: Request, res: Response) => {});

const updateJob = catchAsync(async (req: Request, res: Response) => {});

const deleteJob = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;
  // Login User.
  const user = await authService.forgotPassword(email);
});

export default {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob,
};
