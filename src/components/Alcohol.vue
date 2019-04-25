<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img class="avatar" src="../assets/img/methanol.jpg" />
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title> <slot />&nbsp;of Alcohol. </v-list-tile-title>
      <v-list-tile-sub-title>
        <div v-if="type">({{ type }})</div>
        Base Ingredient.
      </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: 'MentholCrystal',
  props: ['type'],
};
</script>
