import { Router } from "express";
import { register } from "../../controllers/auth.controller.js";
import { validate } from "../../middlewares/validation.mdw.js";
import { registerSchema } from "../../validations/auth/register.validation.js";

const RegisterRouter = Router();

RegisterRouter.post("/", validate(registerSchema), register);

export default RegisterRouter;
