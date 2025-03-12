const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development", // 也可以改成 "production"
  entry: "./src/script.js", // 入口 JS
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // 输出目录
    clean: true, // 每次构建前清理 dist 文件夹
    // publicPath: "/weifuwu/", // 替换为你的仓库名
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 处理 CSS
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/, // 处理 HTML 文件
        use: "html-loader", // 使用 html-loader
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // 入口 HTML
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 8090, // 本地开发服务器端口
    open: true, // 自动打开浏览器
    host: "0.0.0.0", // 让 Docker 允许外部访问
    proxy: {
      "/api": {
        target: "http://localhost:3000", // 后端 API 地址
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
