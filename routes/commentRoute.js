import express from "express";

import { createComment, deleteComment,findCommentById,getAllComments } from "../controllers/comment.js";


const commentRoute = express();
commentRoute.post("/create",createComment);
commentRoute.delete("/delete/:id",deleteComment);
commentRoute.get("/get/:id",findCommentById);
commentRoute.get("/getall",getAllComments);

export default commentRoute;
