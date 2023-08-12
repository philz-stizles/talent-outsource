import { Request, Response } from 'express';
import catchAsync from '@src/utils/catch-async';

const createOrUpdate = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
});

export default { createOrUpdate };
