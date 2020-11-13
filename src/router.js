import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import Works from "./pages/Works";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/works", component: Works }
  ]
});

export default router;
