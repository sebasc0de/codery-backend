import cors from "cors";
import express, { application } from "express";

export default class Server {
  app = application;
  port: number;

  constructor() {
    this.app = express();
    this.port = 8080;

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
    this.app.use("/auth", require("../routes/auth"));
    this.app.use("/order", require("../routes/order"));
  }

  listen() {
    this.app.listen(this.port);
  }
}
