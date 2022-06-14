"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = exports.AuthRouter = void 0;
var auth_1 = require("./auth");
Object.defineProperty(exports, "AuthRouter", { enumerable: true, get: function () { return auth_1.router; } });
var order_1 = require("./order");
Object.defineProperty(exports, "OrderRouter", { enumerable: true, get: function () { return order_1.router; } });
