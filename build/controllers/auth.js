"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = exports.loginController = void 0;
const loginController = (req, res) => {
    const { email } = req.body;
    res.send(email);
};
exports.loginController = loginController;
const addUser = (req, res) => {
    const { email } = req.body;
    res.send(email);
};
exports.addUser = addUser;
