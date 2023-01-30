<template>
  <div class="dropdown pr-8" @mouseover="isHidden = false">
    <button class="dropbtn">Type: {{ type }}</button>
    <div class="dropdown-content" v-if="!isHidden">
      <a @click="changeVideoType('TV')">TV</a>
      <a @click="changeVideoType('Movie')">Movie</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type: "Movie",
      isHidden: false,
    };
  },
  methods: {
    changeVideoType(type) {
      this.type = type;
      this.$emit("changeShowType", type.toLowerCase());
      this.isHidden = true;
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
  position: fixed;
  top: 12px;
  right: 470px;
  user-select: none;
}
.dropdown-content {
  display: none;
  background-color: #f9f9f9;
  position: fixed;
  top: 35px;
  right: 470px;
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
