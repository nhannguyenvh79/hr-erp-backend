import { Router } from "express";
import { create } from "../../controllers/employee.controller.js";

const CreateRouter = Router();

CreateRouter.post("/", create);

export default CreateRouter;
