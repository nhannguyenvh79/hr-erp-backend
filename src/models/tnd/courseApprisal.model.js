import mongoose from "mongoose";
import BaseSchema from "../BaseSchema";

const CourseAppraisalSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.ObjectId,
    required: true,
    ref: "Course",
  },
  engage: {
    type: Number,
    required: true,
  },
  evaluate: {
    type: Number,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
});

CourseAppraisalSchema.add(BaseSchema);

const CourseAppraisal = mongoose.model(
  "CourseAppraisal",
  CourseAppraisalSchema
);

export default CourseAppraisal;
