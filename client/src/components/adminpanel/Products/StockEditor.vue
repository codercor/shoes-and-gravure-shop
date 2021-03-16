<template>
  <v-card elevation="0">
    <v-row>
      <v-col cols="6" class="px-5">
        <v-card elevation="0">
          <v-text-field v-model="propertyName" placeholder="Add Property">
            <v-icon slot="append" @click="addProperty" color="black">
              mdi-plus
            </v-icon>
          </v-text-field>
          <v-list-item-group color="info" v-model="selectedPropertyIndex">
            <v-list-item
              @click="selectedProperty = key"
              v-for="(item, key) in stock"
              :key="key"
            >
              <v-list-item-content>
                <div class="d-flex">
                  <v-list-item-title> {{ key }} </v-list-item-title>
                  <v-icon @click="deleteProperty(key)"> mdi-close </v-icon>
                </div>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-card>
      </v-col>
      <v-col v-if="$store.state.panel.selectedProperty" cols="6">
        <v-card elevation="0">
          <h3>{{ $store.state.panel.selectedProperty }}</h3>
          <v-text-field v-model="subproperty" placeholder="Add Sub-property">
            <v-icon slot="append" @click="addSubProperty" color="black">
              mdi-plus
            </v-icon>
          </v-text-field>

          <v-list-item
            v-for="(item, key) in stock[selectedProperty]"
            :key="key"
          >
            <v-list-item-content>
              <v-list-item-title>
                <div class="d-flex">
                  <v-text-field
                    v-model="stock[selectedProperty][key]"
                    type="number"
                  >
                    <span slot="prepend"> {{ key }} </span>

                    <v-icon
                      @click="deleteSubProperty(key)"
                      color="black"
                      slot="append"
                    >
                      mdi-close
                    </v-icon>
                  </v-text-field>
                </div>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      propertyName: "",
      subproperty: "",
      subpropertyValue: "",
      selectedPropertyIndex: 0,
      selectedProperty: "",
    };
  },
  watch: {
    selectedProperty() {
      this.$store.commit("setSelectedProperty", this.selectedProperty);
    },
  },
  mounted() {
    console.log(this.stock);
  },
  computed: {
    ...mapGetters(["stock"]),
  },
  methods: {
    addProperty() {
      this.$store.commit("addPropertyStock", this.propertyName);
      this.propertyName = "";
    },
    addSubProperty() {
      this.$store.commit("addSubPropertyStock", {
        selectedProperty: this.selectedProperty,
        subproperty: this.subproperty,
      });
      this.subproperty = "";
    },
    deleteProperty(property) {
      console.log(property);
      this.$store.commit("deletePropertyStock", property);
      this.selectedProperty = "";
      this.$forceUpdate();
    },
    deleteSubProperty(subproperty) {
      this.$store.commit("deleteSubPropertyStock", {
        selectedProperty: this.selectedProperty,
        subproperty,
      });
      this.$forceUpdate();
    },
  },
};
</script>

<style></style>
