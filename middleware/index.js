import { UserModel } from "../model/users.js";
import Jwt from "jsonwebtoken";


export async function isAuthenticated(req, res, next) {
  // check if the token exist,if exist get it
  let token;
  if (req.headers.authorization)
    token = req.headers.authorization.split(" ")[1];
  if (!token) return res.send("you are not logged in");
  // verify token not expired,payload not changed
  const decoded = Jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log(decoded);
  // check if user exist
  const currentUser = await UserModel.findById(decoded.userId);
  if (!currentUser)
    return res.send("the user that belong to this token does not longer exist");
  req.user = currentUser;
  req.id=decoded.userId;
  console.log(currentUser);
  next();
}
//check for the userRole to see if i pass him to the next route or not
export function userRole(roles) {
  return async (req, res, next) => {
    if (roles.includes(req.user.role)) { 
      next();
    } else {
      return res.status(403).send("You do not have the required role.");
    }
  };
}
export function userSubscription(subscription) {
  return async (req, res, next) => {
    if (subscription.includes(req.user.subscription)) { 
      next();
    } else {
      return res.status(403).send("You do not have the required subscription.");
    }
  };
}
