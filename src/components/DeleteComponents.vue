<template>
  <v-card height="140px">
    <dialog-header @close="$emit('close')">
      <template v-slot:header>{{ $t("Xóa bỏ dữ liệu này") }}</template>
    </dialog-header>

    <v-flex pa-1 mt-5 class="food-flex-jt">
      <v-btn
        :loading="loading"
        class="mr-2"
        color="#4181cb"
        dark
        @click="submit"
        >{{$t('Xoa')}}</v-btn
      >
      <v-btn color="red" dark @click="$emit('close')">Hủy</v-btn>
    </v-flex>
  </v-card>
</template>

<script>
export default {
  props: ["dialog"],
  data() {
    return {
      loading: false,
    };
  },
  watch: {
    dialog() {
      this.loading = false;
    },
  },
  methods: {
    submit() {
      this.loading = true;
      this.$emit("submitDelete");
    },
  },
};
</script>

<style lang="scss" scoped>
.header-delete {
  height: 60px;
  background: #dddd;
}
</style>
