import { createRouter, createWebHistory } from "vue-router";
import Register from "@/views/Register";
import Home from "@/views/Home";
import Login from "@/views/Login";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   const { authenticating, tokens } = useState();
//   if (
//     authenticating.value === false &&
//     to.meta.requiresAuth === true &&
//     !tokens.value
//   ) {
//     console.log("requires auth, redirect to login");
//     next({ name: "Login" });
//   } else {
//     next();
//   }
// });

export default router;
