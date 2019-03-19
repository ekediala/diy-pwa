<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex>
          <v-card class="text-xs-center">
            <v-card-title primary-title>
              <v-alert type="warning" :value="true">
                <h2 class="headline">
                  <b>404 Error !</b>
                </h2>
              </v-alert>
            </v-card-title>
            <v-card-text>
              <p>Sorry, that page seems not to exist anymore.</p>
            </v-card-text>

            <v-card-actions>
              <v-btn style="margin: auto" round to="/" color="primary">Take me home.</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "NotFound"
};
</script>