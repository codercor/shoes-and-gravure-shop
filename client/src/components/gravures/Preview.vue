<template>
  <v-card elevation="0">
    <v-sheet class="d-flex justify-center">
      <GravureForm
        :isTextVisible="true"
        :texts="getUsedTexts"
        :drawer="getSelectedGravureData.svgData"
        :name="getSelectedGravureData.name"
        :color="getSelectedColor"
        :fonts="getFonts"
      />
    </v-sheet>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
import GravureForm from "./GravureForm.vue";

export default {
  components: { GravureForm },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "getSelectedGravureData",
      "getSelectedColor",
      "getUsedTexts",
      "getFonts"
    ])
  }
};
</script>

<style></style>
