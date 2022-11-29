const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 自动清除 dist 目录
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 自定义 html 文件
const { VueLoaderPlugin } = require("vue-loader"); // 解析 .vue 文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 抽离 css 样式文件
// const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); // 压缩 css 样式文件
module.exports = {
	target: "web", // 构建目标，node/web，默认值 web
	devtool: "source-map", //控制是否生产 source-map ，默认值 false。开发使用 cheap-eval-source-map，生产 source-map
	mode: "development", // development/production 构建模式
	entry: path.resolve(__dirname, "../src/main.js"), // 模块入口文件
	output: {
		filename: "js/[name].[hash:8].js",
		path: path.resolve("dist")
	},
	// 配置模块如何解析
	resolve: {
		// 创建 import / require 的别名，让引入模块变得更简单。
		alias: {
			"@": path.resolve(__dirname, "../src"),
			"@assets": path.resolve(__dirname, "../src/assets"),
			"@store": path.resolve(__dirname, "../src/store"),
			"@view": path.resolve(__dirname, "../src/views")
		}
	},
	// module 配置如何处理模块
	module: {
		/**
		 * rules 配置模块的读取和解析规则，通常配置 loader。
		 * 如何配置 rule:
		 * 		条件匹配：通过 test、include、exclude 三个配置项来命中 Loader 要应用规则文件。
		 * 		应用规则：通过 use 配置项来应用 Loader,多个 loader 使用数组，处理顺序从后往前。
		 */
		rules: [
			{
				test: /\.js$/, // 配置 js 文件
				exclude: /node_modules/, // 忽略文件 node_modules 文件
				include: path.resolve(__dirname, "../src"), // 匹配 src 目录中的 js 文件
				use: ["babel-loader"] // 使用 babel-loader 对 匹配到的文件进行 处理
			},
			{ test: /\.vue$/, loader: "vue-loader" },
			{
				test: /\.(scss|css)?$/,
				/**
				 * style-loader：将 css 注入 DOM。
				 * MiniCssExtractPlugin.loader：将 css 提取到 .css 文件中
				 * css-loader：通过 import/require() 注入 css 并进行解析。
				 */
				// use: ["style-loader", "css-loader"] // 开发模式 浏览器反应速度更快
				use: [
					// MiniCssExtractPlugin.loader,
					"style-loader",
					"css-loader",
					"postcss-loader",
					"sass-loader"
				] // 生产模式 css/js 文件并行加载，响应更快
			}
		]
	},
	// webpack 打包优化，通常可以通过设置 mode 进行开发模式/生产模式，但是一些详细的优化也可以通过 optimization 进行优化
	optimization: {
		minimize: true // 告知 webpack 使用 TerserPlugin 压缩 bundle （mode 优先级更高，production 情况下 true）
		// minimizer: [new CssMinimizerPlugin()] // 使用 cssnano 对你的 css 代码进行压缩
	},
	devServer: {
		contentBase: path.resolve(__dirname, "../dist"),
		port: 3000,
		hot: true,
		open: false
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.ProgressPlugin(),
		new webpack.HotModuleReplacementPlugin(), // 开启 热更新
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "../public/index.html"),
			favicon: path.resolve(__dirname, "../public/favicon.ico")
		}),
		new MiniCssExtractPlugin({
			filename: `assets/styles/[name].[hash:8].css`
		}),
		new CleanWebpackPlugin()
	]
};

/**
 * 压缩 css
 * 1. css-loader!minimize 老版本可以使用
 * 2. optimization 属性使用 css-minimizer-plugin 插件，通过 cssnano 对 css 代码进行压缩
 *	postcss-loader
 * 将 css 解析成 ast 抽象语法树，再通过其他插件进行处理
 */
