import { Router } from "express";
import { createOrder } from "../controllers";
import { getOrderById } from "../controllers/order";

export const router = Router();

router.get("/:id", getOrderById);

router.post("/create", createOrder);
