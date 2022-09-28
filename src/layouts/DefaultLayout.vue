<template>
  <v-app>
    <v-main>
      <slot></slot>
    </v-main>

    <SnackbarComponent />
  </v-app>
</template>

<script>
import SnackbarComponent from "@/components/SnackbarComponent.vue";

export default {
  name: "DefaultLayout",
  components: {
    SnackbarComponent,
  },
};
</script>

<style></style>
