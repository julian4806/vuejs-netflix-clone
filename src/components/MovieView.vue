<template>
  <!-- <div v-for=" in 5" class="bg-slate-500">
    <h1 class="text-2xl">Romantiek</h1>
    <div class="flex h-20 w-full overflow-auto">
      <img v-for=" in 16" src="../assets/poster.jpg" alt="" />
    </div>
  </div> -->
  <template v-for="(movie, index) in movieNames" :key="index">
    <div v-if="movie.category === 'Romance'">
      {{ movie.category }}
    </div>
  </template>
  <button @click="getRomanceMovies">clickme</button>
</template>

<script>
import movie_data from "/src/movieData.js";
export default {
  data() {
    return {
      movieNames: movie_data,
    };
  },
  methods: {
    getRomanceMovies() {
      for (let i in this.movieNames) {
        console.log(this.movieNames.name[i]);
      }
    },
  },
};
</script>
