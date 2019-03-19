<template>
  <div>
    <v-card class="text-xs-center diy">
      <v-img contain height="250" src="https://picsum.photos/300"></v-img>

      <v-divider></v-divider>

      <v-card-title primary-title>
        <h2 style="margin:auto;" class="headline">
          <b>Who is this guy ?</b>
        </h2>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla id ipsam esse. Omnis ipsum inventore exercitationem voluptatem tempora nobis at quo blanditiis, neque quam ullam dignissimos libero nulla impedit!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla id ipsam esse. Omnis ipsum inventore exercitationem voluptatem tempora nobis at quo blanditiis, neque quam ullam dignissimos libero nulla impedit!</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi nulla id ipsam esse. Omnis ipsum inventore exercitationem voluptatem tempora nobis at quo blanditiis, neque quam ullam dignissimos libero nulla impedit!</p>
        <v-divider></v-divider>
        <div>
          <h3>Social</h3>
          <v-btn target="_blank" href="https://twitter.com/DialaEke" icon>
            <v-icon>fab fa-twitter</v-icon>
          </v-btn>
          <v-btn target="_blank" href="https://facebook.com/ekeenyinnayadiala" icon>
            <v-icon>fab fa-facebook</v-icon>
          </v-btn>
          <v-btn
            target="_blank"
            href="https://ng.linkedin.com/in/eke-diala-enyinnaya-a0906752"
            icon
          >
            <v-icon>fab fa-linkedin</v-icon>
          </v-btn>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.diy {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
@media only screen and (min-device-width: 800px) {
  v-img {
    height: 100;
  }
}
</style>



