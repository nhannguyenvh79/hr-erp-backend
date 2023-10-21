import { Router } from "express";
import { getMeController } from "../../controllers/auth.controller.js";
import { checkJwt } from "../../middlewares/jwt.mdw.js";

const MeRouter = Router();

MeRouter.use(checkJwt);
MeRouter.get("/", getMeController);

export default MeRouter;
