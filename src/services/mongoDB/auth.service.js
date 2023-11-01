import User from "../../models/general/user.model.js";
import { updateSeq } from "./seq.service.js";
import { hashPassword } from "../../configs/bcrypt.config.js";
import { getUuid } from "../../configs/uuid.config.js";

export const createUser = async (data) => {
  const seq = await updateSeq("User");
  const hashedPassword = await hashPassword(data.password);

  const newUser = new User({
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

export const updateUserById = async (_id, data) => {
  const existuser = await User.findOne({ _id });

  if (!existuser) {
    res.status(400);
    throw new Error("User not found");
  }

  if (data.eCode) {
    existuser.eCode = data.eCode;
  }
  if (data.password) {
    existuser.password = await hashPassword(data.password);
  }
  if (data.role) {
    existuser.role = data.role;
  }
  if (data.employee) {
    existuser.employee = data.employee;
  }
  if (data.projects) {
    existuser.projects = data.projects;
  }
  if (data.active) {
    existuser.active = data.active;
  }
  if (data.refreshToken) {
    existuser.refreshToken = data.refreshToken;
  }

  return await existuser.save();
};

export const getUserByECode = async (eCode) => {
  const user = await User.findOne({ eCode });
  return user;
};
export const getUserByUserName = async (username) => {
  const user = await User.findOne({ username });
  return user;
};
