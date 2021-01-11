<template>
  <div class="menu__item">
    <draggable :group="{ name: 'g1' }" class="dragArea" tag="ul" :list="items" :options="{ animation: 150 }">
      <li v-for="(el, index) in items" :key="el.name">
        <div class="d-flex align-center py-2">
          <div class="mr-3">
            <v-icon>fas fa-grip-vertical</v-icon>
          </div>
          <div>{{ el.name }}</div>
          <div class="ml-auto">
            <v-btn @click="onShowEdit(el)" class="mr-2">Edit</v-btn>
            <v-btn @click="onShowCreate(el)" class="mr-2">Add menu item</v-btn>
            <v-btn @click="onDeleteNote(index)"><v-icon>far fa-trash-alt</v-icon></v-btn>
          </div>
        </div>
        <nested-draggable :items="el.children" />
      </li>
    </draggable>
    <!-- Modal create/edit item -->
    <modal title="Menu item" model="showModal" :callback="saveItem">
      <template slot="content">
        <div>
          <span class=""> Name </span>
          <v-text-field
            v-model="item.name"
            :error-messages="invalid && !$v.item.name.required ? $t('Name is required') : ''"
            placeholder="e.g. About us"
          ></v-text-field>
        </div>
        <div>
          <span class=""> Link </span>
          <v-text-field
            placeholder="e.g. /about-us"
            v-model="item.link"
            :error-messages="invalid && !$v.item.link.required ? $t('Link is required') : ''"
          ></v-text-field>
        </div>
      </template>
    </modal>
  </div>
</template>
<script>
import draggable from 'vuedraggable';
import { required, minLength, maxLength, email, helpers, decimal } from 'vuelidate/lib/validators';
import modal from '@/components/Modal';

export default {
  name: 'nested-draggable',
  components: {
    draggable,
    modal,
  },
  props: {
    // menu items
    items: {
      type: Array,
      default: null,
    },
    callback: {
      type: Function,
      default(element) {},
    },
  },
  data() {
    return {
      item: {
        name: '',
        link: '',
      },
      note: null,
      invalid: false,
      showModal: false,
      isCreated: false,
    };
  },
  validations: {
    item: {
      name: {
        required,
      },
      link: {
        required,
      },
    },
  },
  methods: {
    /*
      Show modal create item
      input: object
      output: void
    */
    onShowCreate(data) {
      this.note = data;
      this.showModal = true;
      this.invalid = false;
      this.item.name = '';
      this.item.link = '';
      this.isCreated = true;
    },
    /*
      Show modal edit item
      input: object
      output: void
    */
    onShowEdit(data) {
      this.note = data;
      this.showModal = true;
      this.invalid = false;
      this.item.name = data.name;
      this.item.link = data.link;
      this.isCreated = false;
    },
    /*
      Delete item
      input: object
      output: void
    */
    onDeleteNote(index) {
      this.items.splice(index, 1);
    },
    /*
      Func save modal
      input: void
      output: void
    */
    saveItem() {
      this.$v.$touch();
      this.invalid = this.$v.item.$invalid;
      if (!this.invalid) {
        let obj = {};
        obj.name = this.item.name;
        obj.link = this.item.link;
        obj.children = [];
        if (this.isCreated) {
          this.note.children.push(obj);
          this.showModal = false;
        } else {
          this.note.name = this.item.name;
          this.note.link = this.item.link;
          this.showModal = false;
        }
      }
    },
  },
};
</script>
<style lang="scss">
.menu__item {
  ul {
    list-style: none;
  }
  li {
    cursor: move;
  }
}
</style>
