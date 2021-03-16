<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      width="100%"
      class="indigo lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text width="100" class="white--text pt-0">
        <v-container>
          <v-row>
            <v-col sm="12" md="4" lg="4">
              <v-card class="indigo darken-2">
                <v-card-title> Contact </v-card-title>
                <v-card-text>
                  <v-list class="indigo darken-2">
                    <v-list-item>
                      <v-icon>mdi-email</v-icon>
                      <v-spacer></v-spacer> cordonnerieepalinges@gmail.com
                    </v-list-item>
                    <v-list-item>
                      <v-icon>mdi-phone</v-icon>
                      <v-spacer></v-spacer> +41 21 784 15 25
                    </v-list-item>
                    <v-list-item>
                      <v-icon>mdi-cellphone-iphone</v-icon>
                      <v-spacer></v-spacer> +41 76 575 09 15
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col sm="12" md="4" lg="4">
              <v-card class="indigo darken-2">
                <v-card-title> Horaires </v-card-title>
                <v-card-text>
                  <v-list class="indigo darken-2">
                    <v-list-item>
                      <v-icon class="mr-1">mdi-clock-outline</v-icon>
                      Lundi <v-divider></v-divider> fermé
                    </v-list-item>
                    <v-list-item>
                      <v-icon class="mr-1">mdi-clock-outline</v-icon>
                      Mardi- Vendredi <v-divider></v-divider> 09:00 - 18:30
                    </v-list-item>
                    <v-list-item>
                      <v-icon class="mr-1">mdi-clock-outline</v-icon>
                      Samedi <v-divider></v-divider> 09:00 - 17:00
                    </v-list-item>
                  </v-list>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col sm="12" md="4" lg="4">
              <v-card
                height="100%"
                class="indigo darken-2 d-flex flex-column align-center"
              >
                <v-card-title> Adresse </v-card-title>
                <v-card-text>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10975.950785885168!2d6.6704362!3d46.5479302!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6b719028fd5746ef!2sCordonnerie%20de%20la%20Croix%20-%20Blanche!5e0!3m2!1str!2str!4v1603187804114!5m2!1str!2str"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                  ></iframe>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong> Cordonnerie de la Croix - Blanche </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      icons: [
        "mdi-shoe-cleat",
        "mdi-shoe-formal",
        "mdi-shoe-heel",
        "mdi-shoe-print",
        "mdi-shoe-sneaker"
      ]
    };
  }
};
</script>

<style></style>
