<template>
  <v-card class="ma-3">
    <v-card-title>
      <span>Preciso de Jardineiro</span>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-avatar color="red" v-bind="attrs" v-on="on">
            <span class="white--text text-h5">CJ</span>
          </v-avatar>
        </template>
        <span>Cledinilson Almeida dos Santos</span>
      </v-tooltip>
    </v-card-title>
    <v-card-text>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
      qui ab adipisci fugiat distinctio, modi repudiandae expedita reiciendis,
      aliquid in aspernatur quo voluptatem vel saepe.
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue" dark>
        <v-icon class="mr-2">mdi-eye-arrow-right</v-icon> Ver detalhes
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CardPrevBicos",
};
</script>

<style></style>
