const state = {
	filteredTodos: [],
	filtersKinds: "all"
};
const mutations = {
	ADD_TODO: (state, task) => {
		state.filteredTodos.push(task);
	},
	REMOVE_TODO: (state, idx) => {
		state.filteredTodos.splice(idx, 1);
	},
	CLEAR_COMPLETED_TODO: state => {
		state.filteredTodos = state.filteredTodos.filter(task => !task.completed);
	},
	CHANGE_KINDS: (state, kind) => {
		state.filtersKinds = kind;
	}
};
const actions = {
	addTodo({ commit }, text) {
		if (text.length === 0) return false;
		const task = { text, completed: false };
		commit("ADD_TODO", task);
		return true;
	},
	removeTodo({ commit }, idx) {
		commit("REMOVE_TODO", idx);
	},
	removeCompleted({ commit }) {
		commit("CLEAR_COMPLETED_TODO");
	},
	changeTodoList({ commit }, kind) {
		commit("CHANGE_KINDS", kind);
	}
};

export default {
	namespaced: true,
	state,
	mutations,
	actions
};
