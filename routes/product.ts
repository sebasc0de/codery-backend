import { Router } from "express";
import { check } from "express-validator";
import {
  createProduct,
  getProducts,
  searchProducts,
} from "../controllers/product";
import { validateJWT } from "../middlewares/validateJWT";

export const router = Router();

// Get all products
router.get("/", [validateJWT], getProducts);

// Search products
router.get("/search", [validateJWT], searchProducts);

// Create new product
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
