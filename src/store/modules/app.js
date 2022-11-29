import { constantRoutes } from "@/router/index.js";
const state = {
	title: "Vue2 webpack4 sass vuex vueRouter",
	sidebar: true,
	routes: []
};
const mutations = {
	CHANGE_LOCAL: state => {
		console.log("CHANGE_LOCAL mutations:>> app", state);
	},
	TOGGLE_SIDEBAR: state => {
		state.sidebar = !state.sidebar;
	},
	SET_ROUTES: state => {
		state.routes = constantRoutes;
	}
};
const actions = {
	change_local: () => {
		console.log("change_local actions:>> app");
	},
	toggleSideBar({ commit }) {
		commit("TOGGLE_SIDEBAR");
	},
	setRoutes({ commit }) {
		commit("SET_ROUTES");
	}
};
const getters = {
	newTitle: state => state.title
};
export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
};
