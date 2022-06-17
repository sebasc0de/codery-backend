import { sign } from "jsonwebtoken";

export interface JWTPayload {
  uuid: string;
}

export const generateJWT = (uuid: string) => {
  return new Promise((res, rej) => {
    const payload: JWTPayload = { uuid };
    sign(payload, "M0GUmB0_H4sHfory0u", { expiresIn: "3h" }, (err, token) => {
      err ? rej(err) : res(token);
    });
  });
};
