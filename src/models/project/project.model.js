import mongoose from "mongoose";
import BaseSchema from "../BaseSchema";

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  manager: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  image: {
    type: String,
  },
  attachment: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  department: [
    {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Department",
    },
  ],
  members: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },

  tasks: {
    type: [String],
  },
});

ProjectSchema.add(BaseSchema);

const Project = mongoose.model("Project", ProjectSchema);

export default Project;
