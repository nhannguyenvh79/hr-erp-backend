import mongoose from "mongoose";
import BaseSchema from "../BaseSchema";

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  employees: [
    {
      type: String,
      ref: "Employee",
    },
  ],
});

DepartmentSchema.add(BaseSchema);

const Department = mongoose.model("Department", DepartmentSchema);

export default Department;
