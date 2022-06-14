import { Request, Response, Router } from "express";

const router = Router();

router.post("/", (_: Request, res: Response) => {
  res.send("hello");
});

module.exports = router;
