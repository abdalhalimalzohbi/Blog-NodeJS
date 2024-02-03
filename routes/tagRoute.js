import express from "express";

import { createTag, deleteTag,findTagById, getAllTags,updateTag } from "../controllers/tags.js";
import { isAuthenticated,userRole } from "../middleware/index.js";


const tagRoute = express();
tagRoute.post("/",isAuthenticated,userRole(['admin','author']),createTag);
tagRoute.delete("/:id",isAuthenticated,userRole(['admin','author']),deleteTag);
tagRoute.put("/:id",isAuthenticated,userRole(['admin','author']),updateTag);

tagRoute.get("/:id",isAuthenticated,userRole(['admin','user','author']),findTagById);
tagRoute.get("/",isAuthenticated,userRole(['admin','user','author']),getAllTags);



export default tagRoute;
