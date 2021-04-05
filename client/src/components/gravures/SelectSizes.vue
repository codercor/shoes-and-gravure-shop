<template>
  <v-card elevation="5" class="d-flex flex-column justify-center align-center">
    <v-card-title>Select Sizes</v-card-title>

    <v-sheet
      v-for="i in 3"
      :key="i"
      :width="i * 25 + '%'"
      @click="selectSize(getSelectedGravureData.sizes[i - 1])"
      class="mb-6"
    >
      {{
        i == 1 ? 15 + " CHF" : i == 2 ? 18 + " CHF" : i == 3 ? 24 + " CHF" : ""
      }}
      <GravureForm
        color="gray"
        :texts="{
          first: '',
          second: getSelectedGravureData.sizes[i - 1],
          third: '',
        }"
        :sizeSelecting="getSelectedSize == getSelectedGravureData.sizes[i - 1]"
        :fonts="{
          firstLine: { font: 'Times New Roman', size: 36 },
          secondLine: { font: 'Comic Sans MS', size: 30 },
          thirdLine: { font: 'Arial Black', size: 20 },
        }"
        :drawer="getSelectedGravureData.svgData"
        name="Os"
      />
    </v-sheet>
  </v-card>
</template>

<script>
import GravureForm from "./GravureForm.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    GravureForm,
  },
  computed: {
    ...mapGetters(["getSelectedGravureData", "getSelectedSize"]),
  },
  methods: {
    selectSize(size) {
      this.$store.commit("selectSize", size);
    },
  },
};
</script>

<style></style>
