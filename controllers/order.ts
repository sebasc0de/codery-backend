import { Request, Response } from "express";

export const createOrder = async (req: Request, res: Response) => {
  const body = req.body;
  res.send(body);
};
