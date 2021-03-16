<template>
  <v-carousel interval="2000">
    <v-carousel-item
      v-for="(item, i) in images"
      :key="i"
      :src="item"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("@/assets/images/carousel/first.jpg"),
        require("@/assets/images/carousel/second.jpg"),
        require("@/assets/images/carousel/third.jpg")
      ]
    };
  }
};
</script>

<style></style>
