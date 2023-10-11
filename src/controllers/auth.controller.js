import expressAsyncHandler from "express-async-handler";
import { RESPONSE } from "../configs/constant/response.js";
import {
  createUser,
  getUserByEmployeeId,
  getUserById,
} from "../services/mongoDB/auth.service.js";
import { comparePassword } from "../configs/bcrypt.config.js";
import { jwtSign } from "../configs/jwt.config.js";
import { getEmployeeById } from "../services/mongoDB/employee.service.js";

export const login = expressAsyncHandler(async (req, res) => {
  const { employeeId, password } = req.body;

  const existUser = await getUserByEmployeeId(employeeId);

  if (!existUser) {
    throw new Error("User not found");
  }

  const isMatch = await comparePassword(password, existUser.password);

  if (!isMatch) {
    throw new Error("Invalid password");
  }

  const payload = {
    _id: existUser._id,
    employee: existUser.employee,
    role: existUser.role,
  };

  const jwt = await jwtSign(payload, 60);

  res.send(RESPONSE(jwt, "Login Successfull!"));
});

export const getMe = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;

  const user = await getUserById(_id);

  if (!user) {
    throw new Error("User not found");
  }

  res.send(RESPONSE(user, "Get Me Successfull!"));
});

export const register = expressAsyncHandler(async (req, res) => {
  const { employeeId, password, role } = req.body;

  const existEmployee = await getEmployeeById(employeeId);

  if (!existEmployee) {
    throw new Error("Employee not found");
  }

  const existUser = await getUserByEmployeeId(employeeId);

  if (existUser) {
    throw new Error("User already exist");
  }

  const newUser = await createUser({
    employee: employeeId,
    password,
    role,
  });

  res.send(RESPONSE(newUser, "Create Successfull!"));
});
