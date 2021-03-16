<template>
  <div>
    <v-card>
      <v-card-title class="headline"
        >Upload image<v-spacer></v-spacer>
        <v-btn
          @click="selectImage"
          style="background: transparent; outline: none; border: none"
        >
          <v-icon> mdi-plus </v-icon>
          <input
            v-show="false"
            ref="fileInput"
            type="file"
            multiple
            accept="image/png, image/jpeg"
          />
        </v-btn>
      </v-card-title>
      <v-container>
        <v-row>
          <v-col
            v-for="(image, index) in images"
            :key="image"
            class="d-flex child-flex"
            cols="4"
          >
            <v-img :src="image" aspect-ratio="1" class="grey lighten-2">
              <div style="display: flex; flex-direction: row-reverse">
                <v-icon
                  @click="deleteImage(index)"
                  style="cursor: pointer"
                  color="red"
                >
                  mdi-close
                </v-icon>
              </div>
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-col>
        </v-row>
        <h3 v-if="images.length == 0">There is not selected image</h3>
      </v-container>
      <v-card-actions>
        <v-btn @click="saveImages" color="primary"> OK </v-btn>
        <v-btn color="primary"> Cancel </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["id", "toggle"],
  data() {
    return {
      images: [],
      files: []
    };
  },
  mounted() {
    let input = this.$refs.fileInput;
    console.log("RESİMLERİ ÇEKİLECEK ÜRÜNÜN İD Sİ :" + this.id);
    const url = `/product/${this.id}`;
    this.axios.get(url).then(data => {
      console.log("DATA", data);
      data.data.data.images.forEach(image => {
        this.images.push("http://localhost:3000/images/" + image);
      });
    });
    input.addEventListener("change", e => {
      console.log("SEÇİLENLER", input.files);
      Array.from(input.files).forEach(item => this.files.push(item));
      console.log("SON DURUM", this.files);
      for (const image of input.files) {
        this.images.push(URL.createObjectURL(image));
      }
    });
  },
  methods: {
    selectImage() {
      this.$refs.fileInput.value = "";
      this.$refs.fileInput.click();
    },
    deleteImage(index) {
      this.images.splice(index, 1);
      this.files.splice(index, 1);
      this.axios
        .delete("/product/" + this.id + "/image", { index })
        .then(res => console.log(res));
    },
    saveImages() {
      const form = new FormData();
      for (const file of this.files) {
        form.append("images[]", file);
      }
      const url = `/product/${this.id}/image`;
      this.axios
        .post(url, form)
        .then(data => {
          if (data.data.process.ok) this.toggle();
        })
        .catch(err => {
          console.log(err);
        });
      // id this.id
      //localhost:3000/v1/ <id> /image POST  body : form;  // this.axios kullanılcak
      //console'a cevap yazdırılacak
    }
  }
};
</script>

<style scoped>
.image {
  height: 100%;
  width: 100%;
  background: black;
}
</style>
