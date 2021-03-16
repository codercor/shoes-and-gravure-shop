<template>
  <v-container>
    <v-img
      lazy-src="https://picsum.photos/id/11/10/6"
      :src="image"
      class="image"
    ></v-img>
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
      image: require("../assets/images/reparation/reparation.jpg")
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap");

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
