import { NextFunction, Request, Response } from 'express';

const catchAsync = (
  callback: (req: Request, res: Response, next: NextFunction) => any
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    callback(req, res, next).catch(next);
  };
};

export default catchAsync;
