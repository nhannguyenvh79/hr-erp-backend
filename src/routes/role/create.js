import { Router } from "express";
import { create } from "../../controllers/role.controller.js";
import { validate } from "../../middlewares/validation.mdw.js";
import { createRoleSchema } from "../../validations/role/createRole.validation.js";

const CreateRouter = Router();

CreateRouter.post("/", validate(createRoleSchema), create);

export default CreateRouter;
