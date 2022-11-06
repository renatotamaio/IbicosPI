<template>
  <v-app>
    <Header />

    <v-main>
      <slot></slot>
    </v-main>

    <SnackbarComponent />
  </v-app>
</template>

<script>
import SnackbarComponent from "@/components/SnackbarComponent.vue";
import Header from './components/Header.vue'

export default {
  name: "AuthLayout",
  components: {
    SnackbarComponent,
    Header
  },
};
</script>

<style></style>
