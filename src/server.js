"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
require("express-async-errors");
var response_error_1 = require("./middleware/response-error");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(response_error_1.default);
app.listen(3333, function () {
    console.log("Server started on port 3333");
});
