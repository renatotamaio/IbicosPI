const DefaultLayout = () => import("../../../layouts/DefaultLayout.vue");
const AuthLayout = () => import("../../../layouts/AuthLayout.vue");

export default {
  layouts: {
    default: {
      component: DefaultLayout,
    },
    auth: {
      component: AuthLayout,
    },
  },
};
