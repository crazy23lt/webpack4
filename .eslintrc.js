module.exports = {
	root: true,
	// eslint 支持的语言环境
	env: {
		browser: true, // 浏览器全局变量
		node: true, //Nodejs全局变量和作用域
		es2021: true, //支持罪行es2021语法  包含 es6
		commonjs: true //支持 commonjs 模块
	},
	// 全局变量 规则
	globals: {
		// Promise: "off", // 是否支持 Promise 语法 用于关闭 env 内部的允许的语法
		// jQuery: "readonly", // 变量只读不允许重写
		// dash: "writable" // 变量允许重写
	},
	// 解释器配置
	parserOptions: {
		ecmaVersion: 2022, // 指定 eslint ECMA 语法版本
		sourceType: "module", // 脚本类型 ["script 默认","module es6 模块脚本"]
		allowImportExportEverywhere: false,
		parser: "@babel/eslint-parser", // 解析器
		// 支持特性语法
		ecmaFeatures: {
			globalReturn: false, // 支持全局使用return
			jsx: true // 支持特性语法
		}
	},
	// 继承配置
	extends: ["eslint:recommended", "plugin:prettier/recommended"],
	// 插件
	plugins: ["prettier"],
	// 语法约束规则
	rules: {
		"prettier/prettier": "error", // prettier 规则 [0:error,1:warn,2:off]
		"vue/multi-word-component-names": 0 // 忽略驼峰命名法  [0:error,1:warn,2:off]
	}
};
