import { UserModel } from "../model/users.js";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import joi from "joi";

function generateToken(payload) {
  const token = Jwt.sign({ userId: payload }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });
  return token;
}

//signup/Public
export async function signup(req, res) {
  const signupValSchema = joi.object({
    name:joi.string()
    .min(3)
    .max(30)
    .required(),
    address:joi.string()
    .min(3)
    .max(30)
    .required(),
    phone:joi.string()
    .regex(/^[0-9\/\+]+$/)
    .min(8)
    .max(15)
    .required(),
    email:joi.string()
    .min(3)
    .max(30)
    .email()
    .required(),
    password: joi.string().optional(),
  });

  const validationResult = signupValSchema.validate(req.body);

    if (validationResult.error) {
      return res.status(400).json({ error: validationResult.error.details[0].message });
    }

  const { name, email, password,role,address,phone } = req.body;
  const user = await UserModel.create({ name, email, password,role,address,phone });
  const token = generateToken(user._id);
  res.status(201).json({ data: user, token });
}
//login/public
export async function login(req, res) {
  const user = await UserModel.findOne({ email: req.body.email });
  if (!user || !(await bcrypt.compare(req.body.password,user.password)))
    return res.send("invalid email or password");
  const token = generateToken(user._id);
  res.status(201).json({ data: user, token });
}
