import { Request, Response } from "express";

export const loginController = (_: Request, res: Response) => {
  res.send("Hello, i am login controller");
};
