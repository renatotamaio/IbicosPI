const Login = () => import("../view/Login.vue");

export default [
  {
    path: "/:typeForm",
    name: "Auth",
    component: Login,
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
