<template>
  <div
    id="myModal"
    class="modal-overlay"
    v-if="showModal"
    @click="showModalToggle"
  >
    <div class="modal">
      <div class="modal-content">
        <p>{{ msg }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      showModal: true,
    };
  },
  methods: {
    showModalToggle() {
      this.showModal = !this.showModal;
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
      height: 200px;
      position: relative;
    }
  }

  /* The Close Button */
}
</style>
