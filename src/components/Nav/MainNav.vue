<template>
  <div>
    <v-navigation-drawer app fixed v-model="showMenu">
      <routes @toggleMenu="toggleMenu"/>
    </v-navigation-drawer>

    <v-toolbar scroll-off-screen app>
      <v-toolbar-side-icon @click.stop="toggleMenu"></v-toolbar-side-icon>

      <v-toolbar-title>DIY</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn rel="noopener noreferrer" target="_blank" href="https://twitter.com/DialaEke" icon>
          <v-icon>fab fa-twitter</v-icon>
        </v-btn>
        <v-btn rel="noopener noreferrer" target="_blank" href="https://facebook.com/ekeenyinnayadiala" icon>
          <v-icon>fab fa-facebook</v-icon>
        </v-btn>
        <v-btn rel="noopener noreferrer" target="_blank" href="https://ng.linkedin.com/in/eke-diala-enyinnaya-a0906752" icon>
          <v-icon>fab fa-linkedin</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
import Routes from "./Routes";
export default {
  name: "MainNav",
  components: {
    Routes
  },
  data() {
    return {
      showMenu: null
    };
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  },

  computed: {
    year() {
      const d = new Date();
      const yr = d.getFullYear();
      return yr;
    }
  }
};
</script>