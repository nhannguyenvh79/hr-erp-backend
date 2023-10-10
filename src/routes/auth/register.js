import { Router } from "express";
import { register } from "../../controllers/auth.controller.js";

const RegisterRouter = Router();

RegisterRouter.post("/", register);

export default RegisterRouter;
