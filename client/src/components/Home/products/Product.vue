<template>
  <v-parallax dark :src="'http://localhost:3000/images/' + product.images[0]">
    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12">
        <h1 class="display-1 font-weight-thin mb-4">{{ product.name }}</h1>
        <h4 class="subheading">{{ product.type }}</h4>
        <ProductCardForm :product="product" />
      </v-col>
    </v-row>
  </v-parallax>
</template>

<script>
import ProductCardForm from "./ProductCardForm.vue";

export default {
  props: ["product"],

  components: {
    ProductCardForm
  }
};
</script>

<style>
.v-parallax__image {
  /* width: 123% !important;
    bottom: 64% !important; */
  /* transform: translate(-52%, 14%)!important; */
}
</style>
