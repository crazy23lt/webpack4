const state = {
	title: "Vue2 webpack4 sass vuex vueRouter"
};
const mutations = {
	CHANGE_LOCAL: state => {
		console.log("CHANGE_LOCAL mutations:>> app", state);
	}
};
const actions = {
	change_local: () => {
		console.log("change_local actions:>> app");
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
