import { Router } from "express";
import { refreshTokenController } from "../../controllers/auth.controller.js";

const RefreshRouter = Router();

RefreshRouter.get("/", refreshTokenController);

export default RefreshRouter;
