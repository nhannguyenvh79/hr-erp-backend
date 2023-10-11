import { Router } from "express";
import { login } from "../../controllers/auth.controller.js";
import { validate } from "../../middlewares/validation.mdw.js";
import { loginSchema } from "../../validations/auth/login.validation.js";

const LoginRouter = Router();

LoginRouter.post("/", validate(loginSchema), login);

export default LoginRouter;
