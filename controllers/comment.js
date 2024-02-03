import { CommentModel } from "../model/comments.js";

export async function createComment(req, res) {
  //check if the user has an a comment for this blog since it can only create one comment per blog
  //find from comment if there is comment with userid=req.user._id and blogid=req.params if there is no create
  const nbofcreatedcomments = await CommentModel.countDocuments({
    blog: req.params.blogid,
    user: req.id,
  });
  if (nbofcreatedcomments >= 1)
    return res.send("reached the maximum number of created comments");
  else {
    const test = await CommentModel.create({
      comment: req.body.comment,
      user: req.id,
      blog: req.params.blogid,
    });
    return res.send(test);
  }
}

export async function AdminDeleteComment(req, res) {
  //if he is admin he can delete the comment without the comparing the loggeduser id and the comment usercreated id
  const { id } = req.params;
    const test = await CommentModel.deleteOne({
      _id: id,
    });
    return res.send(test);
  }

export async function deleteComment(req, res) {
  const { id } = req.params;


  const test = await CommentModel.deleteOne({
    _id: id,
    user: req.id,
  });
  if (test.deletedCount === 0) {
    return res.status(400).send("error deleting the comment");
  }
  return res.send(test);
}



export async function findCommentById(req, res) {
  const { id } = req.params;
  const test = await CommentModel.findById({ _id: id });
  return res.send(test);
}
export async function getAllComments(req, res) {
  const test = await CommentModel.find({});
  console.log(test.blog);
  return res.send(test);
}

export async function updateComment(req, res) {
  const { id } = req.params;
  const { comment } = req.body;

  const test = await CommentModel.findOneAndUpdate(
    { _id: id,user:req.id }, //conditions the id of the comment matches the id of  the user
    { comment },
    { new: true } //returned document after updating
  );
  return res.send(test);
}
