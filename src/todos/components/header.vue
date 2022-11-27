<template>
	<header class="header">
		<h1>todos</h1>
		<input
			type="text"
			class="new-todo"
			placeholder="What needs to be done?"
			autocomplete="off"
			autofocus
			v-model="input"
			@keyup.enter="enter"
		/>
	</header>
</template>

<script>
import { mapActions } from "vuex";
export default {
	data: () => {
		return {
			input: ""
		};
	},
	methods: {
		...mapActions({ addTodo: "todo/addTodo" }),
		enter() {
			let boolean = this.addTodo(this.input);
			boolean ? (this.input = "") : null;
		}
	}
};
</script>

<style></style>
