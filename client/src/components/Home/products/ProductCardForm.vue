<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text>
      <div>Détails</div>
      <p class="headline text-center text--primary">{{ product.name }}</p>
      <p>{{ product.price }}•CHF</p>
      <div class="text--primary">
        <!-- {{ product.description }} -->
      </div>
    </v-card-text>
    <v-card-actions>
      <v-row class="d-flex justify-space-around">
        <v-btn :to="'/product/' + product.id" color="secondary">GO</v-btn>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["product"],
  data() {
    return {};
  },
  components: {},
  methods: {
    ...mapMutations(["saveProduct"]),
    saveProductToStore() {
      this.$store.state.isShowNotification = true;
      this.saveProduct();
    }
  }
};
</script>

<style></style>
