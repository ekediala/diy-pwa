<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img class="avatar" src="../assets/img/sulphonic-acid.jpg" />
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title> <slot />&nbsp;of C. A. </v-list-tile-title>
      <v-list-tile-sub-title>
        <div>(Carbolic acid)</div>
        Anti microbial agent (Germ killer).
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: 'CarbolicAcid',
};
</script>
