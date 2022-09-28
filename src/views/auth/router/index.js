const Login = () => import("../view/Login.vue");

export default [
  {
    path: "/auth",
    name: "Auth",
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
