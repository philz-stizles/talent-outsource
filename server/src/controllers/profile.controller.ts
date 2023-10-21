import { Request, Response } from 'express';
import catchAsync from '@src/utils/catch-async';
import { profileService } from '@src/services';
import { ApiResponse, httpStatus } from '@src/utils/api.utils';


const createOrUpdate = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
});

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const profile = await profileService.getProfile()
  res
    .status(httpStatus.CREATED)
    .json(new ApiResponse('User created successfully', profile));
});

export default { createOrUpdate, getProfile };
