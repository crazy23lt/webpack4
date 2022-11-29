<template>
	<footer class="footer" v-show="count">
		<span class="todo-count">
			<strong>{{ remainingCount }}</strong>
			{{ remainingCount > 1 ? "items" : "item" }} left
		</span>
		<ul class="filters">
			<li @click="selectFn('all')">
				<a href="#/all" :class="{ selected: kinds === 'all' }">All</a>
			</li>
			<li @click="selectFn('active')">
				<a href="#/active" :class="{ selected: kinds === 'active' }">Active</a>
			</li>
			<li @click="selectFn('completed')">
				<a href="#/completed" :class="{ selected: kinds === 'completed' }"
					>Completed</a
				>
			</li>
		</ul>
		<button
			class="clear-completed"
			@click="buttonClick"
			v-show="count > remainingCount"
		>
			Clear completed
		</button>
	</footer>
</template>

<script>
export default {
	props: {
		kinds: {
			type: String
		},
		remainingCount: {
			type: Number
		},
		count: {
			type: Number
		}
	},
	methods: {
		selectFn(val) {
			this.$emit("handleKinds", val);
		},
		buttonClick() {
			this.$emit("handleCompleted");
		}
	}
};
</script>

<style></style>
