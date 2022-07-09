import express from "express";

declare global {
  namespace Express {
    interface Request {
      uuid: Record<string>;
    }
  }
}
