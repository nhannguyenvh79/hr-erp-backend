import mongoose from "mongoose";
import { BaseKey } from "../configs/constant/dataKey.js";

const BaseSchema = new mongoose.Schema(
  {
    active: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default BaseSchema;
