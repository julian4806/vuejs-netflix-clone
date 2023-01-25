<template>
  <header class="flex justify-between py-2 px-8 items-center nav-gradient">
    <div class="netflixLogo w-[10%]">
      <router-link id="logo" to="/">
        <img src="./assets/netflix.svg" alt="Logo Image" class="h-8" />
      </router-link>
    </div>
    <div class="w-[85%] flex justify-between">
      <nav class="main-nav flex gap-4">
        <router-link to="/">Home</router-link>
        <router-link to="trending">Trending</router-link>
        <router-link to="hot">Hot</router-link>
        <router-link to="new">New Releases</router-link>
      </nav>
      <nav class="sub-nav flex gap-2">
        <a href="#"><font-awesome-icon icon="fa-solid fa-search" /></a>
        <a href="#"><font-awesome-icon icon="fa-solid fa-bell" /></a>
        <a href="#">Account</a>
      </nav>
    </div>
  </header>
  <router-view />
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
$primary: #141414;
$light: #f3f3f3;
$dark: #686868;

html,
body {
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  background-color: $primary;
  color: $light;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  line-height: 1.4;
}

.nav-gradient {
  background: rgb(0, 0, 0);
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(255, 255, 255, 1) 658%
  );
}
</style>
