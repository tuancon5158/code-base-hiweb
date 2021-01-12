<template>
  <v-dialog persistent v-model="$parent.isShowWarningLeavePage" width="700">
    <v-card>
      <v-card-title class=" grey lighten-2">
        Unsaved changes
      </v-card-title>

      <v-card-text class="py-3">
        If you leave this page, any unsaved changes will be lost.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" @click="$parent.isShowWarningLeavePage = false">
          Cancel
        </v-btn>
        <v-btn color="primary" @click="$parent.callBackLeavePage">
          I accept
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
