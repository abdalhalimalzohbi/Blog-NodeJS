import { UserModel } from "../model/users.js";

export async function createUser(req, res) {
  const { name, address, phone, email } = req.body;
  const test = await UserModel.create({ name, address, phone, email });
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

