<template>
  <v-container class="background-with-image" fluid fill-height>
    <v-layout align-center justify-center>
      <v-card elevation="6" class="pa-4 white width-card-personalizado">
        <v-card-title>
          <h1 class="text-h5 mb-2 font-weight-regular">
            {{ forms[typeForm].title }}
          </h1>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" lazy-validation @submit.prevent="validateForm()">
            <component
              :ref="forms[typeForm].ref"
              :is="forms[typeForm].component"
            />
            <v-row>
              <v-col cols="12">
                <div
                  class="d-flex flex-md-row flex-column flex-wrap align-center justify-space-between"
                >
                  <div
                    class="d-flex flex-row align-center justify-center mr-3 mr-md-0 order-md-1 order-2"
                  >
                    <p>
                      {{ forms[typeForm].preModifyFormText }}
                      <v-btn
                        class="ma-0 pa-0"
                        text
                        small
                        color="primary"
                        @click="changeForm()"
                      >
                        {{ forms[typeForm].modifyFormText }}
                      </v-btn>
                    </p>
                  </div>
                  <v-btn
                    class="order-md-2 order-1 mb-6 mb-md-0"
                    type="submit"
                    color="primary"
                    :loading="loading"
                  >
                    <v-icon left dark>
                      {{ forms[typeForm].buttonValidate.icon }}
                    </v-icon>
                    {{ forms[typeForm].buttonValidate.text }}
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
import { removeMaskCellphone } from "@/helper";

export default {
  name: "LoginView",
  props: {
    typeForm: {
      type: String,
      default: "login",
      require: true,
    },
  },
  data() {
    return {
      forms: {
        login: {
          title: "Faça seu login",
          component: () => import("../components/FormLoginComponent.vue"),
          ref: "formLogin",
          buttonValidate: {
            text: "Logar",
            icon: "mdi-location-enter",
          },
          preModifyFormText: "Não possui uma conta?",
          modifyFormText: "Cria uma conta grátis.",
        },
        registrar: {
          title: "Faça seu cadastro",
          component: () => import("../components/FormRegisterComponent.vue"),
          ref: "formRegister",
          buttonValidate: {
            text: "Registrar-se",
            icon: "mdi-location-enter",
          },
          preModifyFormText: "Já possui uma conta?",
          modifyFormText: "Logar com sua conta.",
        },
      },
      loading: false,
    };
  },
  methods: {
    /**
     * @description Valida se o formulário está com os dados corretos, caso esteja a função de logar ou registrar será executado.
     *
     * @author Matheus Eduardo França <matheusefranca1727@gmail.com>
     */
    validateForm() {
      const validate = this.$refs.form.validate();

      if (validate) {
        this[this.typeForm]();
      }
    },
    login() {
      this.loading = true;

      const userLogin = {
        email: this.user.email,
        password: this.user.password,
      };

      this.$store
        .dispatch("auth/login", userLogin)
        .then(() => {
          this.$store.dispatch("snackbar/setSnackbar", {
            show: true,
            text: "Logado com sucesso.",
            color: "green",
            buttonColor: "white",
          });

          this.$router.push({ name: "Dashboard" });
        })
        .catch(() => {
          this.$store.dispatch("snackbar/setSnackbar", {
            show: true,
            text: "Houve um erro ao logar! Tente novamente mais tarde.",
            color: "red",
            buttonColor: "white",
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    register() {
      console.log(removeMaskCellphone(this.user.phone));
    },
    changeForm() {
      const form = this.typeForm == "login" ? "registrar" : "login";
      this.$router.push({ name: "Auth", params: { typeForm: form } });
    },
  },
  computed: {
    user: {
      get() {
        return this.$store.getters["auth/getUser"];
      },
    },
  },
};
</script>

<style scoped>
.background-with-image {
  background-image: url("../../../assets/image/background-login-client.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}

.width-card-personalizado {
  width: 70%;
}

@media (max-width: 960px) {
  .width-card-personalizado {
    width: 100%;
  }
}
</style>
