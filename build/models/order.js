"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    items: [{ name: String, quantity: Number, price: Number }],
    shippingData: {
        adress: {
            required: true,
        },
        city: {
            required: true,
        },
        province: {
            required: true,
        },
        zipCode: {
            required: true,
        },
        notes: String,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
    },
});
exports.Order = (0, mongoose_1.model)("Order", OrderSchema);
