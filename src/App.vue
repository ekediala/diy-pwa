<template>
  <v-app>
    <main-nav/>
    <v-content>
      <v-container fluid>
      <v-layout row wrap>
        <v-flex xs1>
        </v-flex>
        <v-flex>
          <router-view></router-view>
        </v-flex>
        <v-flex xs1>
        </v-flex>
      </v-layout>
    </v-container>

    </v-content>
    <main-footer/>
  </v-app>
</template>

<script>
import MainFooter from "./components/MainFooter";
import MainNav from "./components/MainNav";
export default {
  name: "App",
  components: {
    MainFooter,
    MainNav
  },
  data() {
    return {
      //
    };
  }
};
</script>
