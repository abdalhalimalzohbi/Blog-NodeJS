import mongoose from "mongoose";
const tags = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  article: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});
export const Tags = mongoose.model("tags", tags);
