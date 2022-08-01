import { Response } from "express";
import { AuthInfoRequest } from "../interfaces/AuthInfoRequest";
import { Order as OrderProps } from "../interfaces/Order";
import { Order } from "../models/order";
import { User } from "../models/user";

export const createOrder = async (req: AuthInfoRequest, res: Response) => {
  const { items, shippingData }: OrderProps = req.body;
  try {
    const user = await User.findById(req.uuid);
    const newOrder = await Order.create({
      items,
      shippingData,
      user,
    });
    res.json(newOrder);
  } catch (err) {}
};
