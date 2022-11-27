import Vue from "vue";
// import "normalize.css/normalize.css"; //CSS重置的现代替代方案
import "./index.scss";
import App from "./App.vue";
new Vue({ render: h => h(App) }).$mount("#app");
