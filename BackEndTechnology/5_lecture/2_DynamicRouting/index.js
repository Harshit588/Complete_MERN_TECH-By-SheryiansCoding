const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/user/:username", (req, res) => {
  res.send(`<h1>WELCOME ${req.params.username.toUpperCase()}</h1>`);
});

app.get("/user/:username/:age", (req, res) => {
  res.send(
    `HELLO ${req.params.username.toUpperCase()}` +
      "<br>" +
      `YOUR AGE IS ${req.params.age}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
