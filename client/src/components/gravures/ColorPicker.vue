<template>
  <v-card elevation="5">
    <v-card-title>
      <v-icon :style="{ color: getSelectedColor }">mdi-palette</v-icon> Select
      Color
    </v-card-title>
    <v-container>
      <v-row>
        <v-col v-for="color in colors" :key="color" cols="2">
          <v-sheet
            elevation="2"
            width="100%"
            style="height: 50px"
            outlined
            rounded="lg"
            :color="color"
            @click="selectColor(color)"
          ></v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      colors: [
        "#a86b32",
        "#32a8a0",
        "#325da8",
        "#a83c32",
        "#f2eb88",
        "#88f2c9",
        "#88e6f2"
      ]
    };
  },
  methods: {
    selectColor(color) {
      this.$store.commit("selectColor", color);
    }
  },
  computed: {
    ...mapGetters(["getSelectedColor"])
  }
};
</script>

<style></style>
