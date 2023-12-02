// app.js

const express = require("express");
const app = express();

const logger = require("./logger");

// Create a route to generate log entries
app.get("/", (req, res) => {
  logger.info("A request was made to the root route.");
  res.send("Hello, Winston Logging Example!");
});

app.listen(3001, () => {
  logger.info("Server is running on port 3001");
});
