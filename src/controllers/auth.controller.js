import expressAsyncHandler from "express-async-handler";
import { RESPONSE } from "../configs/constant/response.js";
import { createUser } from "../services/mongoDB/auth.service.js";
import User from "../models/general/user.model.js";
import Employee from "../models/general/employee.model.js";

export const login = expressAsyncHandler(async (req, res) => {});

export const getMe = expressAsyncHandler(async (req, res) => {});

export const register = expressAsyncHandler(async (req, res) => {
  const { eCode, password, role } = req.body;

  if (!eCode || !password || !role) {
    throw new Error("Missing required field");
  }

  const existEmployee = await Employee.findOne({
    eCode,
  });

  if (!existEmployee) {
    throw new Error("Employee not found");
  }

  const existUser = await User.findOne({
    eCode,
  });

  if (existUser) {
    throw new Error("User already exist");
  }

  const newUser = await createUser({
    eCode,
    password,
    role,
  });

  res.send(RESPONSE(newUser, "Create Successfull!"));
});
