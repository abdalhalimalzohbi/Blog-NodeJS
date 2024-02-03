import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import http from "http";
import "./config/db.js";
import  authorRoute  from "./routes/authorRoute.js";
import  blogRoute  from "./routes/blogRoute.js";
import  commentRoute  from "./routes/commentRoute.js";
import  tagRoute  from "./routes/tagRoute.js";
import  userRoute  from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";

var app = express();
//Middleware
app.use(cookieParser());
app.use(bodyParser.json());

app.use("/api/v1/authors", authorRoute);
app.use("/api/v1/blogs", blogRoute);
app.use("/api/v1/comments", commentRoute);
app.use("/api/v1/tags", tagRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth",authRoute);

var server = http.createServer(app);
server.listen(8080, () => {
  console.log("server running");
});
