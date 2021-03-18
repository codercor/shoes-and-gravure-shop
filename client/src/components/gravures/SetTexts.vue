<template>
  <v-card elevation="0" min-height="300px">
    <v-tabs vertical>
      <v-tab> Ligne 1 </v-tab>
      <v-tab> Ligne 2 </v-tab>
      <v-tab> Ligne 3 </v-tab>
      <v-tab-item>
        <v-sheet>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-select
                  solo
                  :items="fontFamilies"
                  v-model="$store.state.app.fonts.firstLine.font"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  type="number"
                  solo
                  v-model="$store.state.app.fonts.firstLine.size"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  :counter="counter"
                  v-model="$store.state.app.usedTexts.first"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-tab-item>
      <v-tab-item>
        <v-sheet>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-select
                  solo
                  :items="fontFamilies"
                  v-model="$store.state.app.fonts.secondLine.font"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  type="number"
                  solo
                  v-model="$store.state.app.fonts.secondLine.size"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  counter="10"
                  v-model="$store.state.app.usedTexts.second"
                >
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-tab-item>
      <v-tab-item>
        <v-sheet>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-select
                  solo
                  :items="fontFamilies"
                  v-model="$store.state.app.fonts.thirdLine.font"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  type="number"
                  solo
                  v-model="$store.state.app.fonts.thirdLine.size"
                >
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="$store.state.app.usedTexts.third">
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      fontFamilies: ["Times New Roman", "Arial Black", "Comic Sans MS"],
    };
  },
  computed: {
    counter() {
      let fontSize = this.$store.state.app.fonts.firstLine.size;
      let counter = 0;
      if (fontSize <= 30 && fontSize > 25) counter = 20;
      if (fontSize <= 40 && fontSize > 30) counter = 15;
      return counter;
    },
  },
};
</script>

<style></style>
