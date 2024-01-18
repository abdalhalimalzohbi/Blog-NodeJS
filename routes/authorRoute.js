import express from "express";

import { createAuthor, deleteAuthor, findAuthorById,getAllAuthors,updateAuthor } from "../controllers/author.js";

const authorRoute = express();
authorRoute.post("/create",createAuthor);
authorRoute.delete("/delete/:id",deleteAuthor);
authorRoute.get("/get/:id",findAuthorById);
authorRoute.get("/getall",getAllAuthors);
authorRoute.put("/update/:id",updateAuthor)

export default authorRoute;
