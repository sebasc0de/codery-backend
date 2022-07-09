import { Router } from "express";
import { check } from "express-validator";
import { createProduct } from "../controllers/product";
import { validateJWT } from "../middlewares/validateJWT";

export const router = Router();

router.get("/");
router.post(
  "/",
  [
    validateJWT,
    check("name", "El nombre es requerido").isEmpty(),
    check("price", "El precio es requerido").isEmpty(),
    check("price", "El precio debe ser un numero").isNumeric(),
  ],
  createProduct
);
