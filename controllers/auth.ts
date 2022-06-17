import { compareSync, hashSync } from "bcrypt";
import { User } from "../models/user";
import { User as UserProps } from "../src/types";
import { Request, Response } from "express";
import { generateJWT } from "../helpers/generateJWT";

export const loginController = async (req: Request, res: Response) => {
  const { email, password }: UserProps = req.body;

  // Check if user exists
  const checkUser = await User.findOne({ email });
  if (!checkUser)
    res.status(400).json({ error: "Usuario o contraseña no validos" });

  // Check the password concordance
  if (checkUser) {
    const compare = compareSync(password, checkUser.password);
    !compare &&
      res.status(400).json({ error: "Usuario o contraseña no validos" });
  }

  // Generate JWT
  const token = (await generateJWT(checkUser?.id)) as string;
  if (token) res.json({ email, password, token });
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
