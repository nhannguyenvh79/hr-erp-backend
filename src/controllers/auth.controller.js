import expressAsyncHandler from "express-async-handler";
import { RESPONSE } from "../configs/constant/response.js";
import {
  createUser,
  getUserByECode,
  getUserById,
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

  const accessToken = await generateAccessToken(payload, 0.5);
  const refreshToken = await generateRefreshToken(payload, 5);

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
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
    throw new Error("User not found");
  }

  res.send(RESPONSE({ userInfo: user }, "Get Me Successfull!"));
});

export const registerController = expressAsyncHandler(async (req, res) => {
  const { eCode, password, role } = req.body;

  const existEmployee = await getEmployeeByEcode(eCode);

  if (!existEmployee) {
    throw new Error("Employee not found");
  }

  const existUser = await getUserByECode(eCode);

  if (existUser) {
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
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    res.status(401);
    throw new Error("Refresh token not found");
  }

  const refreshDecode = await verifyRefreshToken(refreshToken);

  if (!refreshDecode) {
    res.status(401);
    throw new Error("Invalid refresh token");
  }

  const newPayload = {
    _id: refreshDecode._id,
    employee: refreshDecode.employee,
    role: refreshDecode.role,
  };

  const newAccessToken = await generateAccessToken(newPayload, 0.5);
  const newRefreshToken = await generateRefreshToken(newPayload, 5);

  res.cookie("refreshToken", newRefreshToken, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });

  res.send(
    RESPONSE({ accessToken: newAccessToken }, "Refresh Token Successfull!")
  );
});
