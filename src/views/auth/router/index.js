const Auth = () => import("../view/Auth.vue");

export default [
  {
    path: "/:typeForm",
    name: "Auth",
    component: Auth,
    props: true,
    meta: {
      title: "Login",
      requireAuth: false,
      layout: "default",
      action: "",
      resource: "",
    },
  },
];
