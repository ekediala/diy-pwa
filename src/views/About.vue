<template>
  <div>
    <v-card class="text-xs-center diy">
      <v-img contain height="250" :src="require('../assets/img/about.jpg')"></v-img>

      <v-divider></v-divider>

      <v-card-title primary-title>
        <h2 style="margin:auto;" class="headline">
          <b>Who is this guy ?</b>
        </h2>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <p>Hey guys, my name is Eke Enyinnaya Diala.</p>
        <p>I am a web / hybrid mobile app developer.</p>
        <p>This is one of my projects.</p>
        <p>It was built with Vue and Vuetify mainly.</p>
        <p>The information contained in any project of mine is free to use in whatever
          way you deem necessary (I hope you choose to do good with them).
        </p>

        <p>
          I am starting a blog with my friend (Zenas Ubere) soon.</p>
          <p>There I will share the knowledge gained from each project
            and he will do what he likes to do: write.
            </p>
         <p> The source code will be available to download for free of course.
        </p>

        <p>
          I hope this serves a purpose for you.
        </p>

        <p>Below are my social media handles.
        </p>

        <p>Sorry, as above so below.</p>

        <p>Have fun.</p>
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



