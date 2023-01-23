<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <MovieModal :msg="thisShouldPass" />
  </div>
</template>

<script>
// @ is an alias to /src
import MovieModal from "@/components/MovieModal.vue";

export default {
  name: "HomeView",
  components: {
    MovieModal,
  },
  data() {
    return {
      thisShouldPass: [true, false],
    };
  },
};
</script>
