<template>
  <div>
    <v-navigation-drawer app fixed v-model="showMenu">
      <v-list>
        <v-list-tile @click="toggleMenu">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <h3>
                <b>RECIPES</b>
              </h3>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-tile exact to="/">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile exact to="/liquid-soap-making">
          <v-list-tile-action>
            <v-icon>navigate_next</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Liquid Soap</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/whitener">
          <v-list-tile-action>
            <v-icon>navigate_next</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Bleach (Whitener)</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/car-wash-liquid">
          <v-list-tile-action>
            <v-icon>navigate_next</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Car Wash Liquid</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/water-air-freshener">
          <v-list-tile-action>
            <v-icon>navigate_next</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Air freshener (Water based)</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>navigate_next</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Air freshener (Alcohol based)</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/disinfectant">
          <v-list-tile-action>
            <v-icon>navigate_next</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Disinfectant</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/perfume">
          <v-list-tile-action>
            <v-icon>navigate_next</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Perfume</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/tile-cleaner">
          <v-list-tile-action>
            <v-icon>navigate_next</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Tile cleaner</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile to="/germicide">
          <v-list-tile-action>
            <v-icon>navigate_next</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Germicide</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile @click="toggleMenu">
          <v-list-tile-action>
            <v-icon>copyright</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ year }} Eke Enyinnaya Diala</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="primary darken-1" fixed app>
      <v-toolbar-side-icon @click.stop="toggleMenu"></v-toolbar-side-icon>

      <v-toolbar-title>DIY</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-toolbar-items>
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
      </v-toolbar-items>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "MainNav",
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