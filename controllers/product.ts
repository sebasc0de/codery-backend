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
  } catch (err) {}
};

export const getProducts = async (req: AuthInfoRequest, res: Response) => {
  // Search user
  const user = await User.findById(req.uuid);
  const products = await Product.find().where("user", user);

  res.json(products);
};

export const searchProducts = async (req: AuthInfoRequest, res: Response) => {
  const { productName, restaurant } = req.query;

  try {
    const regExp = new RegExp(`${productName}`, "i");

    const user = await User.findOne({ name: restaurant });
    const products = await Product.find()
      .and([{ name: regExp }])
      .where("user", user);

    res.json(products);
  } catch (err) {
    console.log(err);
  }
};

export const deleteProductById = async (
  req: AuthInfoRequest,
  res: Response
) => {
  const { id } = req.params;
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);
    console.log(deleteProduct);
    res.json({ msg: `Product deleted on ${id}` });
  } catch (err) {
    console.log(err);
  }
};
