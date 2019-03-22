<template>
    <v-list-tile avatar>
                  <v-list-tile-avatar>
                    <img class="avatar" src="../assets/img/sls.jpg">
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title><slot/> of SLS.</v-list-tile-title>
                    <v-list-tile-sub-title>
                      <div>
                        (Sodium Lauryl Sulphate)
                      </div>
                      Minor foaming agent.
                      </v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
</template>

<script>
export default {
    name: 'Sls'
}
</script>
