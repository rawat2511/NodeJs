const fs = require("fs");

fs.mkdir("asyncFolder", (err) => {
  console.log("Created Folder", err);
});

// fs.rmdir("asyncFolder", (err) => {
//   console.log("Deleted Folder", err);
// });

fs.writeFile("asyncFolder/text.txt", "Created Async File", (err) => {
  console.log("Wrote to file", err);
});

fs.appendFile("asyncFolder/text.txt", "\nAppended Text", (err) => {
  console.log("Appeded Text", err);
});

fs.readFile("asyncFolder/text.txt", "utf-8", (err, data) => {
  console.log("Reading Data", { data, err });
});
