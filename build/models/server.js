"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importStar(require("express"));
const index_1 = require("../routes/index");
class Server {
    constructor() {
        this.app = express_1.application;
        this.app = (0, express_1.default)();
        this.port = 8080;
        // Middlewares
        this.middlewares();
        // Routes
        this.routes();
        // Sockets
    }
    middlewares() {
        this.app.use(cors_1.default);
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use("/auth", index_1.AuthRouter);
        this.app.use("/order", index_1.OrderRouter);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Listening on port 8080");
        });
    }
}
exports.Server = Server;
