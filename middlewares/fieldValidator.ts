import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

export const fieldValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json(errors);
  }

  return next();
};
