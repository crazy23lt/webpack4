<template>
	<div class="app-wrapper">
		<div class="sidebar" :class="[sidebar ? 'open' : 'close']">
			<div v-for="route in routes" :key="route.name">
				<router-link :to="route.path" tag="span">
					<h2>
						{{ route.name }}
					</h2>
				</router-link>
				<div v-for="child in route.children" :key="child.name">
					<router-link :to="child.path" tag="span">
						<h3>
							{{ child.name }}
						</h3>
					</router-link>
				</div>
			</div>
			<div class="bar" @click="toggleSideBar"></div>
		</div>
		<router-view :key="key" />
	</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
	computed: {
		...mapGetters(["sidebar", "routes"]),
		key() {
			return this.$route.path;
		}
	},
	methods: {
		...mapActions("app", ["toggleSideBar"])
	}
};
</script>

<style scoped lang="scss">
.sidebar {
	position: absolute;
	top: 0;
	height: 100%;
	width: 240px;
	background: greenyellow;
	transition: left 1s;
	&.open {
		left: 0;
	}
	&.close {
		left: -220px;
	}
	.bar {
		position: absolute;
		top: 50%;
		right: 0;
		width: 20px;
		height: 60px;
		border-radius: 0 10px 10px 0;
		background-color: yellow;
		transform: translateY(-50%);
	}
}
</style>
