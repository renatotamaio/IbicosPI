import Vue from "vue";
import VueRouter from "vue-router";
import Routers from "./routers";
import ls from "../plugins/secureLs";

Vue.use(VueRouter);

const routes = [...Routers];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  const user = ls.get("user");

  if (to.meta.requireAuth && !user.token) {
    next({ name: "Login" });
  }
  
  next();
});

export default router;
