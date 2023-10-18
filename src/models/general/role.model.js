import mongoose from "mongoose";
import BaseSchema from "../BaseSchema.js";

export const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roleCode: {
    type: Number,
    default: 0,
  },
  authorities: {
    type: [String],
    default: [],
  },
});

RoleSchema.add(BaseSchema);

const Role = mongoose.model("Role", RoleSchema);

export default Role;
