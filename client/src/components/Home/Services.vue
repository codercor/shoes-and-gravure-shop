<template>
  <v-sheet>
    <v-row justify-center>
      <Service
        v-for="service in services"
        :title="service.title"
        :image="service.image"
        :text="service.text"
        :key="service.title"
      />
    </v-row>
  </v-sheet>
</template>

<script>
import Service from "./services/Service";

export default {
  components: {
    Service
  },
  data() {
    return {
      services: [
        {
          title: "Réparation",
          text:
            "De la pose de fers encastrés, aux talons d’escarpins en passant par la botte d’équitation, rien n’est laissé à l’abandon.",
          image: require("../../assets/images/services/Réparation.jpg")
        },
        {
          title: "Copy clés",
          text:
            "Nous avons la capacité de dupliquer pratiquement toutes les clés présentes en Suisse grâce à plus de 2’000 références différentes à partir des clés plates ou celles de sécurité pour cylindre, jusqu’aux clés de voitures.",
          image: require("../../assets/images/services/clés.jpg")
        },
        {
          title: "Gravures",
          text:
            "Des plaquettes sur mesure et personnalisées  La Cordonnerie du Léman vous propose un service de gravure de qualité : Gravure de plaquette de boîte aux lettres en aluminium ou plastique. Plaquette de sonnette et interphone en aluminium ou plastique. Plaque de porte en laiton ou aluminium.",
          image: require("../../assets/images/services/Gravures.jpg")
        },
        {
          title: "Coutures",
          text:
            "Nous réalisons des ourlets piqués, mains, revers pour vos retouches de pantalons, jupes, vestes, manteaux ... Pose de fermetures éclair pour les vêtements : pantalons, jupes, manteaux, blousons cuir et tissus Pose de fermetures éclair également pour les accessoires cuirs et tissus, sacs, sacoches, cartables, ceintures ....",
          image: require("../../assets/images/services/Coutures.jpg")
        }
      ]
    };
  }
};
</script>

<style></style>
