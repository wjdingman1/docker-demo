const express = require("express");
const http = require("http");
const port = process.env.POST || 3000;

const app = express();

// Create three simple GET routes

app.use("/one", (req, res) => {
  console.log("Incoming request from client at route 1");
  res.send("Response from route 1");
});

app.use("/two", (req, res) => {
  console.log("Incoming request from client at route 2");
  res.send("Response from route 2");
});

app.use("/three", (req, res) => {
  console.log("Incoming request from client at route 3");
  res.send("Response from route 3");
});

http.createServer(app);

app.listen(3000);

console.log(`~~ Server listening on port ${port} ~~`);
