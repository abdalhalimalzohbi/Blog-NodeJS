import express from "express";
import multer from "multer"; 
import { allGetAllBlogs,createBlog, deleteBlog,findBlogById,getAllBlogs,updateBlog,adminDeleteBlog,findBlogByTag,freeFindBlogById,freeGetAllBlogs } from "../controllers/blogs.js";
import { isAuthenticated,userRole,userSubscription } from "../middleware/index.js";


const storage = multer.diskStorage({
    destination: './images',
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  });
    const upload = multer({ storage: storage });

const blogRoute = express();

blogRoute.post("/",isAuthenticated,userRole(['author']), upload.single('img'),createBlog);
blogRoute.delete("/:id",isAuthenticated,userRole(['author']),deleteBlog);
blogRoute.delete("/:id",isAuthenticated,userRole(['admin']),adminDeleteBlog);
blogRoute.get("/all",isAuthenticated,userRole(['admin','user','author']),allGetAllBlogs);
blogRoute.get("/free/:id",isAuthenticated,userRole(['admin','user','author']),userSubscription(['free','premium']),freeFindBlogById);
blogRoute.get("/free",isAuthenticated,userRole(['admin','user','author']),userSubscription(['free','premium']),freeGetAllBlogs);
blogRoute.get("/:id",isAuthenticated,userRole(['admin','user','author']),userSubscription(['premium']),findBlogById);
blogRoute.get("/",isAuthenticated,userRole(['admin','user','author']),userSubscription(['premium']),getAllBlogs);
blogRoute.get("/all",isAuthenticated,userRole(['admin','user','author']),allGetAllBlogs);
blogRoute.put("/:id",isAuthenticated,userRole(['author']),updateBlog);
blogRoute.get("/tag/:tag",isAuthenticated,userRole(['admin','user','author']),findBlogByTag);

export default blogRoute;