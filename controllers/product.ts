import { Product } from "../models/product";
import { Product as ProductProps } from "../interfaces/Product";
import { Response } from "express";
import { AuthInfoRequest } from "../interfaces/AuthInfoRequest";
import { User } from "../models/user";

export const createProduct = async (req: AuthInfoRequest, res: Response) => {
  const { name, price, url, image }: ProductProps = req.body;

  try {
    // Search user
    const user = await User.findById(req.uuid);
    const product = await Product.create({ name, price, url, image, user });

    if (!product || user?.archived)
      return res.status(404).json({ msg: "No se ha podido crear el producto" });

    return res.json(product);
  } catch (err) {
    res.json(err);
  }
};

export const getProducts = async (req: AuthInfoRequest, res: Response) => {
  // Search user
  const user = await User.findById(req.uuid);
  const products = await Product.find().where("user", user);

  res.json(products);
};
