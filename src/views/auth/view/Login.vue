<template>
  <v-container class="background-yellow" fluid fill-height>
    <v-layout align-center justify-center>
      <v-form ref="form" lazy-validation @submit.prevent="login()">
        <v-card elevation="6" class="pa-4 white">
          <v-card-title>
            <h1 class="text-h5 mb-2 font-weight-regular">Faça seu login</h1>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col class="ma-0 pa-0" cols="12">
                <v-text-field
                  prepend-icon="mdi-account"
                  type="text"
                  label="E-mail"
                  :rules="emailRules"
                ></v-text-field>
              </v-col>
              <v-col class="ma-0 pa-0" cols="12">
                <v-text-field
                  prepend-icon="mdi-lock"
                  type="password"
                  label="Senha"
                  :rules="passwordRules"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <div class="d-flex justify-end">
                  <v-btn type="submit" color="primary" :loading="loading">
                    <v-icon left dark>mdi-location-enter</v-icon>
                    Logar
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      emailRules: [(v) => !!v || "Necessário haver email."],
      passwordRules: [(v) => !!v || "Necessário haver senha."],

      loading: false,
    };
  },
  methods: {
    /**
     * TODO
     *
     * Acabar Req de login
     */
    login() {
      const validate = this.$refs.form.validate();

      if (validate) {
        this.loading = true;
        console.log("To true");
        // this.loading = false
      }
    },
  },
};
</script>

<style scoped>
.background-yellow {
  background-image: url("../../../assets/image/background-login-client.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}
</style>
