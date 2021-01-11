<template>
  <div class="pa-2 form-component ">
    <div class=" d-flex justify-space-between align-center">
      <label>Images (0/255)</label>
      <div>
        <a class="link-add"> Add image from URL</a>
        <!-- <a class="link-add ml-2">Add image</a> -->
      </div>
    </div>

    <div>
      <images-uploader />
    </div>
  </div>
</template>

<script>
import ImagesUploader from '@/components/form//ImagesUploader';
import FileUploader from '@/components/form/FileUploader';

export default {
  components: {
    ImagesUploader,
  },
};
</script>
<style lang=""></style>
