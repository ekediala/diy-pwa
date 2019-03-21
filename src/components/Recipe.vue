<template>
  <div>
    <v-card class="text-xs-center">
      <slot name="image"/>
      <br>
      <slot name="credits"/>
      <v-card-title primary-title>
        <h1 style="margin:auto" class="diy-centered">{{ recipe }}</h1>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-container>
          <v-layout row wrap>
            <v-flex>
              <ingredients-header/>
            </v-flex>
          </v-layout>
          <v-divider></v-divider>
          <v-layout row wrap>
            <v-flex></v-flex>
            <v-flex>
              <slot name="ingredients"/>
            </v-flex>
          </v-layout>
          <br>
          <v-layout row wrap>
            <v-flex>
              <slot name="precaution"/>
            </v-flex>
          </v-layout>
          <br>
          <v-layout row wrap>
            <v-flex>
              <procedure-header/>
              <slot name="procedure"/>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Recipe",
  props: {
    recipe: {
      required: true,
      type: String
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style src="../assets/css/recipes.css">
</style>

