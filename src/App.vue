<template>
  <v-app>
    <main-nav/>
    <v-content>
      <show-refresh/>
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
import ShowRefresh from "./components/miscellaneous/ShowRefresh";
export default {
  name: "App",
  components: {
    MainFooter,
    MainNav,
    ScrollTop,
    ShowRefresh
  }
};
</script>

