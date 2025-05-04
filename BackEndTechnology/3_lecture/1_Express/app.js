const express = require("express");
const app = express();

// Middleware Setup
app.use((req, res, next) => {
  console.log("Middleware work");
  next();
});

// Making Routes ->
app.get("/", (req, res) => {
  throw new Error("error hai bhai");
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err);
  res.send("SOMETHING WENT WRONG");
});

// Start the Server
app.listen(3000, () => console.log("Server started"));
