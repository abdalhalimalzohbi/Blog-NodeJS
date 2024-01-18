import { TagModel } from "../model/tags.js";

export async function createTag(req, res) {
  const { text, article, title,description } = req.body;
  const test = await TagModel.create({ text, article, title,description });
  return res.send(test);
}
export async function deleteTag(req, res) {
  const  {id}  = req.params;
  const test = await TagModel.deleteOne({ _id:id });
  return res.send(test);
}
export async function findTagById(req, res) {
    const { id } = req.params;
    const test = await CommentModel.findById({ _id: id });
    return res.send(test);
  }
  export async function getAllTags(req,res) {
    const test = await CommentModel.find({});
    return res.send(test);
  }
