<template>
  <v-snackbar
    top
    right
    multi-line
    :color="snackbar.color"
    v-model="snackbar.show"
  >
    <slot name="content">
      {{ snackbar.text }}
    </slot>

    <template v-slot:action="{ attrs }">
      <slot name="button">
        <v-btn
          :color="snackbar.buttonColor"
          text
          v-bind="attrs"
          @click="snackbar.show = false"
        >
          Fechar
        </v-btn>
      </slot>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: "SnackbarComponent",
  computed: {
    snackbar: {
      get() {
        return this.$store.getters["snackbar/getSnackbar"];
      },
    },
  },
};
</script>

<style></style>
