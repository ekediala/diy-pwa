<template>
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

    <route url="/liquid-soap-making" title="Liquid Soap Making." />
    <route url="/whitener-making" title="Bleach Making (Whitener)." />
    <route url="/car-wash-liquid" title="Car Wash Liquid ." />
    <route
      url="/water-air-freshener"
      title="Air freshener (Water based) Making."
    />
    <route
      url="/alcohol-air-freshener"
      title="Air freshener (Alcohol based)."
    />
    <route url="/disinfectant-making" title="Disinfectant Making." />
    <route url="/perfume-making" title="Perfume Making." />
    <route url="/tile-cleaner-making" title="Tile cleaner Making." />
    <route url="/detergent-making" title="Detergent Making." />
    <route url="/insecticide-making" title="Insecticide Making." />
  </v-list>
</template>

<script>
import Route from './Route';
export default {
  name: 'Routes',
  components: { Route },
  methods: {
    toggleMenu() {
      this.$emit('toggleMenu');
    },
  },
};
</script>
