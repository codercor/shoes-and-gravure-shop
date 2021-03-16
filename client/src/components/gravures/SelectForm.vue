<template>
  <v-card elevation="5" outlined>
    <v-card-title> <v-icon>mdi-gesture</v-icon> Select A Gravure </v-card-title>
    <v-container>
      <v-row>
        <v-col
          v-for="gravure in getAllGravures"
          :key="gravure.name"
          @click="selectGravure(gravure.name)"
          md="3"
          sm="6"
        >
          <GravureForm
            :selected="getSelectedGravure"
            :drawer="gravure.svgData"
            :color="initalColor"
            :name="gravure.name"
            :texts="initialTexts"
          />
        </v-col>
      </v-row>
    </v-container>

    <v-card-actions> </v-card-actions>
  </v-card>
</template>

<script>
import GravureForm from "./GravureForm.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    GravureForm
  },
  data() {
    return {
      initialTexts: { first: "", second: "", third: "" },
      initalColor: "#c3c9c9"
    };
  },
  methods: {
    selectGravure(name) {
      //mutation çalıştırıyor
      this.$store.commit("selectGravure", name);
    }
  },
  computed: {
    ...mapGetters(["getAllGravures", "getSelectedGravure"])
  }
};
</script>

<style></style>
