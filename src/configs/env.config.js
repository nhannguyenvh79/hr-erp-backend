import "dotenv/config";

export const getEnv = (key) => {
  return process.env[key] || "";
};
