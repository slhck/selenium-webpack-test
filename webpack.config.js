const path = require("path");

module.exports = {
  target: "node",
  mode: "production",
  entry: "./index.js",
  externals: {
    bufferutil: "bufferutil",
    "utf-8-validate": "utf-8-validate",
  },
  output: {
    filename: "compiled.js",
    path: path.resolve(__dirname, "dist"),
  },
};
