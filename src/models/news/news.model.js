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
    type: String,
    required: true,
    ref: "Department",
  },
  like: [
    {
      type: String,
      ref: "User",
    },
  ],
  comments: [
    {
      type: String,
      ref: "Comment",
    },
  ],
});

NewsSchema.add(BaseSchema);

const News = mongoose.model("News", NewsSchema);

export default News;
