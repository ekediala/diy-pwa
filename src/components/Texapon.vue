<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img class="avatar" src="../assets/img/texapon.jpg">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>
        <slot/>&nbsp;of Texapon.
      </v-list-tile-title>
      <v-list-tile-sub-title>Foaming booster agent.</v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: "Texapon"
};
</script>