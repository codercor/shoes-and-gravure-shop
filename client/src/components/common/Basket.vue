<template>
  <v-container class="basket-wrapper">
    <div class="d-flex justify-space-between mb-2">
      <h2>Basket</h2>
      <v-icon @click="close">mdi-close</v-icon>
    </div>

    <div class="orders-list scroll-beautify">
      <Order
        v-for="(product, index) in getCart"
        :key="index"
        :index="index"
        :type="product.type"
        :data="product"
      />
    </div>

    <div class="total">
      <v-row>
        <v-col cols="6">
          <div>
            <p class="display-1">TOTAL PRICE:</p>
            <p class="overline">Order :8</p>
            <p class="overline">Total Order Amount :24</p>
          </div>
        </v-col>
        <v-col
          cols="6"
          class="d-flex flex-column align-start justify-space-between"
        >
          <p style="font-size: 70px !important" class="overline">55$</p>
          <div>
            <v-btn width="200" color="warning"> complete order </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import Order from "../basket/Order.vue";

export default {
  components: {
    Order,
  },
  methods: {
    close() {
      this.$store.state.basketIsOpen = false;
    },
  },
  computed: {
    ...mapGetters(["getCart"]),
  },
};
</script>

<style scoped>
.basket-wrapper {
  position: fixed;
}
.total {
  position: fixed;
  bottom: 0;
  overflow: hidden;
  border: none;
  height: 20vh;
  border-top: 1px rgb(110, 109, 109) solid;
  border-top-left-radius: 10px;
}
.orders-list {
  height: 70vh !important;
  overflow-y: scroll;
  overflow-x: hidden;
  border: 1px #03a9f4 solid;
  border-top: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  box-shadow: 5px 5px 5px rgba(68, 68, 68, 0.6);
}
.scroll-beautify::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 10px;
}

.scroll-beautify::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

.scroll-beautify::-webkit-scrollbar-thumb {
  background-color: #03a9f4;
  border-radius: 10px;
  background-image: -webkit-linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.5) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.5) 75%,
    transparent 75%,
    transparent
  );
}
</style>
