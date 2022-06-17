import { hashSync, compareSync } from "bcrypt";
import { User } from "../models/user";
import { User as UserProps } from "../src/types";
import { Request, Response } from "express";

export const loginController = async (req: Request, res: Response) => {
  const { email, password }: UserProps = req.body;

  // Check if user exists

  // Check the password concordance

  // Validate JWT

  res.send(email);
};

export const addUser = async (req: Request, res: Response) => {
  let { password, email }: UserProps = req.body;

  // Encrypting the password
  password = hashSync(password, 10);

  try {
    const newUser = await User.create({ email, password });
    res.json({ msg: "Tu cuenta ha sido creada con exito", newUser });
  } catch (err) {
    console.log(err);
  }
};
