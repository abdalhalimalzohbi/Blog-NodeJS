import express from "express";

import { createUser, deleteUser,findUserById,getAllUsers,updateUser,updatepassword,adminDeleteUser } from "../controllers/users.js";
import { isAuthenticated,userRole } from "../middleware/index.js";
import { makeUserAuthor } from "../controllers/users.js";
import { passwordValidation,userValidation } from "../utils//Validations/authValidators.js"

const userRoute = express();

userRoute.post("/",isAuthenticated,userRole(['admin','user','author']),passwordValidation,userValidation,createUser);
userRoute.delete("/:id",isAuthenticated,userRole(['user','author']),deleteUser);
userRoute.delete("Admin/:id",isAuthenticated,userRole(['admin']),adminDeleteUser);
userRoute.get("/:id",isAuthenticated,userRole(['admin','user','author']),findUserById);
userRoute.get("/",isAuthenticated,userRole(['admin','user','author']),getAllUsers);
userRoute.put("/:id",isAuthenticated,userRole(['admin','user','author']),passwordValidation,userValidation,updateUser)
userRoute.put("/changePassword/:id",isAuthenticated,userRole(['admin','user','author']),passwordValidation,updatepassword);
userRoute.put("/:id",isAuthenticated,userRole(['admin']),makeUserAuthor);

export default userRoute;
