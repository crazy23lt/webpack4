const getters = {
	tasks: state => {
		return state.todo.tasks.filter(task => {
			return state.todo.kinds === "all"
				? true
				: state.todo.kinds === "active"
				? task.completed
				: !task.completed;
		});
	},
	remainingCount: state =>
		state.todo.tasks.filter(task => !task.completed).length,
	taskCount: state => state.todo.tasks.length
};
export default getters;
