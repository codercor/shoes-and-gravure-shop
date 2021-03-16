<template>
  <v-container>
    <Carousel /> <Presentation /> <Services /> <Products />
  </v-container>
</template>

<script>
import Carousel from "../components/Home/Carousel.vue";
import Presentation from "../components/Home/Presentation.vue";
import Products from "../components/Home/Products.vue";
import Services from "../components/Home/Services";

export default {
  components: {
    Carousel,
    Presentation,
    Services,
    Products
  }
};
</script>

<style></style>
