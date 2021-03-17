<template>
  <v-card class="mb-4 mt-3" elevation="4">
    <v-container>
      <v-row>
        <v-col class="d-flex justify-center align-center" cols="5">
          <div>
            <v-img
              height="100"
              width="100"
              class="rounded-circle"
              :src="require('../../assets/images/carousel/first.jpg')"
            />
          </div>
        </v-col>

        <v-col cols="7">
          <span class="overline"> {{ data.title }} </span>
          <span class="overline">price : {{ data.price }}$ </span>

          <v-chip> Color: {{ data.properties.selectedProperty }} </v-chip>
          <v-chip> Size: {{ data.properties.selectedSubProperty }} </v-chip>
          <div>
            <span>amount :</span>
            <v-btn
              @click="setAmmount(true)"
              icon
              color="primary"
              class="rounded-circle"
            >
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            {{ data.amount }}
            <v-btn
              @click="setAmmount(false)"
              icon
              color="primary"
              class="rounded-circle"
            >
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <div v-if="type == 'gravure'">
              <v-btn
                @click="$router.push('/gravures/' + data.index)"
                color="primary"
                >Edit gravure</v-btn
              >
            </div>
          </div>
          <v-icon @click="deleteOrder(index)" class="delete-product-icon"
            >mdi-close</v-icon
          >
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import DropdownColorPicker from "../basket/DropdownColorPicker.vue";
export default {
  props: ["type", "data", "index"],
  components: {
    DropdownColorPicker,
  },
  data() {
    return {};
  },
  methods: {
    deleteOrder(index) {
      this.$store.commit("deleteOrderFromCart", index);
    },
    setAmmount(isPlus, index) {
      if (isPlus) {
        this.$store.commit("increaseAmount", this.index);
      } else {
        if (this.data.amount > 0) {
          this.$store.commit("decreaseAmount", this.index);
        }
      }
    },
  },
};
</script>

<style scoped>
i {
  padding: 10px;
}
.delete-product-icon {
  position: absolute;
  top: 0;
  right: 0;
  color: red;
  cursor: pointer;
}
.delete-product-icon:hover {
  font-size: 28px;
  animation: rotate-center 0.6s ease-in-out both;
}
@keyframes rotate-center {
  0% {
    -webkit-transform: rotate(0);
    transform: rotate(0);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
