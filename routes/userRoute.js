import express from "express";

import { createUser, deleteUser,findUserById,getAllUsers } from "../controllers/users.js";


const userRoute = express();
userRoute.post("/create",createUser);
userRoute.delete("/delete/:id",deleteUser);
userRoute.get("/get/:id",findUserById);
userRoute.get("/getall",getAllUsers);

export default userRoute;
