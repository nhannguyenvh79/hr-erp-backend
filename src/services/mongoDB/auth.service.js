import User from "../../models/general/user.model.js";
import { updateSeq } from "./seq.service.js";
import { hashPassword } from "../../configs/bcrypt.config.js";
import { getUuid } from "../../configs/uuid.config.js";

export const createUser = async (data) => {
  const seq = await updateSeq("User");
  const hashedPassword = await hashPassword(data.password);

  const _id = getUuid();

  const newUser = new User({
    _id,
    ...data,
    password: hashedPassword,
  });

  return await newUser.save();
};

export const getUserById = async (_id) => {
  const user = await User.findOne({ _id })
    .populate({
      path: "employee",
      model: "Employee",
      select: "gmail name image department position ",
    })
    .populate({
      path: "role",
      model: "Role",
    })
    .select("-password");
  return user;
};

export const getUserByECode = async (eCode) => {
  const user = await User.findOne({ eCode });
  return user;
};
