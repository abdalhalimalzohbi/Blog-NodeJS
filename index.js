import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import http from "http";
import { test } from "./controllers/author.js";
import { product } from "./controllers/comment.js";
import { abd } from "./controllers/comment.js";
import { deleteF } from "./controllers/comment.js";
import "./config/db.js";
var app = express();

app.use(cookieParser());
app.use(bodyParser.json());

// app.get("/:id", test);0
app.get("/:id/:abd", product);
app.post("/create/author", test);
app.delete("/", deleteF);

var server = http.createServer(app);

server.listen(8080, () => {
  console.log("server running");
});
