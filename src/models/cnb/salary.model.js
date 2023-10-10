import mongoose from "mongoose";
import BaseSchema from "../BaseSchema";

const SalarySchema = new mongoose.Schema({
  author: {
    type: String,
    required: true,
  },
  infos: {
    type: [String],
  },
  totalPay: {
    type: Number,
    required: true,
  },
  forGov: {
    type: Number,
    required: true,
  },
  forEmployee: {
    type: Number,
    required: true,
  },
});

SalarySchema.add(BaseSchema);

const Salary = mongoose.model("Salary", SalarySchema);

export default Salary;
