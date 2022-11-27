import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
Vue.use(Vuex);
// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context("./modules", true, /\.js$/);

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
	// set './app.js' => 'app'
	const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, "$1");
	const value = modulesFiles(modulePath);
	modules[moduleName] = value.default;
	return modules;
}, {});
const store = new Vuex.Store({
	modules,
	getters
});
export default store;
/**
 * 手搓简易 Vue.use
 * 用法 vue.use(插件,参数);
 * - 插件可以是 函数 或者 对象，对象则必须拥有 install 方法，将会接收你自己传入的 参数
 */

// 我的 Vue 构造函数
function myVue() {}
function initUse(myvue) {
	myvue.use = function (plugin) {
		const installedPlugins =
			this.installedPlugins || (this.installedPlugins = []);
		if (installedPlugins.indexOf(plugin) > -1) return;
		const args = [...arguments].slice(1);
		args.unshift(this);
		if (typeof plugin.install === "function") {
			plugin.install.apply(plugin, args);
		} else if (typeof plugin === "function") {
			plugin.apply(null, args);
		}
		installedPlugins.push(plugin);
	};
}
// 在我的Vue上注册 use 方法
initUse(myVue);
