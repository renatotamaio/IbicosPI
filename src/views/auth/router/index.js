const Login = () => import("../view/Login.vue");

export default [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      title: "Login",
      requireAuth: false,
      layout: "default",
      action: "",
      resource: "",
    },
  },
];
