<template>
  <v-container>
    <component :is="components[user.type]"></component>
  </v-container>
</template>

<script>
import ls from "@/plugins/secureLs.js";
import DashboardProvider from "../components/DashboardProvider.vue";
import DashboardClient from "../components/DashboardClient.vue";

export default {
  name: "DashboardView",
  data() {
    return {
      components: {
        P: DashboardProvider,
        C: DashboardClient,
      },
    };
  },
  computed: {
    user() {
      const user = ls.get("config").user;
      console.log(user);
      return user;
    },
  },
};
</script>

<style></style>
