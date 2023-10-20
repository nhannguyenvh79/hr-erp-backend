import mongoose from "mongoose";
import BaseSchema from "../BaseSchema";

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  department: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Department",
  },
  like: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

NewsSchema.add(BaseSchema);

const News = mongoose.model("News", NewsSchema);

export default News;
