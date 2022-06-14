import { Shipping } from "./Shipping";
import { Types } from "mongoose";
import User from "./User";
import OrderItem from "./OrderItem";

export default interface Order {
  shippingData: Shipping;
  items: Types.DocumentArray<OrderItem>;
  user: User;
}
