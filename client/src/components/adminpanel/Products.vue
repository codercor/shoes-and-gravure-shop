<template>
  <v-data-table
    :headers="headers"
    :items="products"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="$store.state.panel.editedItem.name"
                      label="Product Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="$store.state.panel.editedItem.price"
                      label="Price"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field
                      v-model="$store.state.panel.editedItem.type"
                      label="Type"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-textarea
                      outlined
                      name="input-7-1"
                      rows="3"
                      label="Description"
                      v-model="$store.state.panel.editedItem.description"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12">
                    <v-container>
                      <StockEditor />
                    </v-container>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline"
              >Are you sure you want to delete this item?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="uploadDialog" max-width="500px">
          <UploadImage
            v-if="uploadDialog"
            :toggle="toggleUploadDialog"
            :id="productIdForUploadImage"
          />
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.stock="{ item }">
      <v-expansion-panels flat :v-model="true" :disabled="disabled">
        <v-expansion-panel>
          <v-expansion-panel-header>
            {{ getTotalStock(item) }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-simple-table fixed-header height="100px" dense>
              <tbody>
                <tr v-for="(stock, stockName) in item.stock">
                  <td>
                    <v-simple-table dark fixed-header height="100px" dense>
                      <tbody>
                        <tr v-for="(amount, size) in stock">
                          <td>{{ size }} numra : {{ amount }} adet</td>
                        </tr>
                      </tbody>
                    </v-simple-table>
                  </td>
                  <td>{{ stockName }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
    <template v-slot:item.properties="{ item }">
      <v-expansion-panels flat :v-model="true" :disabled="disabled">
        <v-expansion-panel>
          <v-expansion-panel-header>Properties</v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-simple-table fixed-header height="100px" dense>
              <tbody>
                <tr v-for="(property, propertyName) in item.properties">
                  <td>{{ propertyName }}</td>
                  <td>{{ property }}</td>
                </tr>
              </tbody>
            </v-simple-table>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
import StockEditor from "./Products/StockEditor.vue";

import UploadImage from "./Products/UploadImage.vue";

export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    disabled: false,
    uploadDialog: false,
    productIdForUploadImage: "",
    headers: [
      {
        text: "Name",
        align: "start",
        sortable: false,
        value: "name",
      },
      { text: "Price", value: "price" },
      { text: "Stock", value: "stock" },
      { text: "Image", value: "images.length" },
      { text: "Actions", value: "actions" },
    ],
    products: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      name: "",
      price: 0,
      stock: {},
    },
    defaultItem: {
      id: "",
      name: "",
      price: 0,
      stock: {},
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },
  components: {
    StockEditor,
    UploadImage,
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      this.products = (await this.axios.get("/product")).data.data;
      this.products.forEach((p) => {
        if (!p.stock) p.stock = {};
        if (!p.properties) p.properties = {};
      });
      console.log(this.products);
    },
    toggleUploadDialog() {
      this.uploadDialog = !this.uploadDialog;
    },
    getTotalStock(item) {
      let total = 0;
      for (const [key, value] of Object.entries(item.stock)) {
        for (const [key, amount] of Object.entries(item.stock[key])) {
          total += amount;
        }
      }
      return total;
    },
    editItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.$store.commit("setEditedItem", Object.assign({}, item));
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.products.indexOf(item);
      this.$store.commit("setEditedItem", Object.assign({}, item));
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      const selectedProduct = this.$store.getters.getEditedItem;
      const url = "/product/" + selectedProduct.id;
      this.axios.delete(url).then((data) => {
        console.log("DELETE RESPONSE ", data);
      });
      this.products.splice(this.editedIndex, 1);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.$store.commit(
          "setEditedItem",
          Object.assign({}, this.defaultItem)
        );
        this.$store.commit("setEditedItemStock", {});
        this.$store.commit("setSelectedProperty", "");
        this.editedIndex = -1;
      });
      this.initialize();
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.$store.commit(
          "setEditedItem",
          Object.assign({}, this.defaultItem)
        );
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        //düzenlemeyi kaydeden
        Object.assign(this.products[this.editedIndex], this.editedItem);
        const product = this.$store.getters.getEditedItem;
        delete product.images;
        this.axios.patch("/product/" + product.id, { product }).then((data) => {
          this.productIdForUploadImage = product.id;
          this.uploadDialog = true;
          this.close();
        });
      } else {
        //yeni elemanı kaydeden
        this.products.push(this.$store.getters.getEditedItem);
        const data = {
          product: this.$store.getters.getEditedItem,
        };

        this.axios.post("/product", data).then((res) => {
          this.productIdForUploadImage = res.data.id;
          console.log("URUN ID'si bu ", res.data.id);
          this.uploadDialog = true;
          this.close();
        });
      }
    },
  },
};
</script>

<style></style>
