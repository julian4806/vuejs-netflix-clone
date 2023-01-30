<template>
  <div class="paginate">
    <button v-for="i in 5" @click="paginate(i)">{{ i }}</button>
  </div>
</template>

<script>
export default {
  props: {},
  methods: {
    paginate(index) {
      this.$emit("paginate", index);
    },
  },
};
</script>

<style lang="scss">
.paginate {
  position: fixed;
  bottom: 30px;
  padding: 5px;
  background-color: rgb(103, 103, 103);
  border-radius: 5px;
  display: flex;
  gap: 10px;

  button {
    background-color: rgb(56, 56, 56);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 30px;
    width: 30px;
  }
}
</style>
