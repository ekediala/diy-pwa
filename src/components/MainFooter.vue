<template>
  <div>
    <v-bottom-nav :value="true" app fixed>
      <v-btn flat exact to="/" color="primary">
        <span>Home</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn flat exact to="/about" color="primary">
        <span>About</span>
        <v-icon>info</v-icon>
      </v-btn>
      <v-btn flat exact to="/contact" color="primary">
        <span>Contact</span>
        <v-icon>message</v-icon>
      </v-btn>
    </v-bottom-nav>
  </div>
</template>

<script>
export default {
  name: "MainFooter",
  computed: {
    year() {
      let d = new Date();
      return d.getFullYear();
    }
  }
};
</script>
