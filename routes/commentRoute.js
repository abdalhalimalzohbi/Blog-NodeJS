import express from "express";

import { createComment, deleteComment,findCommentById,getAllComments,updateComment,AdminDeleteComment } from "../controllers/comment.js";
import { isAuthenticated,userRole } from "../middleware/index.js";


const commentRoute = express();
commentRoute.post("/:blogid",isAuthenticated,userRole(['admin','user','author']),createComment);
commentRoute.delete("/:id",isAuthenticated,userRole(['admin']),AdminDeleteComment);
commentRoute.delete("/:id",isAuthenticated,userRole(['user','author']),deleteComment);
commentRoute.get("/:id",isAuthenticated,userRole(['admin','user','author']),findCommentById);
commentRoute.get("/",isAuthenticated,userRole(['admin','user','author']),getAllComments);
commentRoute.put("/:id",isAuthenticated,userRole(['admin','user','author']),updateComment)


export default commentRoute;
