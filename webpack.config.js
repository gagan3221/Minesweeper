const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        use: require.resolve("babel-loader"),
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["css-loader"]
      }
    ],
  },
};
