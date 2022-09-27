<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center justify-space-between">
      <router-link :to="{ name: 'Home' }">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <div class="d-flex flex-row align-center">
      <v-btn
        :to="{ name: 'Login' }"
        color="secondary"
        class="black--text mx-2"
        elevation="3"
      >
        <v-icon left dark> mdi-account-arrow-left </v-icon>
        Logar
      </v-btn>

      <v-btn color="secondary" class="black--text mx-2" elevation="3">
        <v-icon left dark> mdi-account-plus </v-icon>
        Registrar-se
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style></style>
