<template>
  <transition name="fade">
    <v-col class="d-flex align-center group-button-submit__create">
      <span class="image">
        <img width="100px" src="@/assets/images/logo.png" />
      </span>
      <h3>Unsaved changes</h3>
      <v-spacer></v-spacer>
      <v-btn color="error" class="mr-3" @click="callbackCancel">Discard</v-btn>
      <v-btn color="success" @click="callbackSubmit">Create</v-btn>
    </v-col>
  </transition>
</template>

<script>
export default {
  props: {
    callbackCancel: {
      type: Function,
      default: () => {},
    },
    callbackSubmit: {
      type: Function,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
.group-button-submit__create {
  position: fixed;
  background-color: black;
  width: 5000px;
  top: 0;
  z-index: 10000;
  // width: 100%;
  top: 0;
  color: white;
  height: 68px;
  right: -30px;
  left: -0px;
  // right: 20%;
  .image {
    width: 258px;
    img {
      width: 120px;
    }
  }
}
</style>
