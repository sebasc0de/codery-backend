import { AuthInfoRequest } from "../interfaces/AuthInfoRequest";
import { JWTPayload } from "../helpers/generateJWT";
import { NextFunction, Response } from "express";
import { User } from "../models/user";
import { verify } from "jsonwebtoken";

export const validateJWT = async (
  req: AuthInfoRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Auth") as string;

  // If token does not exists
  if (!token)
    return res.status(500).json({ msg: "El token es invalido o expiro" });

  // Verify token
  try {
    const { uuid } = verify(token, "M0GUmB0_H4sHfory0u") as JWTPayload;
    // Check if user exists
    const user = await User.findById(uuid);
    if ((user && user.archived) || !user)
      return res
        .status(401)
        .json({ msg: "El usuario no puede realizar esta accion" });
    req.uuid = uuid;
    next();
  } catch (err) {
    console.log(err);
  }
};
