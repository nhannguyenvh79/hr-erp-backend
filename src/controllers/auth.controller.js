import expressAsyncHandler from "express-async-handler";
import { RESPONSE } from "../configs/constant/response.js";
import {
  createUser,
  getUserByECode,
  getUserById,
  updateUserById,
} from "../services/mongoDB/auth.service.js";
import { comparePassword } from "../configs/bcrypt.config.js";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../configs/jwt.config.js";
import {
  getEmployeeByEcode,
  getEmployeeById,
} from "../services/mongoDB/employee.service.js";

export const loginController = expressAsyncHandler(async (req, res) => {
  const { eCode, password } = req.body;

  const existUser = await getUserByECode(eCode);

  if (!existUser) {
    res.status(400);
    throw new Error("User not found");
  }

  const isMatch = await comparePassword(password, existUser.password);

  if (!isMatch) {
    res.status(400);
    throw new Error("Invalid password");
  }

  const payload = {
    _id: existUser._id,
    employee: existUser.employee,
    role: existUser.role,
  };

  const accessToken = await generateAccessToken(payload, 0.5);
  const refreshToken = await generateRefreshToken(payload);

  res.cookie("refresh-token", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    path: "/",
    secure: true,
    sameSite: "None",
  });

  const dataResponse = {
    accessToken,
  };

  res.send(RESPONSE(dataResponse, "Login Successfull!"));
});

export const getMeController = expressAsyncHandler(async (req, res) => {
  const { _id } = req.user;

  const user = await getUserById(_id);

  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  res.send(RESPONSE({ userInfo: user }, "Get Me Successfull!"));
});

export const registerController = expressAsyncHandler(async (req, res) => {
  const { eCode, password, role } = req.body;

  const existEmployee = await getEmployeeByEcode(eCode);

  if (!existEmployee) {
    res.status(400);
    throw new Error("Employee not found");
  }

  const existUser = await getUserByECode(eCode);

  if (existUser) {
    res.status(400);
    throw new Error("User already exist");
  }

  const newUser = await createUser({
    eCode,
    employee: existEmployee._id,
    password,
    role,
  });

  res.send(RESPONSE(newUser, "Create Successfull!"));
});

export const refreshTokenController = expressAsyncHandler(async (req, res) => {
  const refreshToken = req.cookies["refresh-token"];

  if (!refreshToken) {
    res.status(400);
    throw new Error("Refresh token not found");
  }

  const refreshDecode = await verifyRefreshToken(refreshToken);

  if (!refreshDecode) {
    res.status(400);
    throw new Error("Invalid refresh token");
  }

  const existUser = await getUserById(refreshDecode._id);

  if (!existUser) {
    res.status(400);
    throw new Error("User not found");
  }

  const payload = {
    _id: existUser._id,
    employee: existUser.employee,
    role: existUser.role,
  };

  const newAccessToken = await generateAccessToken(payload, 0.5);
  const newRefreshToken = await generateRefreshToken(payload);

  res.cookie("refresh-token", newRefreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
    path: "/",
    secure: true,
    sameSite: "None",
  });

  const dataResponse = {
    accessToken: newAccessToken,
  };

  res.send(RESPONSE(dataResponse, "Refresh Token Successfull!"));
});
