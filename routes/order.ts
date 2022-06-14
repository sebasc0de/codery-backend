import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (_: Request, res: Response) => {
  res.send("helloo, i am order");
});

module.exports = router;
