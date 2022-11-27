<template>
	<section id="app" class="todoapp">
		<todo-header />
		<todo-main />
		<todo-footer />
	</section>
</template>

<script>
import header from "./components/header.vue";
import main from "./components/main.vue";
import footer from "./components/footer.vue";
export default {
	components: {
		"todo-header": header,
		"todo-main": main,
		"todo-footer": footer
	}
};
</script>

<style></style>
