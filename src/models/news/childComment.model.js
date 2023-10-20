import mongoose from "mongoose";
import BaseSchema from "../BaseSchema";

const ChildCommentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  content: {
    type: String,
    required: true,
  },
  like: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

ChildCommentSchema.add(BaseSchema);

const ChildComment = mongoose.model("ChildComment", ChildCommentSchema);

export default ChildComment;
