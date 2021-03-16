<template>
  <v-container v-if="load" class="grey lighten-5">
    <v-row>
      <v-col cols="6">
        <v-card>
          <h1>Carousel</h1>
          <div>
            <v-carousel height="400" v-model="model">
              <v-carousel-item v-for="image in images" :key="image">
                <v-row>
                  <v-col cols="12">
                    <v-img
                      :src="`http://localhost:3000/images/${image}`"
                      :lazy-src="`http://localhost:3000/images/${image}`"
                      aspect-ratio="2"
                      class="grey lighten-2"
                    >
                      <template v-slot:placeholder>
                        <v-row
                          class="fill-height ma-0"
                          align="center"
                          justify="center"
                        >
                          <v-progress-circular
                            indeterminate
                            color="grey lighten-5"
                          ></v-progress-circular>
                        </v-row>
                      </template>
                    </v-img>
                  </v-col>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </div>
        </v-card>
      </v-col>

      <v-col cols="6" md="6" sm="12">
        <v-card
          class="d-flex flex-column justify-space-around align-content-space-around"
          height="100%"
        >
          <v-card elevation="0">
            <v-card-title> {{ title }} </v-card-title>
            <v-card-text>
              {{ description }}
            </v-card-text>
          </v-card>

          <v-card elevation="0" class="mt-2">
            <v-card-title> Select </v-card-title>
            <v-container>
              <v-row>
                <v-col cols="6">
                  <v-select
                    prefix="Color:"
                    dense
                    v-model="selectedProperty"
                    :items="Object.keys(stock)"
                  >
                  </v-select
                ></v-col>
                <v-col cols="6">
                  <v-select
                    prefix="Size:"
                    dense
                    v-model="selectedSubProperty"
                    :items="Object.keys(stock[selectedProperty])"
                  >
                  </v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <v-card
            elevation="0"
            class="mt-1 justify-space-between pa-4 d-flex align-content-space-around"
          >
            <h2>{{ price }}₺</h2>
            <v-btn @click="addToCart" color="info">Sepete Ekle</v-btn>
          </v-card></v-card
        >
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  beforeMount() {
    const id = this.$route.params.id;
    this.axios.get("/product/" + id).then((data) => {
      data = data.data.data;
      this.type = data.type;
      this.images = data.images;
      this.title = data.name;
      this.price = data.price;
      this.stock = data.stock;
      this.description = data.description;
      let keys = Object.keys(this.stock);
      this.selectedProperty = keys[0];
      let subKeys = Object.keys(this.stock[this.selectedProperty]);
      this.selectedSubProperty = subKeys[0];
      this.load = true;
    });
  },
  methods: {
    addToCart() {
      let {
        title,
        price,
        images,
        type,
        selectedProperty,
        selectedSubProperty,
      } = this;
      let item = {
        id: this.$route.params.id,
        amount: 1,
        title,
        price,
        type,
        image: images[0],
        properties: { selectedProperty, selectedSubProperty },
      };
      this.$store.commit("addItemToCart", item);
    },
  },
  data() {
    return {
      title: "",
      description: "",
      price: null,
      colors: ["primary", "secondary", "yellow darken-2", "red", "orange"],
      images: [],
      stock: {},
      load: false,
      model: 0,
      selectedProperty: "",
      selectedSubProperty: "",
    };
  },
};
</script>

<style>
.container {
  box-sizing: border-box;
}
.select-property {
  border: 1px black solid;
  width: 100px;
}
</style>
