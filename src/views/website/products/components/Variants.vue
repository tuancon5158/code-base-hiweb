<template>
  <div class="pa-2   form-component">
    <div class="d-flex justify-space-between  align-center">
      <label>Variants</label>
      <div @click="isShowAddVariants = !isShowAddVariants">
        <a class="link-add"> Add variant</a>
      </div>
    </div>
    <div>
      <span>Add variants if this product comes in multiple versions, like different sizes or colors.</span>
    </div>
    <transition name="fade">
      <v-row no-gutters v-if="isShowAddVariants" class="my-3">
        <v-col cols="12">
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12" class="mt-4">
          <v-row class="d-flex align-center">
            <v-col cols="3"><label for="">Option name </label></v-col>
            <v-col cols="6"> <label for="">Option values </label> </v-col>
          </v-row>
          <v-row gutters class="d-flex align-center">
            <v-col cols="3"><v-text-field hide-details="" aria-autocomplete="off"></v-text-field></v-col>
            <v-col cols="6">
              <tags-field
                hide-details=""
                placeholder="Separate options with comma"
                aria-autocomplete="off"
                model="text"
              />
            </v-col>
            <i class="far fa-trash-alt pb-4"></i>
          </v-row>
          <v-row gutters class="d-flex align-center">
            <v-col cols="3"><v-text-field hide-details="" aria-autocomplete="off"></v-text-field></v-col>
            <v-col cols="6"
              ><tags-field
                hide-details=""
                placeholder="Separate options with comma"
                aria-autocomplete="off"
                model="text"
            /></v-col>
            <i class="far fa-trash-alt pb-4"></i>
          </v-row>
          <v-row gutters class="d-flex align-center">
            <v-col cols="3"><v-text-field hide-details="" aria-autocomplete="off"></v-text-field></v-col>
            <v-col cols="6"
              ><tags-field
                hide-details=""
                placeholder="Separate options with comma"
                aria-autocomplete="off"
                model="text"
            /></v-col>
            <i class="far fa-trash-alt pb-4"></i>
          </v-row>
        </v-col>
      </v-row>
    </transition>
  </div>
</template>

<script>
import TagsField from '@/components/form/TagsField';

export default {
  components: { TagsField },
  data() {
    return {
      isShowAddVariants: true,
      text: '',
    };
  },
};
</script>
<style lang=""></style>
