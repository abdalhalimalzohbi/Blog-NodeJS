import { UserModel } from "../../model/users.js";

export async function passwordValidation(req, res, next) {
  const { password } = req.body;
  const hasNumber = /\d/.test(password);
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasSymbols = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password);
  if (password.length < 11)
    return res.send("password must be at least of 12 characters");
  if (!hasLetter) return res.send("your password must have a letters");
  if (!hasSymbols)
    return res.send("your password must have a special character");
  if (!hasNumber) return res.send("your password must have a numbers");
  next();
}

export async function userValidation(req, res, next) {
  const users = await UserModel.findOne({ email: req.body.email });
if(!users)  next();
else res.send("choose another email !");
}

