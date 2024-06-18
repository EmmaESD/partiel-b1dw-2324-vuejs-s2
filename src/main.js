import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Form from "./views/Form.vue";

const routes = [{ path: "/", component: Form }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
