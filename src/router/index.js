import Vue from "vue";
import store from "@/store/index.js";
import Router from "vue-router";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import Layout from "@/layout/index.vue";
import TasksPage from "@view/tasks/tasks.vue";
import TodoPage from "@view/todos/todos.vue";
Vue.use(Router);
export const constantRoutes = [
	{
		path: "/",
		component: Layout,
		redirect: "/tasks",
		name: "Home",
		children: [
			{
				name: "tasks",
				path: "/tasks",
				component: TasksPage
			},
			{
				name: "todos",
				path: "/todos",
				component: TodoPage
			}
		]
	}
];
const router = new Router({
	routes: constantRoutes,
	mode: "history", // hash|history|abstract
	base: "/", // 应用基础路径
	linkActiveClass: "", // 模糊激活 class
	linkExactActiveClass: "" // 精确激活 class
});
NProgress.configure({ showSpinner: false }); // NProgress Configuration
router.beforeEach((to, from, next) => {
	NProgress.start();
	if (!store.state.app.routes.length) {
		store.dispatch("app/setRoutes");
	}
	next();
});
router.afterEach(() => {
	NProgress.done();
});
export default router;
