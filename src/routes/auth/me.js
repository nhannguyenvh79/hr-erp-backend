import { Router } from "express";
import { getMe } from "../../controllers/auth.controller.js";
import { checkJwt } from "../../middlewares/jwt.mdw.js";

const MeRouter = Router();

MeRouter.use(checkJwt);
MeRouter.get("/", getMe);

export default MeRouter;
