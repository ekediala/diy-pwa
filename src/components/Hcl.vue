<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img class="avatar" src="../assets/img/sulphonic-acid.jpg">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title><slot/>&nbsp;of cl HCL.</v-list-tile-title>
      <v-list-tile-sub-title>
          <div>
              (Hydrochloric acid)
          </div>
          Bleaching agent.
          </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: "HCL"
};
</script>
