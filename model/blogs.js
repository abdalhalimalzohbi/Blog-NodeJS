// models/blog.js
import mongoose from "mongoose";
const blogs = new mongoose.Schema({
  img: {
    type: String,
    
  },
  link: {
    type: String,
    
  },
  qr_code: {
    type: String,
    
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },

  tags: {
    type: [String],
    
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'author',  // This specifies that the 'user' field refers to the 'User' model
    //required: true,
  },
});
export const BlogModel = mongoose.model("blogs", blogs);
