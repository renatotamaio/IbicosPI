<template>
  <v-row>
    <v-col class="ma-0 pa-0" cols="12">
      <v-text-field
        prepend-icon="mdi-email"
        type="text"
        label="E-mail"
        :rules="emailRules"
        v-model="user.email"
      ></v-text-field>
    </v-col>
    <v-col class="ma-0 pa-0" cols="12">
      <v-text-field
        prepend-icon="mdi-lock"
        type="password"
        label="Senha"
        :rules="passwordRules"
        v-model="user.password"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "FormLoginComponent",
  data() {
    return {
      emailRules: [
        (v) => !!v || "Necessário haver email.",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail é inválido.",
      ],
      passwordRules: [(v) => !!v || "Necessário haver senha."],

      loading: false,
    };
  },
  computed: {
    user: {
      get() {
        return this.$store.getters["auth/getUser"];
      },
      set(value) {
        this.$store.dispatch("auth/setUser", value);
      },
    },
  },
};
</script>

<style></style>
