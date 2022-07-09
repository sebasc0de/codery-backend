import { Request, Response } from "express";
import { Order as OrderProps } from "../interfaces/Order";
import { Order } from "../models/order";

export const createOrder = async (req: Request, res: Response) => {
  const order: OrderProps = req.body;
  try {
    const newOrder = await Order.create(order);
    res.json(newOrder);
  } catch (err) {}
};
