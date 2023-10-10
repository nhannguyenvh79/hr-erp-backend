import mongoose from "mongoose";
import BaseSchema from "../BaseSchema.js";

export const SeqSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  seq: {
    type: Number,
    default: 0,
  },
});

SeqSchema.add(BaseSchema);

const Seq = mongoose.model("Seq", SeqSchema);

export default Seq;
