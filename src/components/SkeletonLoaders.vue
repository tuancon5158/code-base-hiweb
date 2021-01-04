<template>
  <v-skeleton-loader :class="classProps" elevation="2" :loading="loading" :dark="dark" :type="type"></v-skeleton-loader>
</template>

<script>
export default {
  props: {
    /* type of skeleton loader:
        date-picker,
        date-picker-options,
        date-picker-days,
        heading,
        list-item,
        list-item-avatar,
        list-item-two-line,
        list-item-three-line,
        list-item-avatar-two-line,
        list-item-avatar-three-line,
        paragraph,
        sentences,
        article,
        actions,
        button,
        card
        card-avatar,
        card-heading,
        chip
        table-heading,
        image,
        table,
        table-heading,
        table-thead,
        table-tbody,
        table-tfoot,
        table-row-divider,
        table-row,
        table-cell,
        text,
        divider,
        card-heading,
    */
    type: {
      type: String,
      default: 'card-avatar, article, actions',
    },
    classProps: {
      type: String,
      default: '',
    },
    dark: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
