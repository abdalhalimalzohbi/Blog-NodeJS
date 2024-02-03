import express from "express";

import { createAuthor, deleteAuthor, findAuthorById,getAllAuthors,updateAuthor,createAuthorProfile,deleteAuthorProfile,updateAuthorProfile } from "../controllers/author.js";
import { isAuthenticated,userRole } from "../middleware/index.js";


const authorRoute = express();
authorRoute.post("/create",isAuthenticated,userRole(['admin']),createAuthor);
authorRoute.post("/createA",isAuthenticated,userRole(['author']),createAuthorProfile);
authorRoute.delete("/delete/:id",isAuthenticated,userRole(['admin']),deleteAuthor);
authorRoute.delete("/deleteA/:id",isAuthenticated,userRole(['author']),deleteAuthorProfile);
authorRoute.get("/get/:id",isAuthenticated,userRole(['admin','user','author']),findAuthorById);
authorRoute.get("/getall",isAuthenticated,userRole(['admin','user','author']),getAllAuthors);
authorRoute.put("/update/:id",isAuthenticated,userRole(['admin','author']),updateAuthor);
authorRoute.put("/updateA/:id",isAuthenticated,userRole(['author']),updateAuthorProfile);


export default authorRoute;
