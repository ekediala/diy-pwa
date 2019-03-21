<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img class="avatar" src="../assets/img/nitrosol.jpg">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>
        <slot/>&nbsp;of Nitrosol.
      </v-list-tile-title>
      <v-list-tile-sub-title>Binding / thickening agent.</v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: "Nitrosol"
};
</script>
