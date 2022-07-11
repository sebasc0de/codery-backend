import { sign } from "jsonwebtoken";

export interface JWTPayload {
  uuid: string;
}

export const generateJWT = (uuid: string) => {
  return new Promise((res, rej) => {
    const payload: JWTPayload = { uuid };
    sign(
      payload,
      process.env.JWT_HASH || "",
      { expiresIn: "3h" },
      (err, token) => {
        err ? rej(err) : res(token);
      }
    );
  });
};
