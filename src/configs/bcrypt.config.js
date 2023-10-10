import bcrypt from "bcrypt";

const salt = 10;

export const hashPassword = async (rawPass) => {
  const hashPass = await bcrypt.hash(rawPass, salt);
  return hashPass;
};
export const comparePassword = async (hashPass, hash) => {
  const result = await bcrypt.compare(hashPass, hash);
  return result;
};
