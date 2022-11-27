<template>
	<div>
		<todos />
	</div>
</template>

<script>
import todos from "./todos/todos.vue";
export default {
	data: () => {
		return { name: "liut" };
	},
	components: { todos }
};
</script>

<style></style>
