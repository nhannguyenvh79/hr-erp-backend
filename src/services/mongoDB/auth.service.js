import User from "../../models/general/user.model.js";
import { getId } from "./seq.service.js";
import { hashPassword } from "../../configs/bcrypt.config.js";

export const createUser = async (data) => {
  const hashedPassword = await hashPassword(data.password);

  const _id = await getId("User");

  const newUser = new User({
    ...data,
    _id,
    password: hashedPassword,
  });

  return await newUser.save();
};
