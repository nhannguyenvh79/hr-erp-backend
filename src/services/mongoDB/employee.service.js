import { getUuid } from "../../configs/uuid.config.js";
import Employee from "../../models/general/employee.model.js";
import { updateSeq } from "./seq.service.js";

export const createEmployee = async (data) => {
  //create eCode by department and seq
  const seq = await updateSeq("Employee");
  const code = seq.toString().padStart(6, "0");
  data.eCode = data.department + code;

  const _id = getUuid();
  data._id = _id;

  const newEmployee = new Employee(data);

  return await newEmployee.save();
};

export const getEmployeeById = async (_id) => {
  const employee = await Employee.findOne({ _id });
  return employee;
};

export const getEmployeeByEcode = async (eCode) => {
  const employee = await Employee.findOne({ eCode });
  return employee;
};
