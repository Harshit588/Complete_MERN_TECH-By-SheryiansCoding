const fs = require("fs");

// WriteFile
// fs.writeFile("hey.txt", "Hii i am harshit,\nI am From Indore", (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log("DONE");
//   }
// });

// AppendFile
// fs.appendFile("hey.txt", " in Indore", (err) => {
//   if (err) console.error(err);
//   else console.log("DONE");
// });

// Rename
// fs.rename("hey.txt", "Hello.txt", (err) => {
//   if (err) console.error(err);
//   else console.log("DOne");
// });/

// CopyFile
// fs.copyFile("Hello.txt", "copyFile/helloCopy.txt", (err) => {
//   if (err) console.error(err);
//   else console.log("DONE");
// });

// unlike
// fs.unlink("Hello.txt", (err) => {
//   if (err) console.error(err);
//   else console.log("DONE");
// });

// ReadFile
// fs.readFile("./copyFile/helloCopy.txt", "utf-8", (err, result) => {
//   if (err) console.error(err);
//   else console.log(result);
// });

// rm : delete FOlder
fs.rm("./copyFile", { recursive: true }, (err) => {
  if (err) console.error(err);
  else console.log("Done");
});
