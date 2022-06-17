export type User = {
  id: string;
  archived: boolean;
  password: string;
  avatar?: string;
  email: string;
  role: string;
  name: string;
};

export type Order = {
  shippingData: Shipping;
  items: Types.DocumentArray<OrderItem>;
  user: User;
};

export type Shipping = {
  adress: string;
  city: string;
  province: string;
  zipCode: string;
  notes: string;
};

export type OrderItem = {
  productName: string;
  quantity: number;
  price?: number;
};
