// export function product(req, res) {
//   //    console.log("Got a POST request for the homepage");
//   console.log(req.params);

//   //   console.log("");

//   res.send("Hello POST");
// }
// export function abd(req, res) {
//   console.log(req.params);
//   res.send("Hello POST");
// }
// export function deleteF(req, res) {
//   console.log("Got a DELETE request for /del_user");
//   res.send("Hello DELETE");
// }
import { CommentModel } from "../model/comments.js";

export async function createComment(req, res) {
  const { comment, user, blog } = req.body;
  const test = await CommentModel.create({ comment, user, blog });
  return res.send(test);
}
export async function deleteComment(req, res) {
  const  {id}  = req.params;
  const test = await CommentModel.deleteOne({ _id:id });
  return res.send(test);
}
export async function findCommentById(req, res) {
  const { id } = req.params;
  const test = await CommentModel.findById({ _id: id });
  return res.send(test);
}
export async function getAllComments(req,res) {
  const test = await CommentModel.find({});
  return res.send(test);
}

