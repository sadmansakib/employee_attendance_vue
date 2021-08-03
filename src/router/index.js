import { createRouter, createWebHistory } from "vue-router";
import Register from "@/views/Register";

const routes = [
  {
    path: "/register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
