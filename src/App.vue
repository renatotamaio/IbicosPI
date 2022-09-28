<template>
  <compoment :is="layout">
    <router-view />
  </compoment>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  }),
  beforeUpdate() {
    const title = this.$route.meta.title;
    document.title = `IBicos ${title ? `- ${title}` : ""}`;
  },
  computed: {
    layouts: {
      get() {
        return this.$store.getters["config/getLayouts"];
      },
    },
    layout() {
      const routeLayout = this.$route.meta.layout || "default";

      return this.layouts[routeLayout].component;
    },
  },
};
</script>
