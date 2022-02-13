const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

// copy template
writeFileSync(
  resolve() + "/readfile/generated.js",
  readFileSync(resolve() + "/traversing/function.js").toString()
);
