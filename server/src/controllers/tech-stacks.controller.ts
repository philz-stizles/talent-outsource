import { Request, Response } from 'express';
import catchAsync from '@src/utils/catch-async';
import { techStackService } from '@src/services';
import { ApiResponse, httpStatus } from '@src/utils/api.utils';

const create = catchAsync(async (req: Request, res: Response) => {
  const newTechStack = await techStackService.create(req.body);

  res
    .status(httpStatus.CREATED)
    .json(new ApiResponse('Created successfully', newTechStack));
});

const list = catchAsync(async (req: Request, res: Response) => {
  const techStacks = await techStackService.find({});

  res.json(new ApiResponse('Created successfully', techStacks));
});

const read = catchAsync(async (req: Request, res: Response) => {
  const techStack = await techStackService.findById(req.params.id);

  res.json(new ApiResponse('Created successfully', techStack));
});

const update = catchAsync(async (req: Request, res: Response) => {
  const { name } = req.body;
  await techStackService.update(req.params.id, {name});

  res.status(httpStatus.NO_CONTENT).send();
});

const archive = catchAsync(async (req: Request, res: Response) => {
  await techStackService.archive(req.params.id);

  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  create,
  list,
  read,
  update,
  archive,
};
