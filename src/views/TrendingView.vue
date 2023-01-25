<template>
  <div class="wrapper container mx-auto flex justify-center mt-3 px-3">
    <div
      class="movie-flow grid gap-3 grid-cols-2 sm:grid-cols-4 lg:grid-cols-6"
    >
      <template v-for="(movie, index) in movies" :key="index">
        <div
          class="relative cursor-pointer hover:scale-125 hover:z-10 transition-transform"
        >
          <img
            :src="`https://image.tmdb.org/t/p/w500` + movie.backdrop_path"
            class="rounded-md"
            @click="
              toggler();
              fillModalWithMovieContents(movie);
            "
          />
          <div
            class="absolute bottom-0 p-1 pointer-events-none w-full banner-gradient"
          >
            <h4 v-if="movie.name">{{ movie.name }}</h4>
            <h4 v-else>{{ movie.title }}</h4>
          </div>
        </div>
      </template>
    </div>
    <MovieModal
      :toggle="toggle"
      :movieData="movieData"
      @customChange="toggler"
    />
  </div>
</template>

<script>
import axios from "axios";
import MovieModal from "@/components/MovieModal.vue";

export default {
  name: "App",
  components: {
    MovieModal,
  },
  methods: {
    fillModalWithMovieContents(movie) {
      this.movieData = movie;
    },
    toggler() {
      this.toggle = !this.toggle;
    },
  },
  data() {
    return {
      movies: null,
      movieData: null,
      showModal: false,
      toggle: false,
    };
  },
  mounted() {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=7f9a708abb557bfdd4dca953e9e755b4"
      )
      .then((response) => {
        this.movies = response.data.results;
      });
  },
};
</script>

<style lang="scss" scoped></style>
