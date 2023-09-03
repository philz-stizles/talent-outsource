import logger from '@src/config/logger';
import ApiError from '@src/error/api-error';
import { ApiResponse } from '@src/utils/api.utils';
import { Request, Response, NextFunction } from 'express';

const errorHandler = (
  error: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.error(error.message, error)
  const status = error.statusCode || 500;

  res.status(status).send(new ApiResponse(error.message, null, false));
};

export default errorHandler;
