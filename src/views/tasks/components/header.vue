<template>
	<header class="header">
		<h1>Tasks</h1>
		<input
			type="text"
			class="new-todo"
			placeholder="What needs to be done?"
			autocomplete="off"
			autofocus
			v-model.trim="input"
			@keyup.enter="enter"
		/>
	</header>
</template>

<script>
export default {
	data() {
		return {
			input: null
		};
	},
	methods: {
		enter() {
			this.$emit("handleInput", this.input);
		}
	}
};
</script>
