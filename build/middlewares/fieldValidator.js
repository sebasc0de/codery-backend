"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldValidator = void 0;
const express_validator_1 = require("express-validator");
const fieldValidator = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.json(errors);
    }
    next();
};
exports.fieldValidator = fieldValidator;
