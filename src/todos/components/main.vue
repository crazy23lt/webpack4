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
				v-for="(todo, idx) in todoList"
				:key="todo.text + idx"
				:class="{ editing: todo === editingTodo, completed: todo.completed }"
			>
				<div class="view">
					<input type="checkbox" class="toggle" v-model.trim="todo.completed" />
					<label @dblclick="editTodo(todo)">{{ todo.text }}</label>
					<button class="destroy" @click="remove(todo)"></button>
				</div>
				<input
					v-editing-focus="todo === editingTodo"
					type="text"
					class="edit"
					v-model.trim="beforeEditingText"
					@keyup.enter="doneEdit(todo)"
					@blur="doneEdit(todo)"
					@keyup.esc="cancelEdit(todo)"
				/>
			</li>
		</ul>
	</section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	data: () => {
		return {
			allDone: null,
			editingTodo: null,
			beforeEditingText: null
		};
	},
	computed: {
		count() {
			return this.filteredTodos.length;
		},
		todoList() {
			let list = null;
			switch (this.filtersKinds) {
				case "all":
					list = this.filteredTodos;
					break;
				case "active":
					list = this.filteredTodos.filter(task => task.completed);
					break;
				case "completed":
					list = this.filteredTodos.filter(task => !task.completed);
					break;
			}
			return list;
		},
		...mapGetters(["filteredTodos", "filtersKinds"])
	},
	methods: {
		...mapActions({
			removeTodo: "todo/removeTodo"
		}),
		editTodo(todo) {
			this.editingTodo = todo;
			this.beforeEditingText = todo.text;
		},
		remove(todo) {
			let idx = this.filteredTodos.indexOf(todo);
			if (idx === -1) return;
			this.removeTodo(idx);
		},
		doneEdit(todo) {
			todo.text = this.beforeEditingText;
			this.editingTodo = null;
			this.beforeEditingText = null;
		},
		cancelEdit() {
			this.editingTodo = null;
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
