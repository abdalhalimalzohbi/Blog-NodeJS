import { AuthorModel } from "../model/authors.js";

export async function createAuthor(req, res) {
  const { name, description, email } = req.body;
  const test = await AuthorModel.create({ name, description, email });
  return res.send(test);
}
export async function deleteAuthor(req, res) {
  const { id } = req.params;
  const test = await AuthorModel.deleteOne({ _id: id });
  return res.send(test);
}
export async function findAuthorById(req, res) {
  const { id } = req.params;
  const test = await AuthorModel.findById({ _id: id });
  return res.send(test);
}
export async function getAllAuthors(req,res) {
  const test = await AuthorModel.find({});
  return res.send(test);
}
export async function updateAuthor(req, res) {
  const { _id,name, description, email } = req.body;
  const test = await AuthorModel.findOneAndUpdate(req._id,{ name, description, email });
  return res.send(test);
}
