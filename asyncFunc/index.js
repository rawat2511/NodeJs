const fs = require("fs");

fs.writeFile("text.txt", "This is async", (err) => {
  console.log("Created", { err });
});

fs.appendFile("text.txt", "\nAppend this data", (err, data) => {
  console.log("Appended", { err, data });
});

const data = fs.readFile("text.txt", "utf-8", (err, data) => {
  console.log({ err, data });
});

console.log("Outside");

console.log(data);
