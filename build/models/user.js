"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    archived: {
        type: Boolean,
        default: false,
    },
    avatar: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
    },
    role: {
        default: "FREE",
    },
});
exports.User = (0, mongoose_1.model)("User", UserSchema);
