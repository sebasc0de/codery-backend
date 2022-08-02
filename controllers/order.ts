import { AuthInfoRequest } from "../interfaces/AuthInfoRequest";
import { Order } from "../models/order";
import { Order as OrderProps } from "../interfaces/Order";
import { Response } from "express";
import { User } from "../models/user";

export const createOrder = async (req: AuthInfoRequest, res: Response) => {
  const { items, shippingData, orderTotal }: OrderProps = req.body;
  const { restaurantName } = req.query;

  try {
    const user = await User.findOne({ name: restaurantName });
    const newOrder = await Order.create({
      items,
      shippingData,
      orderTotal,
      user,
    });
    res.json(newOrder);
  } catch (err) {
    console.log(err);
  }
};

export const getOrderById = async (req: AuthInfoRequest, res: Response) => {
  const { id } = req.params;
  try {
    const order = await Order.findById(id);
    res.json(order);
  } catch (err) {}
};
