import mongoose from "mongoose";
const users = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
   // unique:true,
  },
});
export const UserModel = mongoose.model("users", users);
