const path = require("path");

console.log(
  path.dirname("C:/Users/sathw/Desktop/Shubham/project-3-node/path/index.js")
);
console.log(
  path.extname("C:/Users/sathw/Desktop/Shubham/project-3-node/path/index.js")
);
console.log(
  path.basename("C:/Users/sathw/Desktop/Shubham/project-3-node/path/index.js")
);
console.log(
  path.parse("C:/Users/sathw/Desktop/Shubham/project-3-node/path/index.js")
);

const fileData = path.parse(
  "C:/Users/sathw/Desktop/Shubham/project-3-node/path/index.js"
);

console.log(fileData.base);
