import { User } from "../models/user";

export const checkIfUserExists = async (email: string) => {
  const checkUser = await User.findOne({ email });
  if (checkUser) throw new Error("El usuario ya existe");
};
