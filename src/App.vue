<template>
  <v-app>
    <main-nav/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <main-footer/>
    <scroll-top/>
  </v-app>
</template>

<script>
import MainFooter from "./components/Nav/MainFooter";
import MainNav from "./components/Nav/MainNav";
import ScrollTop from "./components/Nav/ScrollTop";
export default {
  name: "App",
  components: {
    MainFooter,
    MainNav,
    ScrollTop
  },
  data() {
    return {
      //
    };
  }
};
</script>
