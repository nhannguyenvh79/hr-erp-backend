import { Router } from "express";
import CreateRouter from "./create.js";

const EmployeeRoute = Router();

// EmployeeRoute.use("/", require("./create"));
EmployeeRoute.use("/create", CreateRouter);
// EmployeeRoute.use("/update", require("./create"));

export default EmployeeRoute;
