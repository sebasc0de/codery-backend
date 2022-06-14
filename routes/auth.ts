import { Router } from "express";
import { check } from "express-validator";
import { loginController } from "../controllers/index";
import { fieldValidator } from "../middlewares/fieldValidator";

const router = Router();

router.post(
  "/",
  [check("email", "Debes ingresar un email valido").isEmail(), fieldValidator],
  loginController
);

module.exports = router;
