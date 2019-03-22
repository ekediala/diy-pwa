<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img class="avatar" src="../assets/img/ammonium.jpg">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title><slot/>&nbsp; of A. S</v-list-tile-title>
      <v-list-tile-sub-title>
          <div>
              Ammonia Solution.
          </div>
          Lathering Agent.
          </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: "Ammonium"
};
</script>
