/**
 * NOTE
 *
 * Será neste arquivo onde as rotas serão importadas.
 */

const Home = () => import("@/views/Home.vue");
const page404 = () => import('@/views/404.vue');
import LoginRouter from "@/views/auth/router";
import DashboardRouter from "@/views/dashboard/router";

export default [
  {
    path: "*",
    name: "error404",
    component: page404,
    meta: {
      requireAuth: false,
      layout: "normal",
      action: "",
      resource: "",
    },
  },
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
      requireAuth: false,
      layout: "default",
      action: "",
      resource: "",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
    meta: {
      requireAuth: false,
      layout: "default",
      action: "",
      resource: "",
    },
  },
  ...LoginRouter,
  ...DashboardRouter,
];
