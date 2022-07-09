import cors from "cors";
import express, { application } from "express";
import { AuthRouter, OrderRouter, ProductRouter } from "../routes/index";
import { connectMongoDB } from "../src/db";

export default class Server {
  app = application;
  port: number;

  constructor() {
    this.app = express();
    this.port = 8080;

    // Connect to DB
    connectMongoDB();

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();

    // Sockets
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  routes() {
    this.app.use("/auth", AuthRouter);
    this.app.use("/order", OrderRouter);
    this.app.use("/product", ProductRouter);
  }

  listen() {
    this.app.listen(this.port);
  }
}
