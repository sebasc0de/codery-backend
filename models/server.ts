import express, { application } from "express";
import cors from "cors";

export class Server {
  app = application;
  port: number;
  constructor() {
    this.app = express();
    this.port = 8080;

    // Middlewares
    this.middlewares();

    // Routes

    // Sockets
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Listening on port 8080");
    });
  }
}
