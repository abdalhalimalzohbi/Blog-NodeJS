// models/blog.js
import mongoose from "mongoose";
const blogs = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  qr_code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'author',  // This specifies that the 'user' field refers to the 'User' model
    required: true,
  },
});
export const Blogs = mongoose.model("blogs", blogs);
