import { Request, Response } from 'express';
import catchAsync from '@src/utils/catch-async';
import { companyService } from '@src/services';
import { ApiResponse, httpStatus } from '@src/utils/api.utils';

const createCompany = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const newUser = await companyService.createCompany();

  res
    .status(httpStatus.CREATED)
    .json(new ApiResponse('User created successfully', newUser));
});

const getCompanies = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  // Login User.
  const companies = await companyService.getCompanies();

  // Success response.
  res.json({
    status: true,
    data: companies,
    message: 'Sign in successful',
  });
});

const getCompany = catchAsync(async (req: Request, res: Response) => {});

const updateCompany = catchAsync(async (req: Request, res: Response) => {});

const deleteCompany = catchAsync(async (req: Request, res: Response) => {
  const { email } = req.body;
  const user = await companyService.deleteCompany();
});

export default {
  createCompany,
  getCompanies,
  getCompany,
  updateCompany,
  deleteCompany,
};
