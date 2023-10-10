import { Router } from "express";
import { login } from "../../controllers/auth.controller.js";

const LoginRouter = Router();

LoginRouter.post("/", login);

export default LoginRouter;
