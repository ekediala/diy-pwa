<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img class="avatar" src="../assets/img/sulphonic-acid.jpg">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>
        <slot/>&nbsp;of Rambo.
      </v-list-tile-title>
      <v-list-tile-sub-title>
        Dilutant.
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: "Rambo"
};
</script>
