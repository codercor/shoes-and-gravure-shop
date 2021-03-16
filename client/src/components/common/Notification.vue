<template>
  <v-snackbar
    app
    color="success"
    top
    class="justify-between-center align-items-center"
    right
    timeout="3000"
    v-model="$store.state.isShowNotification"
  >
    <v-card elevation="0" color="transparent">
      <v-card-title> <h2>Başarılı !</h2> </v-card-title>
      <v-container>
        <p style="font-size: 25px" class="h5">
          {{ $store.state.notificationMessage }}
        </p>
      </v-container>
    </v-card>

    <template v-slot:action="{ attrs }">
      <v-btn
        icon
        color="white"
        text
        v-bind="attrs"
        @click="$store.state.isShowNotification = false"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {};
</script>

<style></style>
