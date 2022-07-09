"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectMongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectMongoDB = () => {
    mongoose_1.default
        .connect("mongodb+srv://admin:37598602abnsd@cluster0.ebwxx.mongodb.net/codery")
        .then(() => {
        console.log("connected to MongoDB");
    });
};
exports.connectMongoDB = connectMongoDB;
