import { Router } from "express";
import { check } from "express-validator";
import { addUser, loginController } from "../controllers/index";
import { checkIfUserExists } from "../helpers/user-validator";
import { fieldValidator } from "../middlewares/fieldValidator";

export const router = Router();

router.post(
  "/login",
  [check("email", "Debes ingresar un email valido").isEmail(), fieldValidator],
  loginController
);

router.post(
  "/register",
  [
    check("email", "Debes ingresar un email valido").isEmail(),
    check("email", "El usuario ya existe").custom(checkIfUserExists),
    fieldValidator,
  ],
  addUser
);
