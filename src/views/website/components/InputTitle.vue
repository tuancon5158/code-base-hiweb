<template>
  <div class="form-component">
    <!-- test:{{ $parent['title'] }} -->
    <!-- <v-text-field v-model="$parent['title']" id="id"></v-text-field> -->
    <!-- <v-text-field
      v-model="$parent.attributes.title"
      @blur="$parent.$v.attributes.title.$touch()"
      :error-messages="!$parent.$v.attributes.title.required ? 'asdasdas' : ''"
      aria-autocomplete="off"
    ></v-text-field> -->
    <Test label="Title" :model="['attributes', 'title']" :validate="[{ type: 'required' }]" />
  </div>
</template>
<script>
import Test from './inputs/InputNest';
export default {
  components: {
    Test,
  },
  created() {},
  methods: {},
};
</script>
