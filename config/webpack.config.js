const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
	target: "web", // 构建目标，node/web，默认值 web
	devtool: "source-map", // 生成 source-map ，默认值 false
	mode: "development", // development/production 构建模式
	entry: path.resolve(__dirname, "../src/index.js"), // 模块入口文件
	output: {
		filename: "js/[name].[hash:8].js",
		path: path.resolve("dist")
	},
	plugins: [new CleanWebpackPlugin()]
};
