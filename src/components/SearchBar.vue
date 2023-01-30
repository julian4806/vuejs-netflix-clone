<template>
  <div class="flex gap-2 px-4 items-center">
    <input
      type="text"
      class="bg-transparent border-none focus:outline-none caret-white cursor-pointer"
      placeholder="Search"
      v-model="text"
      @keyup.enter="submitQuery(text, type)"
    />
    <!-- close dropdown button -->
    <div
      class="right-5 top-5 flex p-1 h-[20px] w-[20px] bg-red-800 text-white select-none cursor-pointer rounded-md"
      v-show="movieDropdownToggle"
      @click="movieDropdownToggleFunc"
    >
      <img src="@/assets/Grey_close_x.svg" class="h-full" />
    </div>
    <div class="dropdown" @mouseover="hideCategoryDropdown = false">
      <button class="dropbtn">{{ type }}</button>
      <div class="dropdown-content" v-if="!hideCategoryDropdown">
        <a @click="changeVideoType('TV')">TV</a>
        <a @click="changeVideoType('Movie')">Movie</a>
      </div>
    </div>
    <a href="#" @click="submitQuery(text, type)">
      <font-awesome-icon icon="fa-solid fa-search"
    /></a>

    <!-- dropdown -->
    <div
      class="flex flex-col fixed top-10 bg-gray-700 w-50 z-20 rounded-md max-h-[400px] overflow-y-scroll"
      v-if="movieDropdownToggle"
    >
      <template v-for="(movie, index) in movies" :key="index">
        <div
          class="flex m-2 gap-2 w-60 bg-slate-600 p-2 rounded-md select-none cursor-pointer"
          @click="
            toggler();
            fillModalWithMovieContents(movie);
          "
        >
          <img
            v-if="movie.poster_path === null"
            src="@/assets/no-poster-image.jpg"
            class="h-20 rounded-md"
          />
          <img
            v-else
            :src="'https://www.themoviedb.org/t/p/w500/' + movie.poster_path"
            class="h-20 rounded-md"
          />
          <div>
            <h4 v-if="movie.name">{{ movie.name }}</h4>
            <h4 v-else>{{ movie.title }}</h4>
            <p class="text-xs">Rating: {{ movie.vote_average }}</p>

            <p class="text-xs">
              {{
                movie.release_date
                  ? "Date: " + movie.release_date
                  : "Date: " + movie.first_air_date
              }}
            </p>
          </div>
        </div>
      </template>
    </div>
  </div>

  <MovieModal
    :toggle="toggle"
    :movieId="movieId"
    :type="type"
    @customChange="toggler"
  />
</template>

<script>
import axios from "axios";
import MovieModal from "@/components/MovieModal.vue";

export default {
  data() {
    return {
      text: "",
      type: "Movie",
      hideCategoryDropdown: false,
      movies: null,
      toggle: false,
      movieId: null,
      movieDropdownToggle: false,
    };
  },
  components: {
    MovieModal,
  },
  methods: {
    // category = tv / movie
    changeVideoType(type) {
      this.type = type;
      this.hideCategoryDropdown = true;
    },
    toggler() {
      this.toggle = !this.toggle;
    },
    movieDropdownToggleFunc() {
      this.movieDropdownToggle = !this.movieDropdownToggle;
      this.text = "";
    },
    fillModalWithMovieContents(movie) {
      this.movieId = movie.id;
    },
    submitQuery(title, category) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/${category.toLowerCase()}?api_key=7f9a708abb557bfdd4dca953e9e755b4&query=${title}&page=1`
        )
        .then((response) => {
          this.movies = response.data.results;
        });
      this.movieDropdownToggle = true;
    },
  },
};
</script>

<style scoped>
/* dropdown */
.dropbtn {
  background-color: rgb(65, 65, 65);
  color: white;
  font-size: 16px;
  padding: 0 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  user-select: none;
}
.dropdown-content {
  display: none;
  background-color: #f9f9f9;
  position: fixed;
  top: 35px;
  z-index: 1;
  border-radius: 5px;
  user-select: none;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
