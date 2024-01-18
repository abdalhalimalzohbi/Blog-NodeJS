import mongoose from "mongoose";
const comment = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // This specifies that the 'user' field refers to the 'User' model
    required: true,
  },
  blog: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blog", // This specifies that the 'user' field refers to the 'User' model
    required: true,
  },
});

export const CommentModel = mongoose.model("comment", comment);
