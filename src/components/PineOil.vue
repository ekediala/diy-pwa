<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img class="avatar" src="../assets/img/pine-oil.svg">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>
        <slot/>&nbsp;of Pine oil.
      </v-list-tile-title>
      <v-list-tile-sub-title>Disinfectant that smells nice.</v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: "CarbolicAcid"
};
</script>
