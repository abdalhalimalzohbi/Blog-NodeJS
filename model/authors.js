import mongoose from "mongoose";

const AuthorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    
    description: {
      type: String,
      
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
      required: true,
    },
  },
  { timestamps: true }
);

export const AuthorModel = mongoose.model("Author", AuthorSchema);
