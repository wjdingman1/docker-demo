const express = require("express");
const http = require("http");

const app = express();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT);

console.log(`Server listening on port ${PORT}`);
