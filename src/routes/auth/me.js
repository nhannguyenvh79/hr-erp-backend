import { Router } from "express";
import { getMe } from "../../controllers/auth.controller.js";
// import { jwtCheck } from "../../middlewares/jwt.js";

const MeRouter = Router();

// MeRouter.use(jwtCheck);
MeRouter.get("/", getMe);

export default MeRouter;
