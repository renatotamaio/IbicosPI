const Dashboard = () => import("../view/Dashboard.vue");

export default [
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      title: "Dashboard",
      requireAuth: true,
      layout: "auth",
      action: "",
      resource: "",
    },
  },
];
