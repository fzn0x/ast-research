const recast = require("recast");
const { Parser } = require("acorn");
const { readFileSync } = require("fs");
const { resolve } = require("path");

const ast = Parser.parse(
  readFileSync(resolve() + "/traversing/function.js").toString(),
  {
    ecmaVersion: "latest",
  }
);

recast.visit(ast, {
  visitFunctionDeclaration: (path) => {
    console.log(path);
    // stop at *this* depth
    return false;
  },
});
