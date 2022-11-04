<template>
  <v-row>
    <v-col class="ma-0 pa-0" cols="12">
      <div class="d-flex align-center justify-center mt-2">
        <v-avatar height="7em" width="7em">
          <img
            :src="user.type == 'C' ? avatarC : avatarP"
            :alt="
              user.type == 'C'
                ? 'Icone de cliente'
                : 'Icone de prestador de servico'
            "
          />
        </v-avatar>
      </div>
    </v-col>
    <v-col class="ma-0 pa-0" cols="12">
      <v-switch
        color="primary"
        value="C"
        true-value="P"
        false-value="C"
        v-model="user.type"
      >
        <template v-slot:label>
          <span>
            Eu sou
            <strong>{{
              user.type == "C" ? "Cliente" : "Prestador(a) de serviço"
            }}</strong>
          </span>
        </template>
      </v-switch>
    </v-col>
    <v-col class="ma-0 pa-0" cols="12">
      <v-text-field
        prepend-icon="mdi-account"
        type="text"
        label="Nome completo"
        :rules="nameRules"
        v-model="user.name"
      ></v-text-field>
    </v-col>
    <v-col class="ma-0 pa-0" cols="12">
      <v-text-field
        prepend-icon="mdi-email"
        type="text"
        label="E-mail"
        :rules="emailRules"
        v-model="user.email"
      ></v-text-field>
    </v-col>
    <v-col v-if="user.type == 'P'" class="ma-0 pa-0" cols="12">
      <v-autocomplete
        prepend-icon="mdi-account-hard-hat"
        v-model="user.bicosCategories"
        :loading="loadingBicosCategories"
        :rules="bicosCategoriesRules"
        :items="bicosCategories"
        item-text="description"
        item-value="id"
        multiple
        chips
        label="Você presta quais serviços? Pode ser selecionado mais de um serviço."
      ></v-autocomplete>
    </v-col>
    <v-col class="ma-0 pa-0" cols="12">
      <v-text-field
        prepend-icon="mdi-cellphone"
        type="tel"
        label="Celular"
        :rules="phoneRules"
        v-model="user.phone"
        v-mask="'(##) #####-####'"
      ></v-text-field>
    </v-col>
    <v-col class="ma-0 pa-0" cols="12">
      <v-text-field
        prepend-icon="mdi-lock"
        label="Senha"
        :rules="passwordRules"
        v-model="user.password"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      ></v-text-field>
    </v-col>
    <v-col class="ma-0 pa-0" cols="12">
      <v-text-field
        prepend-icon="mdi-lock"
        label="Confirmar senha"
        :rules="confirmPasswordRules"
        v-model="user.confirmPassword"
        :type="showPassword ? 'text' : 'password'"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import avatarC from "@/assets/image/avatars/avatar-user-c.png";
import avatarP from "@/assets/image/avatars/avatar-user-p.png";

export default {
  name: "FormRegisterComponent",
  data() {
    return {
      emailRules: [
        (v) => !!v || "Necessário haver email.",
        (v) =>
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail é inválido.",
      ],
      nameRules: [(v) => !!v || "Necessário haver nome completo."],
      bicosCategoriesRules: [
        (v) =>
          !!v ||
          "Necessário haver pelo menos uma categoria de serviço selecionado.",
        (v) =>
          !!v.length ||
          "Necessário haver pelo menos uma categoria de serviço selecionado.",
      ],
      phoneRules: [(v) => !!v || "Necessário haver celular."],
      passwordRules: [(v) => !!v || "Necessário haver senha."],
      confirmPasswordRules: [
        (v) => !!v || "Necessário haver confirmação de senha.",
        (v) =>
          v == this.user.password || "Necessário ser igual ao campo senha.",
      ],

      loading: false,
      loadingBicosCategories: false,
      avatarC: avatarC,
      avatarP: avatarP,
      showPassword: false,
    };
  },
  created() {
    this.loadingBicosCategories = true;

    this.$store.dispatch("bicosCategory/initialize").finally(() => {
      this.loadingBicosCategories = false;
    });
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
    bicosCategories: {
      get() {
        return this.$store.getters["bicosCategory/getBicosCategories"];
      },
    },
  },
};
</script>

<style></style>
