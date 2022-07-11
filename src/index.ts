import dotenv from "dotenv";
import Server from "../models/server";

// Enviroments variable
dotenv.config();

// Server start
const server = new Server();
server.listen();
