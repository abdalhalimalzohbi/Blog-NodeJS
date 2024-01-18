import express from "express";

import { createTag, deleteTag,findTagById, getAllTags } from "../controllers/tags.js";


const tagRoute = express();
tagRoute.post("/create",createTag);
tagRoute.delete("/delete/:id",deleteTag);
tagRoute.get("/get/:id",findTagById);
tagRoute.get("/getall",getAllTags);


export default tagRoute;
