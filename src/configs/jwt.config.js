import jwt from "jsonwebtoken";
import { getEnv } from "./env.config.js";

const AccessTokenKey = getEnv.PRIVATEKEY;
const RefreshTokenKey = getEnv.REFRESH_PRIVATEKEY;

export const generateAccessToken = (data, time) => {
  return jwt.sign(data, AccessTokenKey, {
    expiresIn: time * 60 || "1h",
    algorithm: "HS256",
  });
};

export const verifyAccessToken = (token) => {
  return jwt.verify(token, AccessTokenKey);
};

export const generateRefreshToken = (data, time) => {
  return jwt.sign(data, RefreshTokenKey, {
    expiresIn: time * 60 || "1h",
    algorithm: "HS256",
  });
};

export const verifyRefreshToken = (token) => {
  return jwt.verify(token, RefreshTokenKey);
};
