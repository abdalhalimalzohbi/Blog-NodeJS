import express from "express";
import { login, signup} from "../controllers/authController.js";
import { passwordValidation,userValidation } from "../utils/Validations/authValidators.js"

const authRoute =express();

authRoute.post("/signup",passwordValidation,userValidation,signup);
authRoute.post("/login",login);

export default authRoute;


