import express from "express";

import { createBlog, deleteBlog,findBlogById,getAllBlogs } from "../controllers/blogs.js";


const blogRoute = express();
blogRoute.post("/create",createBlog);
blogRoute.delete("/delete/:id",deleteBlog);
blogRoute.get("/get/:id",findBlogById);
blogRoute.get("/getall",getAllBlogs);
export default blogRoute;

