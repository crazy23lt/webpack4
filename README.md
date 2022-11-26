# WebPack4

**写在前面——**

&emsp;&emsp;web 前端项目迭代变化很快，从以前的 服务端 JSP、PHP，到原生 JavaScript、jQuery 库、boostrtrap 库，再到 Vue 框架、React 库。web 应用变得更加复杂与庞大，web 前端技术应用的范围也愈加广泛。通过直接编写 JavaScript、CSS、Html 已经无法应对 web 应用的发展。需要新的开发模式，进行复杂业务开发。

## 模块化思想

**What：什么是模块化？**

&emsp;&emsp;模块化是一种思想，是指将一个复杂系统分解到多个模块以方便编码。

**Why：为什么出现模块化？**

&emsp;&emsp;Web 应用愈加复杂愈加庞大，以往单纯使用编写 js 无法应对。需要一种规范的开发模式来进行开发。

**How：怎样使用模块化**

&emsp;&emsp;类库模块化开发使用 Rollup，Web 应用开发使用 Webpack。（grunt、gulp、webpack、rollup）

### 模块化思想变化进程

- **全局 function 模式**：将不同功能封装成不同的全局函数。
- **namespace 模式**：封装对象定义属性和方法。
- **IIFE 模式**：匿名函数自调用。

&emsp;&emsp;拥有私有的作用域，向外部暴露一些属性和方法，不会对外部造成污染。相关类似思想有 纯函数（相同输入相同输出）。

- **CommonJS**：服务端同步模块化（Node）（值得拷贝）（Browserify 浏览器实现）
- **AMD**：浏览器异步模块化
- **ES6 Module**：基于 Javascript 模块化规范 （值的引用）

```js
// CommonJS
module.exports = "xxx"; // 暴露
require("xxx"); // 加载
// AMD
define(["外部依赖模块"], function () {
	return; /*暴露模块*/
});
require([module1, module2], function (m1, m2) {});
// ES6
export {}; // 暴露
export default {};
import {} from "xxx"; // 引入
```

## git 命令

`SSL certificate problem: unable to get local issuer certificate` SSL 证书问题:无法获得本地颁发者证书

`git init` 初始化本地 git 仓库

### git remote 远程仓库相关

`git add remote <远程仓库名称> <远程仓库url>` 添加远程仓库

`git remote` 查看本地关联的远程仓库

`git remote set-url <远程仓库名称> <远程仓库地址>` 修改远程仓库地址

### git push 推送相关

`git push -u <远程仓库名称> <本地分支>` 将本地分支上传到远程合并，并记录 push 到远程分支的默认 下次直接 git push

### git config 配置相关

`git config --local --list` 查看本地配置信息

`git config --local user.name/user.email` 配置本地信息

### git branch 分支相关

`git branch` 本地所有分支

`git checkout -b <分支名称>` 创建并切换分支

`git checkout <分支名称>` 切换分支

`git branch <分支名称>` 创建分支

`git branch -d <分支名称>` 删除分支

- 主分支-master-提供给用户使用的版本
- 开发分支-dev-永远是功能最新最全的分支
- 功能分支-feature-\*-新功能分支
- 发布分支-release-发布定期要上线的功能
- 修复分支-bug-\*-修复线上代码的 bug

### git merge 合并分支相关

`git merge <分支名称>` 合并指定分支到目前所在分支

`git merge --no-commit <分支名称>` 合并指定分支到目前所在分支，不进行新的提交

## 初始化项目

`.gitignore` git 忽略文件

`.editorconfig` 编辑器编码规范

`.browserslistrc` 进行 babel 编译的阶段会根据 该文件进行

## 安装 webpack

webpack4 版本开始，需要 webpack-cli 用来在命令行中运行 webpack

`yarn add webpack@4 --save-dev` 安装 webpack4 生产依赖

`yarn add webpack-cli@3 --save-dev` 安装 webpack-cli ，用于运行 webpack

&emsp;&emsp;webpack 开箱即用，无需任何配置文件。通过 webpack.config.js 配置文件进行构建操作。

```json
{
	"script": "webpack --config config/webpack.config.js"
}
```

