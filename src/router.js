import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home.vue";
import Works from "./pages/Works.vue";
import Test from "./pages/Test.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/test", component: Test },
    { path: "/works", component: Works }
  ]
});

export default router;
