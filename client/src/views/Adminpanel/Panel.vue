<template>
  <v-app id="inspire">
    <v-navigation-drawer dark v-model="drawer" app>
      <v-list dense rounded>
        <v-list-item
          v-for="item in items"
          :to="item.url"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar dark app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Panneau d'administration</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      items: [
        { icon: "mdi-home", title: "Accueil", url: "/panel" },
        { icon: "mdi-hammer", title: "Des produits", url: "/products" },
        { icon: "mdi-cog", title: "Administration", url: "/administration" }
      ]
    };
  },
  beforeMount() {
    this.axios
      .get("/users/checkUser")
      .then(res => {
        const { user } = res.data;
        if (user.role != "admin") this.$router.push("/");
      })
      .catch(err => {
        this.$router.push("/login");
      });
  }
};
</script>

<style></style>
