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
  const config = ls.get("config");

  if (to.meta.requireAuth && !config.token) {
    next({ name: "Auth" });
  }

  if (to.name == "Auth" && config.token) {
    next({ name: "Dashboard" });
  }

  next();
});

export default router;
