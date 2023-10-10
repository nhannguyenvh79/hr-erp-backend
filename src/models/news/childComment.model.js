import mongoose from "mongoose";
import BaseSchema from "../BaseSchema";

const ChildCommentSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    ref: "User",
  },
  content: {
    type: String,
    required: true,
  },
  like: [
    {
      type: String,
      ref: "User",
    },
  ],
});

ChildCommentSchema.add(BaseSchema);

const ChildComment = mongoose.model("ChildComment", ChildCommentSchema);

export default ChildComment;
