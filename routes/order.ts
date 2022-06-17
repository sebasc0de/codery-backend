import { Request, Response, Router } from "express";
import { createOrder } from "../controllers";
import { validateJWT } from "../middlewares/validateJWT";

export const router = Router();

router.get("/", (_: Request, res: Response) => {
  res.send("helloo, i am order");
});

router.post("/create", validateJWT, createOrder);
