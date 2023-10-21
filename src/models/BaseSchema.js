import mongoose from "mongoose";

const BaseSchema = new mongoose.Schema(
  {
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default BaseSchema;
