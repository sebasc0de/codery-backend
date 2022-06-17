import { Schema, model, Model } from "mongoose";

const OrderSchema = new Schema<Order, Model<Order>>({
  items: [{ name: String, quantity: Number, price: Number }],
  shippingData: {
    adress: {
      required: true,
    },
    city: {
      required: true,
    },
    province: {
      required: true,
    },
    zipCode: {
      required: true,
    },
    notes: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Order = model("Order", OrderSchema);