`yarn add clean-webpack-plugin --dev` webpack 删除 dist 目录

## 代码规范化

&emsp;&emsp;通过prettier进行代码格式规范化，eslint进行js语法规范化，lint-staged用于合prettier 和 eslint，通过 husky git提交钩子在指定钩子触发 lint-staged。

### 安装 eslint

**对js代码进行校验，构建成ast抽象语法树，检查语法。**

`yarn add eslint --save-dev` 安装 eslint 

`npx eslint --init` 初始化eslint （可自定义）

`.eslintrc.js` eslint 配置文件

`.eslintignore` eslint 忽略文件


### 安装 prettier

**对代码风格进行管理，通过配置文件来描述格式化后的风格。**

`.prettierignore` 格式化代码忽略文件

`.prettierrc.json` 格式化代码规范

1. vscode 安装 Prettier - Code formatter 插件，插件会自动检查本地项目相关的配置文件。若没有则使用 默认配置。（_需要到 setting 中设置 editor.formatOnSave:true 启动保存自动格式化_）

`yarn add prettier --save-dev` 安装 prettier 模块

`yarn prettier --check .` 检查没有被省略的文件有灭有进行格式化操作

`yarn prettier --write .` 命令行对代码进行格式化操作

2. 通过 shell 命令行进行 代码格式化。

**整体流程**：编辑代码通过编辑器进行进行一次自动格式化保存，在提交代码的时候通过 lint-staged 进行格式化之后在提交。

### 安装 lint-staged

`yarn add lint-staged` 安装 监听 git 暂存区的插件

`.lintstagedrc` 创建 lint-staged 配置文件

`yarn add husky --save-dev` 安装 husky 配置文件

```js
{
	"script":{
		"prepare": "husky install"
	}
}
```

`yarn prepare` 初始化 husky

`npx husky add .husky/pre-commit "npx lint-staged"` 添加 husky/pre-commit 钩子


**对git暂存区的代码进行操作 对分阶段的git文件运行linters，不要让💩溜进你的代码库!**

`yarn add lint-staged --save-dev`  安装

```js
{
	"lint-staged": {
    "*.js": [                    // 对js文件进行下述命令操作
      "prettier --write",        // 格式化工作区内的文件
      "eslint --cache --fix",    // 检查语法并且修复
      "git add"                  // 重新添加到暂存区
    ]
  }
}
```

### [bug]husky 配合 lint-staged 多次运行

```
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
exec >/dev/tty 2>&1
npx lint-staged

```

## Babel js 代码转换器

- 将 es6 编写的代码转译成 es5 代码，生产的代码能够在老版本浏览器上运行。开发时运用最新 ECMA 规范进行编码，提高开发效率。

### babel 配置方法

- package.json
- babel.config.js
- .babelrc.js
- 命令行配置

`yarn add @babel/core @babel/cli @babel/preset-env --save-dev` 安装 babel 核心组件/babel 命令行工具/babel预设

`yarn add core-js@3 --save-dev` core-js 进行 polyfill 的库

`npx babel src --out-dir dist` 通过 shell 命令 进行js 代码编译

- `@babel/preset-env` 所有项目都会使用
- `@babel/preset-flow` flow
- `@babel/preset-react` react 语法编译
- `@babel/preset-typescript` typescript 语法

.babelrc 配置文件有描述 配置功能

#### @babel/preset-env 

`@babel/preset-env` 是babel最重要的preset，这个 babel 可以根据 .browserslistrc 配置文件，

`yarn add babel-loader --save-dev` 安装 babel-loader 通过 webpack module 进行 js 编译

*webpack4:babel-loader@8 webpack5:babel-loader@9*

webpack 通过 module 设别 babel-loader 对 js 代码进行编译，编译出来具体的代码可根据 .browserslistrc 配置进行指定范围浏览器。

但是 

## 参考

[与 husky 一起使用时，多次运行 lint-staged](https://www.likecs.com/ask-10372833.html)

[lint-staged 使用教程](https://www.cnblogs.com/jiaoshou/p/12250278.html)

[babel 详解](https://blog.liuyunzhuge.com/tags/babel/)