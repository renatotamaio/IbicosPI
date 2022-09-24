/**
 * NOTE
 *
 * Será neste arquivo onde as rotas serão importadas.
 */

const Home = () => import("@/views/Home.vue");
import LoginRouter from "@/views/auth/router";

export default [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requireAuth: false,
      layout: "default",
      action: "",
      resource: "",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      requireAuth: true,
      layout: "default",
      action: "",
      resource: "",
    },
  },
  ...LoginRouter,
];
