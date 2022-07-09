import { Schema, model } from "mongoose";
import { Product as ProductProps } from "../interfaces/Product";

const ProductSchema = new Schema<ProductProps>({
  name: {
    type: String,
    required: [true, "El nombre es requerido"],
  },
  price: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

export const Product = model("Product", ProductSchema);
