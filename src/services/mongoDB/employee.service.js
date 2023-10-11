import Employee from "../../models/general/employee.model.js";
import { getId } from "./seq.service.js";

export const createEmployee = async (data) => {
  const _id = await getId("Employee");

  const code = _id.toString().padStart(6, "0");

  data._id = data.department + code;

  const newEmployee = new Employee(data);

  return await newEmployee.save();
};

export const getEmployeeById = async (_id) => {
  const employee = await Employee.findOne({ _id });
  return employee;
};
