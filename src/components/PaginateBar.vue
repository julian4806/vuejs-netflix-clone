<template>
  <div class="paginate flex gap-3">
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>4</button>
    <button>5</button>
  </div>
</template>

<script>
export default {
  methods: {},
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
