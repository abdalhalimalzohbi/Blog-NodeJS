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
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'tags',
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'author',  // This specifies that the 'user' field refers to the 'User' model
    //required: true,
  },
  subscription: {
    type: String,
    enum: ["free", "premium"],
    default: "free",
  },
});
export const BlogModel = mongoose.model("blogs", blogs);
