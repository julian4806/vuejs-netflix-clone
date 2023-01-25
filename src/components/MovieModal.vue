<template>
  <div id="myModal" class="modal-overlay" v-if="toggle">
    <div class="modal rounded-md">
      <div class="modal-content">
        <button
          class="p-2 bg-blue-300 rounded-md absolute right-0"
          @click="sendChange"
        >
          close
        </button>
        <div @change="movieData">
          {{ movieData.name ? movieData.name : movieData.title }}
          <br /><br />
          <div v-for="(id, index) in movieData.genre_ids" :key="index">
            {{ id }}
          </div>
          <br />
          {{ movieData.overview }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    toggle: Boolean,
    movieData: Object,
  },
  data() {
    return {};
  },
  methods: {
    sendChange() {
      this.$emit("customChange");
    },
    movieContents() {
      console.log(this.$emit("sendMovieDataToModal"));
    },
    fetchMovieData(movie) {
      /*
      <h4 v-if="movie.name">{{ movie.name }}</h4>
      <h4 v-else>{{ movie.title }}</h4>
      */
      movie.name ? movie.name : movie.title;
    },
  },
};
</script>
<style lang="scss">
.modal-overlay {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 10; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
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
      height: 50vh;
      position: relative;
    }
  }
}
</style>
