import Employee from "../../models/general/employee.model.js";
import { getId } from "./seq.service.js";

export const createEmployee = async (data) => {
  const _id = await getId("Employee");

  const code = _id.toString().padStart(6, "0");

  data.eCode = data.department + code;
  data._id = _id;

  const newEmployee = new Employee(data);

  return await newEmployee.save();
};
