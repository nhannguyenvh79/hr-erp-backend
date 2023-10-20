import mongoose from "mongoose";
import BaseSchema from "../BaseSchema";

const CommentSchema = new mongoose.Schema({
  newsId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "News",
  },

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

  childComments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "ChildComment",
    },
  ],
});

CommentSchema.add(BaseSchema);

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
