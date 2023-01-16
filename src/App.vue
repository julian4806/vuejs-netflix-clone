<template lang="">
  <div id="app">
    <search-bar></search-bar>
    <movie-view></movie-view>
    <side-bar></side-bar>
  </div>
</template>
<script>
import MovieView from "./components/MovieView.vue";
import SideBar from "./components/SideBar.vue";
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",
  components: {
    MovieView,
    SideBar,
    SearchBar,
  },
  myObject: {
    title: "How to do lists in Vue",
    author: "Jane Doe",
    publishedAt: "2016-04-10",
  },
};
</script>
