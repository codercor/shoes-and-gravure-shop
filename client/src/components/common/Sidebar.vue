<template>
  <v-list dense rounded>
    <v-list-item v-for="item in items" :to="item.url" :key="item.title" link>
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>

      <v-list-item-content>
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { icon: "mdi-home", title: "Accueil", url: "/" },
        { icon: "mdi-hammer", title: "Réparation", url: "/reparation" },
        { icon: "mdi-key", title: "Copy clés", url: "/copycles" },
        { icon: "mdi-gesture", title: "Gravures", url: "/gravures" }
      ]
    };
  }
};
</script>

<style></style>
