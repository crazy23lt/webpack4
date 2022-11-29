<template>
	<section class="main" v-show="count">
		<input
			id="toggle-all"
			class="toggle-all"
			type="checkbox"
			v-model.trim="allDone"
		/>
		<label for="toggle-all">Mark all as complete</label>
		<ul class="todo-list">
			<li
				v-for="(task, idx) in tasks"
				:key="task.text"
				:class="{ editing: task === editingTask, completed: task.completed }"
			>
				<div class="view">
					<input type="checkbox" class="toggle" v-model.trim="task.completed" />
					<label @dblclick="editTodo(task, idx)">{{ task.text }}</label>
					<button class="destroy" @click="remove(idx)"></button>
				</div>
				<input
					v-editing-focus="task === editingTask"
					type="text"
					class="edit"
					v-model.trim="beforeEditingText"
					@keyup.enter="doneEdit"
					@blur="doneEdit"
					@keyup.esc="cancelEdit(task)"
				/>
			</li>
		</ul>
	</section>
</template>

<script>
export default {
	data: () => {
		return {
			allDone: null,
			editingTask: null,
			beforeEditingText: null,
			idx: null
		};
	},
	props: {
		count: Number,
		tasks: Array
	},
	methods: {
		editTodo(task, idx) {
			this.editingTask = task;
			this.beforeEditingText = task.text;
			this.idx = idx;
		},
		doneEdit() {
			this.$emit("editTask", {
				text: this.beforeEditingText,
				idx: this.idx
			});
		},
		cancelEdit() {
			this.editingTask = null;
			this.idx = null;
		},
		remove(idx) {
			this.$emit("removeTask", idx);
		}
	},
	directives: {
		editingFocus: (el, binding) => {
			binding.value && el.focus();
		}
	}
};
</script>

<style></style>
