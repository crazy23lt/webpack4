<template>
	<section id="app" class="todoapp">
		<todo-header ref="todoHeader" @handleInput="addTask_handle" />
		<todo-main
			ref="todoMain"
			:tasks="tasks"
			:count="taskCount"
			@removeTask="removeTask"
			@editTask="editTask_handle"
		/>
		<todo-footer
			:kinds="kinds"
			:count="taskCount"
			:remainingCount="remainingCount"
			@handleKinds="changeTaskKinds"
			@handleCompleted="removeCompleted"
		/>
	</section>
</template>

<script>
import header from "./components/header.vue";
import main from "./components/main.vue";
import footer from "./components/footer.vue";
import { mapActions, mapGetters, mapState } from "vuex";
export default {
	components: {
		"todo-header": header,
		"todo-main": main,
		"todo-footer": footer
	},
	data() {
		return {
			inputText: null
		};
	},
	computed: {
		...mapGetters(["tasks", "taskCount", "remainingCount"]),
		...mapState("todo", ["kinds"])
	},

	methods: {
		...mapActions("todo", [
			"addTask",
			"changeTaskKinds",
			"removeCompleted",
			"removeTask",
			"editTask"
		]),
		editTask_handle: function (payload) {
			this.editTask(payload).then(() => {
				this.$refs.todoMain.cancelEdit();
			});
		},
		addTask_handle: function (t) {
			this.addTask(t).then(() => {
				this.$refs.todoHeader.input = null;
			});
		}
	},
	created() {}
};
</script>

<style></style>
