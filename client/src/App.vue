<template>
  <v-app>
    <v-navigation-drawer
      v-if="
        $route.path != '/panel' &&
        $route.path != '/products' &&
        $route.path != '/administration'
      "
      v-model="drawer"
      app
    >
      <Sidebar />
    </v-navigation-drawer>
    <v-navigation-drawer
      style="position: fixed"
      width="500"
      height="100vh"
      right
      v-model="$store.state.app.basketIsOpen"
      absolute
      temporary
    >
      <Basket />
    </v-navigation-drawer>
    <v-app-bar class="light-blue darken-1 white--text" app>
      <v-app-bar-nav-icon
        class="white--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-spacer class="d-flex d-md-none" />
      <v-img max-height="80" contain max-width="80" :src="logo"> </v-img>
      <v-spacer class="d-flex d-md-none" />
      <v-toolbar-title class="main-title d-none d-md-flex">
        Cordonnerie de la Croix - Blanche
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn to="/login" icon outlined class="btn mr-7" color="white">
        <v-icon>mdi-login</v-icon>
      </v-btn>
      <v-btn
        @click="$store.state.app.basketIsOpen = !$store.state.app.basketIsOpen"
        icon
        outlined
        class="btn mr-7"
        color="white"
      >
        <v-icon>mdi-cart</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <transition name="router-transition">
        <router-view> </router-view>
      </transition>
    </v-main>
    <Footer />
    <Notification
      :isShowNotification="$store.state.isShowNotification"
      :notificationMessage="$store.state.notificationMessage"
    />
  </v-app>
</template>

<script>
import Footer from "./components/common/Footer.vue";
import Sidebar from "./components/common/Sidebar.vue";
import Basket from "./components/common/Basket.vue";
import Notification from "./components/common/Notification.vue";
/* eslint-disable */
export default {
  mounted() {
    console.log(this.$route.path);
  },
  data: () => ({
    drawer: false,
    logo: require("./assets/images/logo.png"),
  }),
  components: {
    Basket,
    Footer,
    Sidebar,
    Notification,
  },
  methods: {},
};
</script>
<style>
.router-transition-enter-active {
  transition: all 0.5s ease;
}
.router-transition-leave-active {
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
}
.router-transition-enter,
.router-transition-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>