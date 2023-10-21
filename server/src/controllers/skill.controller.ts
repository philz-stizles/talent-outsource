import { Request, Response } from 'express';
import catchAsync from '@src/utils/catch-async';
import { skillService } from '@src/services';
import { ApiResponse, httpStatus } from '@src/utils/api.utils';

const create = catchAsync(async (req: Request, res: Response) => {
  const newSkill = await skillService.create(req.body);

  res
    .status(httpStatus.CREATED)
    .json(new ApiResponse('Created successfully', newSkill));
});

const list = catchAsync(async (req: Request, res: Response) => {
  const skills = await skillService.findMany();

  res.json(new ApiResponse('Created successfully', skills));
});

const read = catchAsync(async (req: Request, res: Response) => {
  const skill = await skillService.findById(req.params.id);

  res.json(new ApiResponse('Created successfully', skill));
});

const update = catchAsync(async (req: Request, res: Response) => {
  const { name } = req.body;
  await skillService.update(req.params.id, {name});

  res.status(httpStatus.NO_CONTENT).send();
});

const archive = catchAsync(async (req: Request, res: Response) => {
  await skillService.archive(req.params.id);

  res.status(httpStatus.NO_CONTENT).send();
});

export default {
  create,
  list,
  read,
  update,
  archive,
};
