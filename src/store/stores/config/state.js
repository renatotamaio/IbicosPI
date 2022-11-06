const DefaultLayout = () => import("../../../layouts/DefaultLayout.vue");
const AuthLayout = () => import("../../../layouts/AuthLayout.vue");
const NormalLayout = () => import('../../../layouts/NormalLayout.vue');

export default {
  layouts: {
    default: {
      component: DefaultLayout,
    },
    auth: {
      component: AuthLayout,
    },
    normal: {
      component: NormalLayout
    }
  },
};
