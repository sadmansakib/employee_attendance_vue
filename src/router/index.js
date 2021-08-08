import { createRouter, createWebHistory } from "vue-router";
import Register from "@/views/Register";
import Home from "@/views/Home";
import Login from "@/views/Login";
import { handleState } from "@/composables/store";
import Statistics from "@/views/Statistics";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/statistics",
    name: "Statistics",
    component: Statistics,
    meta: { requiresAuth: true },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: { requiresUnAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: { requiresUnAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = handleState();
  if (isAuthenticated.value === false && to.meta.requiresAuth === true) {
    console.log("requires auth, redirect to login");
    next({ name: "Login" });
  } else if (
    isAuthenticated.value === true &&
    to.meta.requiresUnAuth === false
  ) {
    console.log("authenticated, redirect to home");
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
