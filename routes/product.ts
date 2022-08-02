import { Router } from "express";
import { check } from "express-validator";
import {
  createProduct,
  deleteProductById,
  getProducts,
  searchProducts,
} from "../controllers/product";
import { fieldValidator } from "../middlewares/fieldValidator";
import { validateJWT } from "../middlewares/validateJWT";

export const router = Router();

// Get all products
router.get("/", [validateJWT], getProducts);

// Search products
router.get("/search", searchProducts);

// Create new product
router.post(
  "/",
  [
    validateJWT,
    check("name", "El nombre es requerido").notEmpty(),
    check("price", "El precio es requerido").notEmpty(),
    check("price", "El precio debe ser un numero").isNumeric(),
    fieldValidator,
  ],
  createProduct
);

// Delete product by id
router.delete("/delete/:id", validateJWT, deleteProductById);
