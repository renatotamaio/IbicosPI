<template>
  <v-row>
    <v-col cols="12">
      <h1>Painel Geral</h1>
    </v-col>
    <v-col cols="12" sm="12" md="6">
      <v-card class="mx-auto" color="blue" dark>
        <v-card-title
          ><v-icon class="mr-3">mdi-offer</v-icon> Serviços
          ofertados</v-card-title
        >
        <v-card-text class="text-h4">3</v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" sm="12" md="6">
      <v-card class="mx-auto" color="green" dark>
        <v-card-title
          ><v-icon class="mr-3">mdi-check</v-icon> Serviços
          concluídos</v-card-title
        >
        <v-card-text class="text-h4">6</v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <v-card>
        <v-card-title>Lista de bicos</v-card-title>
        <v-card-subtitle>
          Veja bicos postados dentro da sua área.
        </v-card-subtitle>
        <v-card-text>
          <CardPrevBicos />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import CardPrevBicos from './componentsProvider/CardPrevBicos.vue'

export default {
  name: "DashboardProvider",
  components: {
    CardPrevBicos
  }
};
</script>

<style></style>
