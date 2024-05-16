"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function responseError(error, _request, response, _next) {
    console.error("Internal server error", error);
    return response.status(500).json({
        status: "error",
        message: error.message,
    });
}
exports.default = responseError;
