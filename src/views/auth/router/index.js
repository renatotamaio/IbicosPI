const Login = () => import("../view/Login.vue");

export default [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requireAuth: false,
      layout: "default",
      action: "",
      resource: "",
    },
  },
];
