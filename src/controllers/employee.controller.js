import asyncHandler from "express-async-handler";
import { createEmployee } from "../services/mongoDB/employee.service.js";
import Employee from "../models/general/employee.model.js";
import { RESPONSE } from "../configs/constant/response.js";

export const create = asyncHandler(async (req, res) => {
  let data = req.body;

  const existEmployee = await Employee.findOne({
    gmail: data.gmail,
  });

  if (existEmployee) {
    throw new Error("Employee already exist");
  }

  const newEmployee = await createEmployee(data);

  res.send(RESPONSE(newEmployee, "Create Successfull!"));
});
