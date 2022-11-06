<template>
  <v-container>
    <v-img :src="image" alt="Imagem de erro 404. Pagina não encontrada."></v-img>
  </v-container>
</template>

<script>
import error404 from '@/assets/image/404-error.jpg'

export default {
    name: 'Error404',
    data() {
        return {
            image: error404
        }
    }
}
</script>

<style>

</style>