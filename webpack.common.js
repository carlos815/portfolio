const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    index: "./src/scripts/index.js",
    initialAnimation: "./src/scripts/initialAnimation.js",
  },
  output: {
    filename: "[name].main.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Front End Developer - Carlos Hernández",
      template: "!!ejs-webpack-loader!./src/pages/index.ejs",
      options: {
        attrs: ["img:src", "link:href"],
      },
    }),
    new HtmlWebpackPlugin({
      title: "about.html",
      filename: "about.html",
      template: "!!ejs-webpack-loader!./src/pages/about.ejs",
    }),
    new HtmlWebpackPlugin({
      title: "contact",
      filename: "contact.html",

      template: "!!ejs-webpack-loader!./src/pages/contact.ejs",
    }),
    new HtmlWebpackPlugin({
      title: "stack.html",
      filename: "stack.html",

      template: "!!ejs-webpack-loader!./src/pages/stack.ejs",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: "images/[hash]-[name].[ext]",
            },
          },
        ],
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ["file-loader"],
      },
    ],
  },
};
