<template>
  <v-app>
    <Header />

    <v-main>
      <router-view />
    </v-main>

    <SnackbarComponent />
  </v-app>
</template>

<script>
import SnackbarComponent from "./components/SnackbarComponent.vue";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    SnackbarComponent,
    Header,
  },
  data: () => ({
    //
  }),
  beforeUpdate() {
    const title = this.$route.meta.title;
    document.title = `IBicos ${title ? `- ${title}` : ""}`;
  },
};
</script>
