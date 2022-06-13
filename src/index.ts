import { config } from "dotenv";
import { Server } from "../models/server";

// Enviroment variables
config();

// Server start
const server = new Server();
server.listen();
