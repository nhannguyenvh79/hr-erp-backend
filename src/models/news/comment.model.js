import mongoose from "mongoose";
import BaseSchema from "../BaseSchema";

const CommentSchema = new mongoose.Schema({
  newsId: {
    type: String,
    required: true,
    ref: "News",
  },

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

  childComments: [
    {
      type: String,
      required: true,
      ref: "ChildComment",
    },
  ],
});

CommentSchema.add(BaseSchema);

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
