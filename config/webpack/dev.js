const { merge } = require("webpack-merge");
const Dotenv = require("dotenv-webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const base = require("./base");
const helpers = require("./helpers");

module.exports = merge(base, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    path: helpers.resolveFromRootPath("dist"),
    filename: "[name].js",
  },
  devServer: {
    inline: true,
    host: "localhost",
    port: 8080,
    stats: "minimal",
    hot: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new Dotenv({
      path: "dev.env",
    }),
  ],
});
