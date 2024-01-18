import { BlogModel } from "../model/blogs.js";


export async function createBlog(req, res) {
  const { img, link, qr_code,description,content,tags,author } = req.body;
  const test = await BlogModel.create({ img, link, qr_code,description,content,tags,author });
  return res.send(test);
}
export async function deleteBlog(req, res) {
  const  {id}  = req.params;
  const test = await BlogModel.deleteOne({ _id:id });
  return res.send(test);
}
export async function findBlogById(req, res) {
    const { id } = req.params;
    const test = await BlogModel.findById({ _id: id });
    return res.send(test);
  }
  export async function getAllBlogs(req,res) {
    const test = await BlogModel.find({});
    return res.send(test);
  }
