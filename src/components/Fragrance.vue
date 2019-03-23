<template>
  <v-list-tile avatar>
    <v-list-tile-avatar>
      <img class="avatar" src="../assets/img/fragrance.jpg">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>
          Fragrance
      </v-list-tile-title>
      <v-list-tile-sub-title>
         <div v-if="types">
          10 cl of up to {{ types }} fragrances.
        </div>
        <div v-else>
          10 cl of desired fragrance.
        </div>
        You smell niceee!
        </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  name: "Fragrance",
  props: ['types']
};
</script>
