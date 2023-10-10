import mongoose from "mongoose";
import BaseSchema from "../BaseSchema.js";

export const UserSchema = new mongoose.Schema({
  eCode: {
    type: String,
    required: true,
    ref: "Employee",
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  projects: [{ type: String, ref: "Project" }],
});

UserSchema.add(BaseSchema);

const User = mongoose.model("User", UserSchema);

export default User;
