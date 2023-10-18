import { Router } from "express";
import AuthRoute from "./auth/index.js";
import EmployeeRoute from "./employee/index.js";
import RoleRoute from "./role/index.js";

const RootRoute = Router();

RootRoute.use("/auth", AuthRoute);
RootRoute.use("/employee", EmployeeRoute);
RootRoute.use("/role", RoleRoute);

export default RootRoute;
