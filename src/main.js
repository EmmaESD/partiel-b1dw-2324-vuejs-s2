import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import "./style.css";
import App from "./App.vue";
import Form from "./views/Form.vue";
import Step2 from "./views/Step2.vue";
import Step3 from "./views/Step3.vue";
import Step4 from "./views/Step4.vue";

const routes = [
  { path: "/", component: Form },
  { path: "/step2", component: Step2 },
  { path: "/step3/:id", name: "Step3", component: Step3 },
  { path: "/step4/:id", name: "Step4", component: Step4 },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
