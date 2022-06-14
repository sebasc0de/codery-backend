"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const server_1 = require("../models/server");
// Enviroment variables
(0, dotenv_1.config)();
// Server start
const server = new server_1.Server();
server.listen();
