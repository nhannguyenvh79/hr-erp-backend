import { Router } from "express";
import { loginController } from "../../controllers/auth.controller.js";
import { validate } from "../../middlewares/validation.mdw.js";
import { loginSchema } from "../../validations/auth/login.validation.js";

const LoginRouter = Router();

LoginRouter.post("/", validate(loginSchema), loginController);

export default LoginRouter;
