<template>
    <v-list-tile avatar>
    <v-list-tile-avatar>
      <img class="avatar" src="../assets/img/menthol-crystal.svg">
    </v-list-tile-avatar>
    <v-list-tile-content>
      <v-list-tile-title>
       Menthol Crystal.
      </v-list-tile-title>
      <v-list-tile-sub-title>
         <slot/>
       <div>
          Minting Fragrance.
       </div>
        </v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
    name: 'MentholCrystal'
}
</script>
