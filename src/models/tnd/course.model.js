import mongoose from "mongoose";
import BaseSchema from "../BaseSchema";

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
  },
  description: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
  },
  project: {
    type: String,
  },
});

CourseSchema.add(BaseSchema);

const Course = mongoose.model("Course", CourseSchema);

export default Course;
