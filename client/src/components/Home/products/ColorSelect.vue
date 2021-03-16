<template>
  <v-row justify="center">
    <v-dialog width="60%" v-model="dialog">
      <template v-slot:activator="{ on, attrs }">
        <v-btn :color="selectedColor" dark v-bind="attrs" v-on="on">
          {{ sizecomp }}
        </v-btn>
      </template>
      <v-card>
        <v-card-title> Choisissez une couleurs disponible </v-card-title>
        <v-card-text>
          <v-radio-group v-model="selectedColor" row>
            <v-radio
              v-for="color in colors"
              :key="color"
              :label="color"
              :value="color"
              :color="color"
            ></v-radio>
          </v-radio-group>
          <v-radio-group v-model="sizecomp" row>
            <v-radio
              v-for="size in sizes"
              :key="size"
              :label="`${size}`"
              :value="`${size}`"
              checked
            ></v-radio>
          </v-radio-group>
        </v-card-text>
        <v-card-actions>
          <v-btn
            @click="dialog = false"
            class="v-btn purple white--text ml-auto"
            >OK</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  props: ["colors", "sizes"],
  data() {
    return {
      selectedColor: "black",
      dialog: false,
      selectedSize: null
    };
  },
  computed: {
    sizecomp: {
      get: function() {
        return this.selectedSize
          ? this.selectedSize
          : this.sizes[Math.floor(Math.random() * this.sizes.length)];
      },
      set: function(value) {
        this.selectedSize = value;
      }
    }
  }
};
</script>

<style></style>
