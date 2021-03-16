<template>
  <v-container>
    <v-carousel cycle :interval="1000" :v-model="0">
      <v-carousel-item
        :src="image.src"
        v-for="image in images"
        :key="image.src"
      >
        <v-row class="fill-height" align="end" justify="end">
          <div class="display-3 grey pa-4 lighten-3 black--text">
            Cles {{ image.type }}
          </div>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <h1>Réparation</h1>
    <p>
      Des chaussures et semelles parfaitement adaptées à vos pieds ! Changement
      de talons et semelles en caoutchouc de diverses qualités : Remplacement
      des talonnettes de chaussure dames et hommes, talons tiges, talons
      classiques, talons profil légers, talons profilés pour hiver, talons
      mi-cuir. Ressemelages complets en diverses matières, caoutchouc ou bloc
      complet pour chaussures dames et hommes: Réparation ou remplacement des
      demi-semelles et talons en « caoutchouc » de diverses épaisseurs.
      Réparation ou remplacement des demi-semelles et talons en « cuir » de
      diverses épaisseurs. Ressemelage de bottes militaires, chaussures de
      randonnée et de trekking. Ressemelages en cuir demi – en ¾ ou en entier
      avec ou sans couture de la tige : Remplacement des semelles cuir demi avec
      ou sans couture de la tige. Remplacement des semelles cuir ¾ avec ou sans
      couture de la tige. Remplacement des semelles cuir en entière avec ou sans
      couture de la tige. Remise à niveau et réglage de la statique des
      chaussures : Correction et réglage de la statique des chaussures pour
      permettre une bonne répartition du poids sur les pieds. Ajustement ou
      rehaussement des chaussures. Compensation des parties usées pour une
      remise à niveau. Un service de prise d’empreinte électronique est mis sur
      pied pour schématiser la pathologie des démarches et d’éventuelles
      malformation des pieds, qui va aider à trouver les solutions adéquates à
      la confection de semelles intérieures avec les soutiens nécessaires aux
      besoins de chacun. Divers travaux de réparation : Remplacement des
      semelles intérieures en cuir de chevreau. Remplacement des contreforts
      (partie arrière à l’intérieur de la chaussure). Divers fixations et
      changements de talons. Changement de cambrure (soutien interne d’une
      chaussure). Changement de fermetures Eclair ou curseurs pour bottines,
      bottes et cavalières. Différents travaux de couture et réparations pour
      maroquinerie ou divers articles, remplacement de velcro, élastiques.
      Fixation de boutons-pression, rivets, œillets, crochets. Changement de
      boucles pour chaussures. Changement de boucles de ceinture. Nous
      effectuons encore d’autres travaux selon les besoins.
    </p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { src: require("../assets/images/copycles/key (1).jpg"), type: "Cave" },
        {
          src: require("../assets/images/copycles/key (2).jpg"),
          type: "Armoire"
        },
        {
          src: require("../assets/images/copycles/key (3).jpg"),
          type: "Commerciale"
        },
        {
          src: require("../assets/images/copycles/key (4).jpg"),
          type: "Commerciale"
        },
        {
          src: require("../assets/images/copycles/key (5).jpg"),
          type: "Commercial éléctronique"
        },
        {
          src: require("../assets/images/copycles/key (6).jpg"),
          type: "Voitures"
        },
        {
          src: require("../assets/images/copycles/key (7).jpg"),
          type: "Coffre fort"
        },
        {
          src: require("../assets/images/copycles/key (8).jpg"),
          type: "Voitures"
        },
        {
          src: require("../assets/images/copycles/key (9).jpg"),
          type: "Commerciale"
        }
      ]
    };
  }
};
</script>

<style>
p {
  line-height: 1.6;
  text-align: justify;
  font-family: "Montserrat", sans-serif;
  margin: 0;
}
.image {
  background-color: #2badd9;
  float: right;
  margin-left: 20px;
  margin-bottom: 10px;
}
</style>
