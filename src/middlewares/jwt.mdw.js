import { verifyAccessToken } from "../configs/jwt.config.js";
import asyncHandler from "express-async-handler";

export const checkJwt = asyncHandler((req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.status(400);
    throw new Error("Token not found");
  }

  const decode = verifyAccessToken(token);

  if (!decode) {
    res.status(400);
    throw new Error("Invalid token");
  }

  req.user = decode;

  next();
});
