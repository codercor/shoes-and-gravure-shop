import Vue from "vue";
import Vuex from "vuex";

import uuid from 'uuid';

import createPersistedState from "vuex-persistedstate";



Vue.use(Vuex);
const app = {
  state: {
    basketIsOpen: false,
    cart: [],
    test: [],
    isShowNotification: "",
    isShowNotification: false,

    gravures: [
      {
        name: "Cercle",
        prices: { "2.5cm x 2.5cm": 15, "3cm x 3cm": 18, "3.8cm x 3.8cm": 24 },
        sizes: ["2.5cm x 2.5cm", "3cm x 3cm", "3.8cm x 3.8cm"],
        svgData:
          "M 44.244 291.35 L 47.12 251.257 L 56.954 219.305 L 70.662 188.46 L 83.602 169.714 L 96.647 154.56 C 96.647 154.56 114.679 134.438 139.489 116.887 C 150.397 109.172 164.582 103.026 175.798 97.495 C 183.26 93.812 185.781 88.375 188.861 82.26 C 190.849 78.317 193.464 67.14 193.464 67.14 L 194.727 48.413 L 198.876 34.577 L 206.161 23.318 L 218.392 12.409 L 228.468 6.65 L 240.517 3.049 L 252.904 3.161 L 260.977 3.762 L 273.533 6.565 L 287.058 15.989 L 297.157 27.316 L 301.89 39.467 L 304.627 57.147 L 308.114 77.302 L 314.38 89.095 L 321.873 96.935 L 342.538 107.681 L 371.213 126.923 L 391.099 145.089 L 414.488 170.013 L 435.826 209.729 L 444.462 233.171 L 452.082 270.581 L 452.038 313.172 L 449.443 330.652 L 445.937 346.379 L 439.44 365.082 L 432.492 382.054 L 419.208 406.099 L 406.305 423.926 L 389.722 440.863 L 372.092 456.158 L 352.942 469.426 L 314.794 486.269 L 289.963 492.588 L 255.935 497.647 C 255.935 497.647 237.542 497.01 217.85 494.142 C 205.108 492.286 191.823 489.015 182.622 486.006 C 162.595 479.455 125.581 455.014 125.581 455.014 L 102.832 434.981 L 84.144 412.943 L 70.23 391.32 C 67.69 387.422 54.119 356.805 54.119 356.805 L 46.698 323.951 L 44.244 291.35 Z M 263.873 35.118 C 262.047 34.369 255.457 31.053 246.671 31.633 C 239.552 32.104 233.251 37.341 230.54 39.703 C 224.62 44.862 222.901 52.311 222.483 56.705 C 222.031 61.465 223.257 69.499 226.947 74.812 C 231.094 80.778 237.866 83.8 239.349 84.405 C 241.446 85.259 245.784 87.025 255.448 85.559 C 263.805 84.295 268.372 79.907 269.325 78.953 C 271.533 76.743 276.194 70.812 277.15 67.158 C 277.766 64.81 278.877 60.028 277.769 55.245 C 276.706 50.662 275.007 46.391 273.569 43.957 C 272.187 41.616 265.12 35.629 263.873 35.118 Z",
      },
      {
        name: "Os",
        prices: { "2.5cm x 2.5cm": 17, "3cm x 3cm": 20, "3.8cm x 3.8cm": 28 },
        sizes: ["2.5cm x 2.5cm", "3cm x 3cm", "3.8cm x 3.8cm"],
        svgData:
          "M 53.003 233.741 C 46.724 230.436 44.085 230.809 32.959 221.336 C 29.92 218.749 21.324 208.902 19.295 205.321 C 14.224 196.368 9.779 190.749 7.36 180.535 C 4.796 169.708 4.453 152.987 6.796 141.562 C 8.392 133.781 11.269 125.59 14.96 118.391 C 20.663 107.269 29.145 99.022 40.406 91.785 C 47.659 87.124 53.738 83.735 61.907 80.685 C 75.329 75.674 95.246 75.7 110.464 79.83 C 121.691 82.877 129 88.189 138.923 94.836 C 141.669 96.675 144.313 98.658 146.855 100.785 C 150.338 103.699 153.832 106.804 156.077 110.939 C 157.147 112.911 158.949 114.879 163.498 115.356 C 170.288 116.069 168.587 115.769 174.024 116.258 C 176.879 116.515 185.789 116.027 188.706 115.958 C 189.973 115.928 193.912 115.695 195.594 115.549 C 197.107 115.418 199.257 115.939 201.295 114.423 C 202.808 113.298 204.288 111.005 203.216 108.385 C 197.428 94.239 200.061 79.988 210.696 63.952 C 213.841 59.209 219.287 54.514 224.514 51.545 C 229.245 48.858 233.682 46.455 239.085 45.177 C 244.462 43.905 250.599 43.884 256.238 44.275 C 262.25 44.692 269.448 46.774 274.892 50.103 C 280.061 53.264 283.438 56.689 287.963 60.798 C 292.232 64.675 294.986 69.743 296.224 76 C 296.734 78.578 298.777 83.08 298.855 90.34 C 298.959 100.036 297.039 112.677 297.546 113.207 C 300.671 116.473 311.739 115.383 315.194 115.638 C 324.673 116.339 322.909 114.91 332.563 115.646 C 337.525 116.024 342.6 114.381 346.45 109.377 C 352.163 101.952 359.213 95.114 367.6 90.201 C 373.941 86.487 378.651 82.509 385.749 80.274 C 399.066 76.081 415.298 76.333 429.758 77.681 C 433.469 78.027 444.879 81.56 454.443 87.189 C 457.098 88.752 489.496 109.231 492.563 148.581 C 492.953 153.582 494.783 164.572 492.101 178.139 C 490.259 187.45 485.742 196.116 480.383 204.291 C 475.8 211.283 469.252 219.205 462.576 223.482 C 458.756 225.929 455.782 228.605 452.912 230.468 C 449.359 232.775 444.982 235.534 444.928 237.977 C 444.771 245.157 453.328 246.669 462.233 253.47 C 467.298 257.338 471.579 263.302 475.668 267.51 C 486.669 278.832 490.224 291.441 491.865 300.422 C 494.541 315.073 496.515 320.398 494.914 330.963 C 494.648 332.717 493.446 341.942 490.204 350.298 C 487.379 357.577 482.926 363.552 477.227 371.609 C 466.548 386.708 448.405 400.061 427.604 401.814 C 422.21 402.269 415.076 402.444 407.22 401.845 C 394.379 400.865 381.285 395.806 369.046 388.524 C 362.344 384.536 355.864 377.03 349.309 370.961 C 344.967 366.94 341.803 362.96 337.798 363.596 C 334.242 364.16 330.416 363.36 326.6 363.071 C 322.22 362.739 316.687 363.323 312.755 363.211 C 298.014 362.792 285.17 362.648 271.202 362.7 C 247.683 362.788 218.824 363.483 191.871 363.905 C 181.058 364.074 170.32 365.02 160.588 364.729 C 160.588 364.729 149.946 374.451 146.399 378.491 C 141.744 383.791 139.199 384.604 134.835 388.29 C 122.477 398.727 110.434 401.131 110.434 401.131 C 92.513 403.877 77.676 404.479 62.751 400.437 C 53.892 398.037 26.889 385.228 14.014 359.316 C 10.04 351.319 7.735 347.7 6.851 337.336 C 6.159 329.228 4.603 325.252 5.023 318.337 C 5.674 307.627 10.593 280.259 22.229 270.32 C 23.682 269.079 27.137 265.364 28.85 263.752 C 31.368 261.382 32.286 260.849 35.288 257.211 C 37.755 254.221 51.092 247.91 54.781 242.781 C 58.288 237.905 52.202 234.141 52.708 233.624 L 53.003 233.741 Z M 252.213 71.332 C 247.94 71.2 242.759 72.11 238.973 74.521 C 234.371 77.453 231.528 82.225 231.039 85.225 C 230.546 88.252 230.472 91.885 230.995 95.383 C 231.457 98.474 233.812 101.459 235.328 103.829 C 236.688 105.955 242.012 110.012 249.045 110.46 C 254.448 110.804 259.888 108.368 263.97 105.25 C 265.983 103.712 269.14 98.996 270.072 94.252 C 270.971 89.68 269.372 85.853 269.222 85.211 C 268.85 83.617 267.175 80.271 264.47 77.398 C 261.707 74.462 257.28 71.489 252.213 71.332 Z",
      },
      {
        name: "Rond",
        prices: { "2.5cm x 2.5cm": 16, "3cm x 3cm": 19, "3.8cm x 3.8cm": 25 },
        sizes: ["2.5cm x 2.5cm", "3cm x 3cm", "3.8cm x 3.8cm"],
        svgData:
          "M 184.258 26.975 L 225.288 19.43 L 258.669 15.689 L 309.046 19.907 C 309.046 19.907 339.5 32.163 354.183 39.923 C 361.355 43.712 389.843 62.175 389.843 62.175 L 429.834 101.521 L 452.109 131.57 L 468.209 166.081 L 483.155 228.84 L 487.496 268.797 L 477.553 322.774 L 459.813 360.13 L 434.188 398.598 L 396.016 435.001 L 344.954 464.977 L 300.399 480.851 L 259.316 485.329 L 215.002 482.918 L 171.933 469.33 L 132.229 454.673 L 98.351 429.016 L 72.461 405.575 L 39.173 360.511 L 23.046 310.821 L 16.338 253.591 L 23.297 196.814 L 44.615 141.785 L 84.741 87.001 L 114.35 60.89 L 152.345 40.583 L 184.258 26.975 Z M 232.473 64.032 C 228.238 67.455 221.907 76.279 220.604 82.336 C 218.793 90.75 219.183 100.294 224.683 109.293 C 230.045 118.064 239.899 125.79 249.542 127.321 C 258.747 128.782 270.782 126.071 277.771 120.841 C 284.265 115.98 289.577 110.263 291.703 102.784 C 292.478 100.055 296.771 90.766 292.366 79.662 C 290.793 75.696 287.945 68.444 284.061 65.979 C 280.735 63.867 277 59.682 271.605 57.685 C 267.679 56.231 258.875 54.888 255.168 54.93 C 242.152 55.076 233.861 62.91 232.473 64.032 Z",
      },
      {
        name: "Coeur",
        prices: { "2.5cm x 2.5cm": 19, "3cm x 3cm": 24, "3.8cm x 3.8cm": 30 },
        sizes: ["2.5cm x 2.5cm", "3cm x 3cm", "3.8cm x 3.8cm"],
        svgData:
          "M 230.087 491.735 L 183.243 461.454 L 144.412 428.69 L 103.473 384.596 L 81.282 354.679 L 60.629 320.676 L 49.131 300.031 L 37.544 273.363 L 27.34 237.056 L 26.91 203.195 L 32.815 161.054 L 43.093 137.432 L 56.089 116.522 L 74.411 96.369 L 93.079 82.926 L 116.761 71.055 L 144.198 64.1 L 165.278 62.421 L 183.072 63.182 L 190.339 59.888 L 202.003 33.325 L 214.065 20.194 L 230.284 10.403 L 247.013 6.422 L 264.059 7.81 L 280.162 11.189 L 297.659 25.033 L 308.506 41.695 L 313.141 60.134 L 316.015 68.801 L 332.607 71.903 L 353.814 74 L 377.244 82.108 L 399.293 92.577 L 423.821 112.467 L 443.136 139.679 L 455.593 166.936 L 462.424 195.286 L 464.024 224.728 L 460.255 257.559 L 451.347 289.495 L 433.117 321.631 L 405.509 358.922 L 361.735 406.271 L 319.725 440.496 L 271.833 472.162 L 230.087 491.735 Z M 252.57 41.823 C 251.494 41.842 244.128 42.771 237.994 46.014 C 234.241 47.997 230.107 53.078 227.835 56.533 C 222.992 63.898 223.019 70.65 223.101 73.92 C 223.257 80.044 228.034 85.952 230.48 89.889 C 234.908 97.018 251.805 98.693 254.059 97.964 C 256.549 98.217 263.199 96.224 270.515 90.01 C 274.924 86.265 278.041 78.529 278.804 75.777 C 279.715 72.489 278.11 61.149 276.633 58.771 C 274.862 55.92 271.536 49.552 267.647 47.373 C 263.327 44.951 258.468 41.716 252.57 41.823 Z",
      },
    ],
    selectedGravure: "Cercle",
    selectedColor: "#a86b32",
    selectedSize: "2.5cm x 2.5cm",
    usedTexts: {
      first: "First Text",
      second: "Second Text",
      third: "Third Text",
    },
    fonts: {
      firstLine: { font: "Times New Roman", size: 40 },
      secondLine: { font: "Comic Sans MS", size: 35 },
      thirdLine: { font: "Arial Black", size: 30 },
    },
  },
  mutations: {
    saveGravure(state, data) {
      let gravures = state.gravures;
      let selected = gravures.filter((item) => {
        return item.name == data.selectedGravure;
      })[0];

      let unitPrice = selected.prices[data.selectedSize];

      let order = {
        properties: data,
        title: "Gravure",
        unitPrice,
        price: unitPrice,
        image: "https://media.istockphoto.com/illustrations/gravure-of-antoine-lavoisier-illustration-id508646187?s=612x612",
        type: "gravure",
        amount: 1,
        id: uuid()
      }

      state.cart.push(order)
    },
    deleteOrderFromCart(state, index) {
      state.cart.splice(index, 1);
    },
    editGravure(state, { id, properties }) {
      state.cart.forEach((item) => {
        if (item.id == id) {
          item.properties = properties;
        }
      })
    },
    selectGravure(state, name) {
      state.selectedGravure = name;
    },
    selectColor(state, color) {
      state.selectedColor = color;
    },
    selectSize(state, size) {
      state.selectedSize = size;
    },
    setUsingGravure(state, payload) {
      console.log(payload);
      state.selectedColor = payload.selectedColor;
      state.selectedSize = payload.selectedSize;
      state.selectedGravure = payload.selectedGravure
      state.usedTexts = payload.usedTexts;
      state.fonts = payload.fonts;
    },
    addItemToCart(state, data) {
      state.cart.push(data);
    },
    removeItemFromCart(state, index) {
      state.cart = state.cart.filter((item, i) => {
        return i != index;
      });
    },
    increaseAmount(state, index) {
      state.cart[index].amount++;
      let element = state.cart[index];
      state.cart[index].price = element.unitPrice * element.amount;
    },
  },
  actions: {
    decreaseAmount({ state, commit }, index) {
      console.log("action çalıştı");
      console.log(state.cart[index]);
      let element = state.cart[index];
      state.cart[index].amount > 1 ? (() => { state.cart[index].amount--; state.cart[index].price = element.unitPrice * element.amount; })() : commit("removeItemFromCart", index);
    },
  },
  getters: {
    getCart(state) {
      return state.cart
    },
    getSelectedGravure(state) {
      return state.selectedGravure;
    },
    getAllGravures(state) {
      return state.gravures;
    },
    getSelectedColor(state) {
      return state.selectedColor;
    },
    getSelectedGravureData(state) {
      let name = state.selectedGravure;
      let gravures = state.gravures;
      let selectedGravureData = gravures.filter((item) => {
        return item.name == name;
      });
      selectedGravureData = selectedGravureData[0];
      return selectedGravureData;
    },
    getSelectedSize(state) {
      return state.selectedSize;
    },
    getUsedTexts(state) {
      return state.usedTexts;
    },
    getFonts(state) {
      return state.fonts;
    },
    getGravureDataAll(state) {
      return {
        selectedSize: state.selectedSize,
        usedTexts: state.usedTexts,
        fonts: state.fonts,
        selectedColor: state.selectedColor,
        selecetdGravure: state.selectedGravure
      }
    }
  },
};
const panel = {
  state: {
    editedItem: {
      id: "",
      name: "",
      type: "",
      price: 0,
      stock: {},
      description: "",
    },
    selectedProperty: ""
  },
  mutations: {
    setEditedItem(state, editedItem) {
      state.editedItem = editedItem;
      console.log(state.editedItem);
    },
    setEditedItemStock(state, stock) {
      state.editedItem.stock = stock;
      console.log(state.editedItem);
    },
    addPropertyStock(state, payload) {
      console.log("SORUN BURADAN ÇIKTI !");
      state.editedItem.stock[payload] = {};
    },
    addSubPropertyStock(state, payload) {
      state.editedItem.stock[`${payload.selectedProperty}`][payload.subproperty] = "";
    },
    deleteSubPropertyStock(state, payload) {
      Vue.delete(state.editedItem.stock[`${payload.selectedProperty}`], [payload.subproperty])
    },
    deletePropertyStock(state, payload) {
      Vue.delete(state.editedItem.stock, [payload]);
    },
    setSelectedProperty(state, payload) {
      console.log("Çalışıyor");
      state.selectedProperty = payload;
    }
  },
  getters: {
    getEditedItem(state) {
      return state.editedItem;
    },
    stock(state) {
      return state.editedItem.stock;
    }
  },
};

const store = new Vuex.Store({
  plugins: [createPersistedState({ paths: ['app.cart'] })],
  modules: {
    app,
    panel,
  },
});
export default store;
