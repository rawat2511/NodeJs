const fs = require("fs");

// fs.mkdirSync("folder");

// fs.writeFileSync("folder/io.txt", "This is the input/output file");

// fs.appendFileSync("folder/io.txt", "\nThis is the appended text");

const buffer_data = fs.readFileSync("folder/inputOutput.txt");
console.log(buffer_data);

const actual_data = fs.readFileSync("folder/inputOutput.txt", "utf-8");
console.log(actual_data);

// fs.renameSync("folder/io.txt", "folder/inputOutput.txt");

// fs.rm("index1.js");

// fs.unlinkSync("folder/inputOupt.txt"); Remove file
// fs.rmdirSync("folder"); Remove folder
