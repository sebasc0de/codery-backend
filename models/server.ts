import { AuthRouter, OrderRouter, ProductRouter } from "../routes/index";
import { connectMongoDB } from "../src/db";
import { createServer } from "http";
import { Server as IOServer } from "socket.io";
import cors from "cors";
import express, { application } from "express";
import { notificationSocket } from "../sockets/notifications";

export default class Server {
  app = application;
  port: number;
  httpServer;
  io;

  constructor() {
    this.app = express();
    this.httpServer = createServer(this.app);
    this.io = new IOServer(this.httpServer, {
      cors: { origin: "http://localhost:3000" },
    });
    this.port = 8080;

    // Connect to DB
    connectMongoDB();

    // Middlewares
    this.middlewares();

    // Routes
    this.routes();

    // Sockets
    this.sockets();
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

  sockets() {
    this.io.on("connection", notificationSocket);
  }

  listen() {
    this.httpServer.listen(this.port);
  }
}
