import "express-async-errors";
import express from "express";

import * as userController from "./controllers/user-controller";
import responseError from "./middleware/response-error";

const app = express();
app.use(express.json());
app.post("/user", userController.createUser);
app.use(responseError);

app.listen(3000, () => console.log("🚀"));
