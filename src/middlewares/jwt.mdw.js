import { jwtVerify } from "../configs/jwt.config.js";
import asyncHandler from "express-async-handler";

export const checkJwt = asyncHandler((req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    throw new Error("Token not found");
  }

  const decode = jwtVerify(token);

  if (!decode) {
    throw new Error("Invalid token");
  }

  req.user = decode;

  next();
});
