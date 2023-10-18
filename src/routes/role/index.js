import { Router } from "express";
import CreateRouter from "./create.js";

const RoleRoute = Router();

// EmployeeRoute.use("/", require("./create"));
RoleRoute.use("/create", CreateRouter);
// EmployeeRoute.use("/update", require("./create"));

export default RoleRoute;
