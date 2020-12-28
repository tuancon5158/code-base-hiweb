<template>
  <v-skeleton-loader :class="classProps" :dark="true" :type="type"></v-skeleton-loader>
</template>

<script>
export default {
  props: {
    /* type of skeleton loader:
        card-avatar,
        date-picker,
        article,
        actions,
        table-heading,
        list-item-two-line,
        image,
        table-tfoot,
        list-item-avatar,
        divider,
        list-item-three-line,
        card-heading,
        actions
    */
    type: {
      type: String,
      default: 'card-avatar, article, actions',
    },
    classProps: {
      type: String,
      default: '',
    },
  },
};
</script>
