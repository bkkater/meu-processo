const { addBabelPlugin, addWebpackAlias, override } = require("customize-cra");
const path = require("path");

module.exports = override(
  addBabelPlugin([
    "babel-plugin-root-import",
    {
      rootPathSuffix: "src",
    },
  ]),
  addWebpackAlias({
    "~": path.resolve(__dirname, "./src"),
  })
);
