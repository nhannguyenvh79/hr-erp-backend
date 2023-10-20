import mongoose from "mongoose";
import BaseSchema from "../BaseSchema";

const ApplicantSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Job",
  },
  name: {
    type: String,
    required: true,
  },
  gmail: {
    type: String,
    required: true,
  },
  cv: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

ApplicantSchema.add(BaseSchema);

const Applicant = mongoose.model("Applicant", ApplicantSchema);

export default Applicant;
