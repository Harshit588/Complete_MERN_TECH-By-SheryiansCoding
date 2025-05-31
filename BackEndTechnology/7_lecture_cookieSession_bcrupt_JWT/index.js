const express = require("express");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cookieParser());
const port = 3000;

app.get("/", (req, res) => {
  res.end("HOME PAGE");
});

app.get("/password", async (req, res) => {
  // Hashing a password
  const plainPassword = "mySecret123";
  const hashedPassword = await bcrypt.hash(plainPassword, 10); // 10 = salt rounds
  console.log(hashedPassword);

  // Comparing password at login
  const isMatch = await bcrypt.compare("mySecret123", hashedPassword);

  console.log(isMatch); // true if matched
});

app.get("/setCookies", (req, res) => {
  res.cookie("name", "Harshit");
  res.send("COOKIES SET SUCCESSFULLY");
});

app.get("/getCookies", (req, res) => {
  const nameCookie = req.cookies.name;
  res.send(nameCookie);
});

app.get("/setJwt", (req, res) => {
  const token = jwt.sign({ email: "Harshitarya0611@gmmail.com" }, "SecretKey");

  res.cookie("token", token);
  res.send(token);
});

app.get("/getJwt", (req, res) => {
  let isSame = jwt.verify(req.cookies.token, "SecretKey");
  console.log(isSame);
  res.send(isSame);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
