<template>
  <v-container>
    <v-row>
      <v-col cols="9">
        <v-row>
          <v-col cols="6">
            <SelectForm />
          </v-col>
          <v-col cols="6">
            <ColorPicker />
          </v-col>
        </v-row>
        <v-card>
          <v-card-title>
            <v-icon>mdi-eye</v-icon> Set Texts & Preview
          </v-card-title>
          <v-row>
            <v-col cols="6"> <SetTexts class="mt-4" /> </v-col>

            <v-col cols="6"
              ><h4 class="text-center">{{ getSelectedSize }}</h4>
              <Preview class="mt-4" />
              <v-btn
                v-if="!this.isEdit"
                @click="saveGravure"
                color="blue"
                class="ma-2 buy-btn white--text"
              >
                Buy
                <v-icon right> mdi-cart </v-icon>
              </v-btn>
              <v-btn
                v-if="this.isEdit"
                @click="editGravure"
                color="blue"
                class="ma-2 buy-btn white--text"
              >
                Edit
                <v-icon right> mdi-pen </v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols="3">
        <SelectSizes style="height: 100%" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
import ColorPicker from "../components/gravures/ColorPicker.vue";
import Preview from "../components/gravures/Preview";
import SelectForm from "../components/gravures/SelectForm.vue";
import SelectSizes from "../components/gravures/SelectSizes.vue";
import SetTexts from "../components/gravures/SetTexts";

export default {
  data() {
    return {
      isEdit: false,
      initialState: {
        selectedGravure: "Cercle",
        selectedColor: "#a86b32",
        selectedSize: "2.5cm x 2.5cm",
        usedTexts: {
          first: "First Text",
          second: "Second Text",
          third: "Third Text"
        },
        fonts: {
          firstLine: { font: "Times New Roman", size: 40 },
          secondLine: { font: "Comic Sans MS", size: 35 },
          thirdLine: { font: "Arial Black", size: 30 }
        }
      }
    };
  },
  components: {
    SelectForm,
    ColorPicker,
    SetTexts,
    SelectSizes,
    Preview
  },
  computed: {
    ...mapGetters([
      "getSelectedSize",
      "getSelectedColor",
      "getSelectedGravure",
      "getFonts",
      "getUsedTexts",
      "getSelectedGravureData",
      "getCart"
    ])
  },
  beforeMount() {
    if (this.$route.params.id) {
      this.isEdit = true;
      this.getSavedGravure(this.$route.params.id);
    } else {
      this.isEdit = false;
      this.setUsingGravure(this.initialState);
      console.log("localstorage'dan getirilecek");
      this.getSavedGravures();
    }

    console.log(this.isEdit);
  },

  methods: {
    getSavedGravure(id) {
      //parametreden id'yi alıyor ve o id'yw sahip olan gravürü ekranda kullanılan gravür olarak atıyor
      if (id) {
        let selectedSavedGravure = this.$store.state.savedGravures[id];

        if (typeof selectedSavedGravure == "undefined") {
          this.$store.state.savedGravures = this.getSavedGravuresFromStorage();
          selectedSavedGravure = this.$store.state.savedGravures[id];
        }
        console.log(selectedSavedGravure);
        this.setUsingGravure(selectedSavedGravure);
      }
    },
    setUsingGravure(gravure) {
      console.log("sett", gravure);
      let { commit } = this.$store;
      commit("selectGravure", gravure.selectedGravure);
      commit("selectColor", gravure.selectedColor);
      commit("selectSize", gravure.selectedSize);
      this.$store.state.usedTexts = gravure.usedTexts;
      this.$store.state.fonts = gravure.fonts;
    },
    saveGravure() {
      //bu fonksiyon ekranda yapılmış olan gravürü kaydediyor
      let copyGravure = {
        selectedGravure: this.getSelectedGravure,
        selectedColor: this.getSelectedColor,
        selectedSize: this.getSelectedSize,
        usedTexts: this.getUsedTexts,
        fonts: this.getFonts
      };
      console.log(copyGravure);
      this.$store.commit("saveGravure", copyGravure);
      this.$store.commit("updateCartForGravures", false);
      this.saveGravureToStorage(copyGravure);
      setTimeout(() => {
        this.$router
          .push("/gravures/" + (this.getCart.length - 1).toString())
          .catch(x => {
            console.log("/gravures/" + (this.getCart.length - 1).toString());
          });
        this.showNotification();
      }, 200);
    },
    showNotification(isBuy = true) {
      if (isBuy)
        this.$store.state.notificationMessage =
          "Sepete ekleme işlemi başarıyla gerçekleşti.";
      else
        this.$store.state.notificationMessage = "Düzenleme işlemi Başarılı !";
      this.$store.state.isShowNotification = true;
    },
    editGravure() {
      //kayıtlı gravürler içerisinden düzenlenen gravürü günceller
      let savedGravures = this.getSavedGravuresFromStorage();
      let copyGravure = {
        selectedGravure: this.getSelectedGravure,
        selectedColor: this.getSelectedColor,
        selectedSize: this.getSelectedSize,
        usedTexts: this.getUsedTexts,
        fonts: this.getFonts
      };
      savedGravures[this.$route.params.id] = copyGravure;
      this.$store.commit("editGravure", {
        id: this.$route.params.id,
        gravure: copyGravure
      });
      this.$store.commit("updateCartForGravures", true);
      localStorage.setItem("savedGravures", JSON.stringify(savedGravures));
      this.showNotification(false);
    },
    saveGravureToStorage(data) {
      if (localStorage.getItem("savedGravures")) {
        let savedGravures = JSON.parse(localStorage.getItem("savedGravures"));
        savedGravures.push(data);
        localStorage.setItem("savedGravures", JSON.stringify(savedGravures));
      } else {
        localStorage.setItem("savedGravures", JSON.stringify([data]));
      }
    }
  },
  watch: {
    //urldeki id parametresinin değişimi izler ve o id'ye sahip olan gravürü getirir.
    "$route.params.id": function() {
      if (this.$route.params.id) {
        this.isEdit = true;
        this.getSavedGravure(this.$route.params.id);
      } else {
        this.setUsingGravure(this.initialState);
        this.isEdit = false;
      }
      console.log(this.isEdit);
    }
  }
};
</script>

<style>
.buy-btn {
  position: absolute;
  bottom: 20%;
  right: 10%;
  width: 30%;
}
.v-snack__wrapper {
  height: 200px;
}
</style>
