const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.end("HOME PAGE");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  console.log("Name:: " + name);
  console.log("Email:: " + email);
  console.log("Password:: " + password);

  if (name && email && password) {
    res.status(200).end("SUCCESS");
  } else {
    res.status(400).end("FAILURE");
  }
});

app.listen(3000, () => console.log("Server Started"));
