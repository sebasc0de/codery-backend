import { Schema, model } from "mongoose";
import { Order as OrderProps } from "../interfaces/Order";

const OrderSchema = new Schema<OrderProps>({
  items: [
    {
      name: String,
      quantity: Number,
      image: String,
      price: Number,
      itemTotal: Number,
    },
  ],
  shippingData: {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    notes: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  orderTotal: {
    type: Number,
    required: [true, "La suma total de la orden es requerida"],
  },
  delivered: {
    type: Boolean,
    default: false,
  },
  paidOut: {
    type: Boolean,
    default: false,
  },
});

export const Order = model("Order", OrderSchema);
