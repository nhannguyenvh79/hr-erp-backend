import mongoose from "mongoose";
import BaseSchema from "../BaseSchema.js";

export const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  eCode: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  currentAddress: {
    type: String,
    required: true,
  },
  nativeAddress: {
    type: String,
    required: true,
  },
  gmail: {
    type: String,
    required: true,
  },
  citizenId: {
    type: String,
    required: true,
  },
  dow: {
    type: String,
    required: true,
  },
  doo: {
    type: String,
    required: false,
    default: "",
  },
  education: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contract: {
    type: String,
    default: "",
  },
  level: {
    type: Number,
    default: 1,
  },
  payLevel: {
    type: Number,
    default: 1,
  },
  department: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

EmployeeSchema.add(BaseSchema);

const Employee = mongoose.model("Employee", EmployeeSchema);

export default Employee;
