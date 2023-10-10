import mongoose from "mongoose";
import { BaseKey } from "../configs/constant/dataKey.js";

const BaseSchema = new mongoose.Schema(
  {
    [BaseKey.id]: {
      type: String,
      required: true,
    },
    [BaseKey.active]: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default BaseSchema;
