const os = require("os");

console.log(os.arch());

console.log(os.freemem());

const bytesFree = os.freemem();
const bytesTotal = os.totalmem();

const divider = Math.pow(1024, 3);

console.log("Free Memory = ", bytesFree / divider, " GB");
console.log("Total Memory = ", bytesTotal / divider, " GB");

console.log(os.hostname());
console.log(os.platform());
console.log(os.type());
console.log(os.tmpdir());
console.log(os.userInfo());
