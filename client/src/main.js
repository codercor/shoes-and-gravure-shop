import Vue from "vue";
import App from "./App.vue";
import router from "./plugins/router";
import store from "./plugins/store";
import vuetify from "./plugins/vuetify";
import VueResizeText from "vue-resize-text";
import "./assets/styles/main.css";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/v1/"
});

axiosInstance.interceptors.request.use(config => {
  let authToken = localStorage.getItem("authToken");
  if (authToken) {
    config.headers["Authorization"] = `Bearer ${authToken}`;
  }
  console.log(config.headers);
  return config;
});

Vue.prototype.axios = axiosInstance;
Vue.use(VueResizeText);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
