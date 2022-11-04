<template>
  <v-app>
    <Header />

    <v-main>
      <slot></slot>
    </v-main>

    <Footer />

    <SnackbarComponent />
  </v-app>
</template>

<script>
import SnackbarComponent from "@/components/SnackbarComponent.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    SnackbarComponent,
    Header,
    Footer,
  },
};
</script>

<style></style>
