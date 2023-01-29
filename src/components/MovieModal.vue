<template>
  <div id="myModal" class="modal-overlay" v-if="toggle">
    <div class="modal rounded-md">
      <div class="modal-content">
        <button
          class="p-2 bg-black text-white rounded-md absolute right-0"
          @click="sendChange"
        >
          close
        </button>
        <div class="flex flex-col h-full gap-4">
          <div class="flex gap-4">
            <img
              class="h-[200px] rounded-md"
              :src="
                'https://www.themoviedb.org/t/p/w500' + movieInfo.poster_path
              "
            />
            <div class="w-[50%]">
              <div>
                <div class="text-3xl">
                  {{ movieInfo.name ? movieInfo.name : movieInfo.title }}
                </div>
                <div class="mt-2">
                  {{ `Rating: ${movieInfo.vote_average}` }}
                </div>
                <div class="mt-2">
                  {{ `Release: ${movieInfo.release_date}` }}
                </div>
                <div class="mt-2">
                  <template v-for="(genre, index) in movieInfo.genres">
                    <span v-if="index === 0">Genre: </span>
                    <span>{{ genre.name }}</span>
                    <span v-if="index + 1 < movieInfo.genres.length">, </span>
                  </template>
                </div>
              </div>
            </div>
          </div>
          <div class="">{{ movieInfo.overview }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  props: {
    toggle: Boolean,
    movieId: Number,
    type: String,
  },
  data() {
    return {
      movieInfo: Object,
    };
  },
  methods: {
    sendChange() {
      this.$emit("customChange");
    },
    fetchMovieData(movie) {
      movie.name ? movie.name : movie.title;
    },
  },
  watch: {
    movieId() {
      // tv or movie
      axios
        .get(
          `https://api.themoviedb.org/3/${this.type.toLowerCase()}/${
            this.movieId
          }?api_key=7f9a708abb557bfdd4dca953e9e755b4`
        )
        .then((response) => {
          this.movieInfo = response.data;
          console.log(this.movieInfo);
        });
    },
  },
};
</script>
<style lang="scss">
.modal-overlay {
  display: block;
  position: fixed;
  z-index: 100;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  color: black;

  /* Modal Content */
  .modal {
    display: flex;
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;

    .modal-content {
      width: 100%;
      height: auto;
      position: relative;
    }
  }
}
</style>
