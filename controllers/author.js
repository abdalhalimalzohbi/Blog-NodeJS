import { AuthorModel } from "../model/authors.js";
import {authorValSchema} from "../utils/Validations/authorValidations.js"

export async function createAuthor(req, res) {
  const validationResult = authorValSchema.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ error: validationResult.error.details[0].message });
    }
  const { name, description, photo, user } = req.body;
  const test = await AuthorModel.create({ name, description, photo, user });
  return res.send(test);
}
export async function createAuthorProfile(req, res) {
  const profileifexist = await AuthorModel.findOne({ user: req.id });

  if (!profileifexist) {
    const { name, description, photo } = req.body;
    const test = await AuthorModel.create({
      name,
      description,
      photo,
      user: req.id,
    });
    return res.send(test);
  }
  return res.send("you have an author Profile");
}
export async function deleteAuthor(req, res) {
  const { id } = req.params;
  const test = await AuthorModel.deleteOne({ _id: id });
  return res.send(test);
}
export async function deleteAuthorProfile(req, res) {
  const { id } = req.params;
  const test = await AuthorModel.deleteOne({ _id: id, user: req.id });
  return res.send(test);
}
export async function findAuthorById(req, res) {
  const { id } = req.params;
  const test = await AuthorModel.findById({ _id: id });
  return res.send(test);
}
export async function getAllAuthors(req, res) {
  const test = await AuthorModel.find({});
  return res.send(test);
}
export async function updateAuthor(req, res) {
  const { name, description, email } = req.body;
  const { id } = req.params;
  const test = await AuthorModel.findOneAndUpdate(
    { _id: id }, //condition
    { name, description, email },
    { new: true } //the new:true to make the returned document after updating
  );
  return res.send(test);
}
export async function updateAuthorProfile(req, res) {
  const { name, description, email } = req.body;
  const { id } = req.params;
  const test = await AuthorModel.findOneAndUpdate(
    { _id: id,user:req.id },//condition
    { name, description, email },
    { new: true }//the new:true to make the returned document after updating
    
  ); 
  return res.send(test);
  

}
