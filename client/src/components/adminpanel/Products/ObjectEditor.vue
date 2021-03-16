<template>
  <div>
    <table>
      <tbody>
        <tr v-for="(property, index) in items" :key="index">
          <td>{{ property[0] }}</td>
          <td>{{ property[1] }}</td>
          <td @click="deleteProperty(property)"><v-icon>mdi-delete</v-icon></td>
        </tr>
        <tr style="width: 100%">
          <v-row>
            <v-col cols="5">
              <v-text-field v-model="key"> </v-text-field
            ></v-col>
            <v-col cols="5">
              <v-text-field v-model="value"> </v-text-field>
            </v-col>
            <v-col cols="2">
              <v-btn @click="addProperty" icon
                ><v-icon> mdi-plus</v-icon></v-btn
              >
            </v-col>
          </v-row>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      editedItem: this.$store.state.panel.editedItem,
      items: "",
      key: "",
      value: ""
    };
  },
  mounted() {
    this.items = Object.entries(this.editedItem[this.data]);
  },
  methods: {
    addProperty() {
      this.$store.state.panel.editedItem[this.data][this.key] = this.value; //this.data.blue = this.data["blue"]
      this.items = Object.entries(this.$store.getters.getEditedItem[this.data]);
      console.log(this.$store.getters.getEditedItem);
    },
    deleteProperty(pr) {
      delete this.$store.state.panel.editedItem[this.data][pr[0]];
      console.log(this.data);
      this.items = Object.entries(this.$store.getters.getEditedItem[this.data]);
    }
  },
  watch: {
    "$store.state.panel.editedItem"() {
      console.log("edited item değişti !");
      this.editedItem = this.$store.state.panel.editedItem;
      this.items = Object.entries(this.editedItem[this.data]);
    }
  }
};
</script>

<style></style>
