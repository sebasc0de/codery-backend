import { Product } from "../models/product";
import { Product as ProductProps } from "../interfaces/Product";
import { Request, Response } from "express";

export const createProduct = async (req: Request, res: Response) => {
  const { name, price, url }: ProductProps = req.body;

  try {
    const loadProduct = await Product.create({ name, price, url });
    res.send(loadProduct);
  } catch (err) {
    res.json(err);
  }
};

// export const getProducts = async (req: Request, res: Response) => {};
