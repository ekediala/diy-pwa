<template>
  <v-list-tile exact :to="url">
    <v-list-tile-action>
      <v-icon>navigate_next</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ title }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: 'Route',
  props: ['url', 'title'],
};
</script>
