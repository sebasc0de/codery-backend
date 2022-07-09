import { compareSync, hashSync } from "bcrypt";
import { generateJWT } from "../helpers/generateJWT";
import { Request, Response } from "express";
import { User } from "../models/user";
import { User as UserProps } from "../interfaces/User";

export const loginController = async (req: Request, res: Response) => {
  const { email, password }: UserProps = req.body;

  try {
    // Check if user exists
    const checkUser = await User.findOne({ email });
    if (!checkUser) return res.json({ msg: "El usuario no existe" });

    // Check the password concordance
    const compare = compareSync(password, checkUser.password);
    if (!compare) return res.json({ msg: "Usuario o contraseña no validos" });

    // Generate JWT
    const token = (await generateJWT(checkUser?.id)) as string;
    if (token)
      return res.json({
        email,
        suscription: checkUser.suscription,
        avatar: checkUser.avatar,
        token,
      });
  } catch (err) {}
};

export const addUser = async (req: Request, res: Response) => {
  let { name, password, email, avatar, suscription }: UserProps = req.body;

  // Encrypting the password
  password = hashSync(password, 10);

  try {
    const newUser = await User.create({
      name,
      email,
      password,
      avatar,
      suscription,
    });

    // Generate JWT
    const token = await generateJWT(newUser.id);
    if (token)
      return res.json({
        name: newUser.name,
        email: newUser.email,
        avatar: newUser?.avatar,
        suscription: newUser.suscription,
        token,
      });
  } catch (err) {
    console.log(err);
  }
};
