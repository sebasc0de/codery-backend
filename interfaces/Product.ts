import { User } from "../interfaces/User";
export interface Product {
  id: string;
  name: string;
  price: number;
  url: string;
  image: string;
  user: User;
}
