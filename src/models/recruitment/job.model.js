import mongoose from "mongoose";
import BaseSchema from "../BaseSchema";

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirement: {
    type: String,
    required: true,
  },
  compensation: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  fields: {
    type: [String],
  },
  skills: {
    type: [String],
  },
  deadline: {
    type: Date,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  applicants: {
    type: [String],
  },
});

JobSchema.add(BaseSchema);

const Job = mongoose.model("Job", JobSchema);

export default Job;
