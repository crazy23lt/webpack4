import Vue from "vue";
import "normalize.css/normalize.css"; //CSS重置的现代替代方案
import "@assets/todos.scss";
import App from "@/App.vue";
import router from "./router";
import store from "@/store";
new Vue({ store, router, render: h => h(App) }).$mount("#app");
