import { Request, Response } from 'express';
import catchAsync from '@src/utils/catch-async';
import { jobService } from '@src/services';
import { ApiResponse, httpStatus } from '@src/utils/api.utils';

const create = catchAsync(async (req: Request, res: Response) => {
  const { title, description, closingAt, isPublished } = req.body;
  const newJob = await jobService.create({
    title,
    description,
    closingAt,
    isPublished,
  });

  res
    .status(httpStatus.CREATED)
    .json(new ApiResponse('Created successfully', newJob));
});

const list = catchAsync(async (req: Request, res: Response) => {
  const jobs = await jobService.findMany();
  res.json({
    status: true,
    data: jobs,
    message: 'Retrieved successfully',
  });
});

const getCompany = catchAsync(async (req: Request, res: Response) => {});

const updateCompany = catchAsync(async (req: Request, res: Response) => {});

const deleteCompany = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await jobService.archive(id);

  res.status(204);
});

export default {
  create,
  list,
  getCompany,
  updateCompany,
  deleteCompany,
};
