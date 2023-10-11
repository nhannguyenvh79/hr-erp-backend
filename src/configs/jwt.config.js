import jwt from "jsonwebtoken";
import { getEnv } from "./env.config.js";

const priviteKey = getEnv.PRIVATEKEY;

export const jwtSign = (data, time) => {
  return jwt.sign(data, priviteKey, {
    expiresIn: time * 60 || "1h",
    algorithm: "HS256",
  });
};

export const jwtVerify = (token) => {
  return jwt.verify(token, priviteKey);
};
