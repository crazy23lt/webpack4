<template>
	<footer class="footer" v-show="count">
		<span class="todo-count">
			<strong>{{ remainingCount }}</strong>
			{{ remainingCount > 1 ? "items" : "item" }} left
		</span>
		<ul class="filters">
			<li @click="selectd('all')">
				<a href="#/all" :class="{ selected: filtersKinds === 'all' }">All</a>
			</li>
			<li @click="selectd('active')">
				<a href="#/active" :class="{ selected: filtersKinds === 'active' }"
					>Active</a
				>
			</li>
			<li @click="selectd('completed')">
				<a
					href="#/completed"
					:class="{ selected: filtersKinds === 'completed' }"
					>Completed</a
				>
			</li>
		</ul>
		<button
			class="clear-completed"
			@click="removeCompleted"
			v-show="count > remainingCount"
		>
			Clear completed
		</button>
	</footer>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
	computed: {
		...mapGetters(["filteredTodos", "filtersKinds"]),
		count() {
			return this.filteredTodos.length;
		},
		remainingCount() {
			return this.filteredTodos.filter(task => task.completed).length;
		}
	},
	methods: {
		...mapActions({
			removeCompleted: "todo/removeCompleted",
			selectd: "todo/changeTodoList"
		})
	}
};
</script>

<style></style>
