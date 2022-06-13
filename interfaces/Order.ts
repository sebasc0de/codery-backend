import { OrderItem } from "./OrderItem";
import { Shipping } from "./Shipping";
import { User } from "./User";

export interface Order {
  shippingData: Shipping;
  items: OrderItem[];
  user: User;
}
