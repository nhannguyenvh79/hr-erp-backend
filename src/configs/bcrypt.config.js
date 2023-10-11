import bcrypt from "bcrypt";

const salt = 10;

export const hashPassword = async (rawPass) => {
  const hashPass = await bcrypt.hash(rawPass, salt);
  return hashPass;
};
export const comparePassword = async (pass, hashedPassword) => {
  const result = await bcrypt.compare(pass, hashedPassword);
  return result;
};
