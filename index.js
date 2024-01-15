import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import http from "http";

var app = express();

app.use(cookieParser());
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

var server = http.createServer(app);

server.listen(8080, () => {
  console.log("server running");
});
