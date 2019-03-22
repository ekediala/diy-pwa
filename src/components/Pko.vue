<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img class="avatar" src="../assets/img/pko.jpg">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title><slot/>&nbsp;of PKO</v-list-tile-title>
      <v-list-tile-sub-title>
          <div>
              (Palm Kernel Oil.)
          </div>
          Lathering agent.
          </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: "PKO"
};
</script>
