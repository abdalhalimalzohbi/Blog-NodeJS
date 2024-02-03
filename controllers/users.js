import { UserModel } from "../model/users.js";
import bcrypt from "bcrypt";

export async function createUser(req, res) {
  const { name, address, phone, email,password } = req.body;
  const test = await UserModel.create({ name, address, phone, email,password });
  return res.send(test);
}
export async function adminDeleteUser(req, res) {
  const  {id}  = req.params;
  const test = await UserModel.deleteOne({ _id:id });
  return res.send(test);
}
export async function deleteUser(req, res) {
  const  {id}  = req.params;
  const test = await UserModel.deleteOne({ _id:id });
  return res.send(test);
}
export async function findUserById(req, res) {
    const { id } = req.params;
    const test = await UserModel.findById({ _id: id });
    return res.send(test);
  }
  export async function getAllUsers(req,res) {
    const test = await UserModel.find({});
    return res.send(test);
  }
  export async function updateUser(req, res) {
    const {name, address, phone, email } = req.body;
    const { id } = req.params;
    const test = await UserModel.findOneAndUpdate(
      { _id: id },//condition
      { name, address, phone, email },
      { new: true }//the new:true to make the returned document after updating
    ); 
    return res.send(test);
  }
  export async function updatepassword(req, res) {
    const { id } = req.params;
    const test = await UserModel.findOneAndUpdate(
      { _id: id },
      { password: await bcrypt.hash(req.body.password,12)},
      { new: true }
    );
    return res.send(test);
  }
  export async function makeUserAuthor(req, res) {
    const { id } = req.params;
    const test = await UserModel.findOneAndUpdate(
      { _id: id },//condition
      { role:'author' },
      { new: true }//the new:true to make the returned document after updating
    ); 
    return res.send(test);
  }

