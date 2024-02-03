import bcrypt from "bcrypt";
import mongoose from "mongoose";
const users = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin", "author"],
    default: "user",
  },
  subscription: {
    type: String,
    enum: ["free", "premium"],
    default: "free",
  },
});

users.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 12);
  next();
});
export const UserModel = mongoose.model("users", users);
