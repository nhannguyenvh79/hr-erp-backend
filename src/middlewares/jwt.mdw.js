import { verifyAccessToken } from "../configs/jwt.config.js";
import asyncHandler from "express-async-handler";

export const checkJwt = asyncHandler((req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.status(401);
    throw new Error("Token not found");
  }

  let decode;
  try {
    decode = verifyAccessToken(token);
  } catch (error) {
    res.status(401);
    throw new Error(error.message);
  }

  if (!decode) {
    res.status(401);
    throw new Error("Invalid token");
  }

  req.user = decode;

  next();
});
