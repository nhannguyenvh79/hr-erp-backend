import { Router } from "express";
import AuthRoute from "./auth/index.js";
import EmployeeRoute from "./employee/index.js";

const RootRoute = Router();

RootRoute.use("/auth", AuthRoute);
RootRoute.use("/employee", EmployeeRoute);

export default RootRoute;
