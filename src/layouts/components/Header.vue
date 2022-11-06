<template>
  <div>
    <v-card rounded="0" class="overflow-hidden">
      <v-app-bar color="primary" dark>
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>IBicos</v-toolbar-title>

        <v-spacer></v-spacer>

        <!-- Menu do usuário -->
        <v-menu bottom min-width="36px" rounded offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon x-large v-on="on">
              <v-avatar color="blue-grey darken-2" size="36">
                <span class="white--text text-h6">{{ initials }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar color="primary">
                  <span class="white--text text-h5">{{ initials }}</span>
                </v-avatar>
                <h4 class="mt-2">{{ nameAndLastName }}</h4>
                <v-divider class="my-3"></v-divider>
                <v-btn text color="red">
                  <v-icon small>mdi-location-exit</v-icon> Deslogar
                </v-btn>
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </v-app-bar>
    </v-card>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="primary--text text--accent-4"
        >
          <v-list-item :to="{ name: 'Dashboard' }">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import ls from "@/plugins/secureLs.js";

export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  computed: {
    user() {
      const user = ls.get("config").user ? ls.get("config").user : null;

      return user;
    },
    /**
     * @description Pega o nome de usuário e retorna somente as iniciais.
     *
     * @author Matheus Eduardo França <matheusefranca1727@gmail.com>
     */
    initials() {
      if (!this.user) return "";

      const arrayName = this.user.name.split(" ");
      const name = arrayName[0];
      const lastname = arrayName[arrayName.length - 1];

      const resultInitials = `${name[0]}${lastname[0]}`;

      return resultInitials;
    },
    /**
     * @description Pega o primeiro e ultimo nome do usuário.
     *
     * @author Matheus Eduardo França <matheusefranca1727@gmail.com>
     */
    nameAndLastName() {
      if (!this.user) return "";

      const arrayName = this.user.name.split(" ");
      const name = `${arrayName[0]} ${arrayName[arrayName.length - 1]}`;

      return name;
    },
  },
};
</script>

<style></style>
