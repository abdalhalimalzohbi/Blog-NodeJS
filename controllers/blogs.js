import { BlogModel } from "../model/blogs.js";
import { AuthorModel } from "../model/authors.js";

export async function createBlog(req, res) {
  //get the author id from author table has userID=user id that loggedIn
  //create blog with all field including the authorId Above
  const Author = await AuthorModel.findOne({ user: req.id });
  const author = Author._id.toString();
  const img = req.file.path;
  const { link, qr_code, description, content, tags, subscription } = req.body;
  const test = await BlogModel.create({
    img,
    link,
    qr_code,
    description,
    content,
    tags,
    author,
    subscription,
  });
  return res.send(test); 
}
export async function deleteBlog(req, res) {
  //find the author of this blog using findbyid and the id in params
  //get the author id of the author that logged in using findone with condition user=req.id
  //compare if true delete if not "not authorized"
  const { id } = req.params;
  const authorDoc = await AuthorModel.findOne({ user: req.id });
  const authorLogged = authorDoc._id.toString();
  const test = await BlogModel.deleteOne({ _id: id, author: authorLogged });
  return res.send(test.acknowledged);
}
export async function adminDeleteBlog(req, res) {
  const { id } = req.params;
  const test = await BlogModel.deleteOne({ _id: id });
  return res.send(test);
}
export async function findBlogById(req, res) {
  const { id } = req.params;
  const test = await BlogModel.findById({ _id: id });
  return res.send(test);
}
export async function freeFindBlogById(req, res) {
  const { id } = req.params;
  const test = await BlogModel.findOne({ _id: id, subscription: "free" });
  return res.send(test);
}
export async function freeGetAllBlogs(req, res) {
  const pagenumber = req.query.page;
  const nbofblogs_in_page = 2;
  const skippedblogs = nbofblogs_in_page * (pagenumber - 1);
  const blogsorting = req.query.sort;
  const test = await BlogModel.find({ subscription: "free" })
    .limit(nbofblogs_in_page)
    .skip(skippedblogs)
    .sort(blogsorting);
  return res.send(test);
}
export async function getAllBlogs(req, res) {
  const pagenumber = req.query.page;
  const nbofblogs_in_page = 2;
  const skippedblogs = nbofblogs_in_page * (pagenumber - 1);
  const blogsorting = req.query.sort;
  const test = await BlogModel.find({})
    .limit(nbofblogs_in_page)
    .skip(skippedblogs)
    .sort(blogsorting);
  return res.send(test);
}
export async function allGetAllBlogs(req, res) {
  const pagenumber = req.query.page;
  const nbofblogs_in_page = 2;
  const skippedblogs = nbofblogs_in_page * (pagenumber - 1);

  const test = await BlogModel.aggregate([
    {
      $match: {
        $expr: {
          $eq: ["$subscription", req.user.subscription],
        },
      },
    },
    {
      $limit: nbofblogs_in_page,
    },
    {
      $skip: skippedblogs,
    },
  ]);

  return res.send(test);
}

export async function updateBlog(req, res) {
  const authorDoc = await AuthorModel.findOne({ user: req.id });
  const authorLogged = authorDoc._id.toString();
  const { img, link, qr_code, description, content, tags } = req.body;
  const { id } = req.params;
  const test = await BlogModel.findOneAndUpdate(
    { _id: id, author: authorLogged }, //condition
    { img, link, qr_code, description, content, tags },
    { new: true } //the new:true to make the returned document after updating
  );
  return res.send(test);
}
export async function findBlogByTag(req, res) {
  const { tag } = req.params;
  const Blogs = await BlogModel.find({ tags: tag });
  return res.send(Blogs);
}

//middleware-isauth/hasrole//limit/skip mongodb
//contoller lal user if he is author to create his profile to be saved in author model
//aws sdk