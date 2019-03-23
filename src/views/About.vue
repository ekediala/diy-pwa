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
        <v-container>
          <v-layout row wrap>
            <v-flex></v-flex>
            <v-flex>
              <p>
                Hey guys, my name is Eke Enyinnaya Diala.
                I am a web and hybrid mobile app developer.
                This is my first personal project.
                It was built with Vue and Vuetify mainly.
                There are more to come.
              </p>
              <p>
                The information contained in any project of mine is free to use in whatever
                way you deem necessary. (I hope you choose to do good with them).
              </p>

              <p>
                I am starting a blog with my friend Zenas Ubere (
                <a
                  rel="noopener noreferrer"
                  href="http://twitter.com/ZenasUbere"
                  target="_blank"
                >@ZenasUbere</a> ) soon.
                There I will share the knowledge gained from each project
                and he will do what he likes to do: write.
                The source code will be available to download for free of course.
                I hope this serves a purpose for you.
              </p>
              <p>Below (as below so above.) are my social media handles if you need to get in touch.</p>
              <p>You can also
                <router-link to="/contact">leave me a message here.</router-link>
              </p>
              <p>Have fun.</p>
            </v-flex>
          </v-layout>
        </v-container>
        <v-divider></v-divider>
        <div>
          <h3>Social</h3>
          <v-btn rel="noopener noreferrer" target="_blank" href="https://twitter.com/DialaEke" icon>
            <v-icon>fab fa-twitter</v-icon>
          </v-btn>
          <v-btn
            rel="noopener noreferrer"
            target="_blank"
            href="https://facebook.com/ekeenyinnayadiala"
            icon
          >
            <v-icon>fab fa-facebook</v-icon>
          </v-btn>
          <v-btn
            target="_blank"
            href="https://ng.linkedin.com/in/eke-diala-enyinnaya-a0906752"
            icon
            rel="noopener noreferrer"
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
  name: "About",
  mounted() {
    window.scrollTo(0, 0);
  }
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



