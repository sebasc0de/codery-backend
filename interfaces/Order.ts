import { Types } from "mongoose";
import { Shipping, User } from "./index";

export type Order = {
  shippingData: Shipping;
  items: Types.DocumentArray<OrderItem>;
  user: User;
  delivered: boolean;
  paidOut: boolean;
};

export type OrderItem = {
  productName: string;
  quantity: number;
  price?: number;
};
