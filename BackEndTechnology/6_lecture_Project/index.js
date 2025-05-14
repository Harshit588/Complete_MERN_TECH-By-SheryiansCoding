const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("./public"));
app.set("view engine", "ejs");

// Home Page - List all files
app.get("/", (req, res) => {
  fs.readdir("./Files", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading directory");
    }
    res.render("index", { files: data });
  });
});

// Add New Task
app.post("/add-task", (req, res) => {
  let { title, description } = req.body;
  const fileName = `${title.split(" ").join("")}.txt`;
  fs.writeFile(`./Files/${fileName}`, description, (err) => {
    if (err) {
      res.status(500).send("ERROR");
    } else {
      res.redirect("/"); // Redirect to home after creation
    }
  });
});

// View File Content
app.get("/Files/:fileName", (req, res) => {
  fs.readFile(`./Files/${req.params.fileName}`, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file.");
    }
    res.render("show", { fileName: req.params.fileName, content: data });
  });
});

// Update File - Show Form
app.get("/Files/update/:fileName", (req, res) => {
  const filePath = path.join(__dirname, "Files", req.params.fileName);
  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(500).send("Error reading file.");
    }
    res.render("update", { fileName: req.params.fileName, content: data });
  });
});

// Update File - Handle POST
app.post("/Files/update/:fileName", (req, res) => {
  const oldFileName = req.params.fileName;
  const { newTitle, content } = req.body;
  const newFileName = `${newTitle.trim().split(" ").join("")}.txt`;

  const oldPath = path.join(__dirname, "Files", oldFileName);
  const newPath = path.join(__dirname, "Files", newFileName);

  // First rename file if the name changed
  fs.rename(oldPath, newPath, (renameErr) => {
    if (renameErr && oldFileName !== newFileName) {
      return res.status(500).send("Error renaming file.");
    }

    // Then update file content
    fs.writeFile(newPath, content, "utf-8", (writeErr) => {
      if (writeErr) {
        return res.status(500).send("Error updating content.");
      }
      res.redirect(`/Files/${newFileName}`);
    });
  });
});

// Delete File
app.get("/Files/delete/:fileName", (req, res) => {
  const filePath = path.join(__dirname, "Files", req.params.fileName);
  fs.unlink(filePath, (err) => {
    if (err) {
      return res.status(500).send("Error deleting file.");
    }
    res.redirect("/");
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
