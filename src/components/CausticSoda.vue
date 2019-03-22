<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img class="avatar" src="../assets/img/caustic-soda.jpg">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>
        <slot/>&nbsp;of C. S.
      </v-list-tile-title>
      <v-list-tile-sub-title>
        <div>
          (Caustic Soda)
        </div>
        Washing agent.
        </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: "CausticSoda"
};
</script>