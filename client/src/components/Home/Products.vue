<template>
  <v-row>
    <v-col v-for="(product, index) in products" :key="index" sm="12" md="6">
      <Product :product="product" />
    </v-col>
  </v-row>
</template>

<script>
import Product from "./products/Product.vue";

export default {
  beforeMount() {
    this.axios.get("/product").then(data => {
      console.log("GELEN ÜRÜNLER VERİSİ :", data.data.data);
      this.products = data.data.data;
    });
  },
  data() {
    return {
      products: []
    };
  },
  /*
  [
        {
          img: "Klasik_Erkek_1.jpg",
          name: "ABS",
          type: "Klasik",
          price: 180,
          description: "Cok güzel ayakkabi",
          colors: ["brown", "black"],
          sizes: ["42", "43", "44", "45"],
        },
        {
          img: "Klasik_Erkek_2.jpg",
          name: "Anm",
          type: "Klasik",
          price: 180,
          description: "Cok güzel ayakkabi",
          colors: ["brown", "black"],
          sizes: ["42", "43", "44", "45"],
        },
        {
          img: "Klasik_Erkek_3.jpg",
          name: "Avc",
          type: "Klasik",
          price: 180,
          description: "Cok güzel ayakkabi",
          colors: ["brown", "black"],
          sizes: ["42", "43", "44", "45"],
        },
        {
          img: "Klasik_Erkek_4.jpg",
          name: "Avv",
          type: "Klasik",
          price: 180,
          description: "Cok güzel ayakkabi",
          colors: ["Maron", "black"],
          sizes: ["42", "43", "44", "45"],
        },
        {
          img: "Klasik_Erkek_5.jpg",
          name: "Aff",
          type: "Klasik",
          price: 180,
          description: "Cok güzel ayakkabi",
          colors: ["brown", "black"],
          sizes: ["42", "43", "44", "45"],
        },
        {
          img: "Sport_Erkek_6.jpg",
          name: "App",
          type: "Sport",
          price: 180,
          description: "Cok güzel ayakkabi",
          colors: ["navy", "black"],
          sizes: ["42", "43", "44", "45"],
        },
      ], */
  components: {
    Product
  }
};
</script>

<style></style>
