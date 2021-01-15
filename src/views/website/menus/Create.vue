<template>
  <div class="menus_create-page">
    <redirect class="mt-3" title="List menus" route="website.menus" />
    <h1>Add menu</h1>

    <!-- Title menu -->
    <div>
      <span class=""> Title </span>
      <v-text-field
        placeholder="Title"
        v-model="menu.title"
        :error-messages="invalidSubmit && !$v.menu.title.required ? $t('Title is required') : ''"
      ></v-text-field>
    </div>
    <v-divider></v-divider>

    <!-- Button add new item -->
    <v-btn @click="onShowCreate(null)" class="mt-5" color="primary">Add new item</v-btn>

    <!-- Menu item tree -->
    <div class="mt-5 menu-items">
      <items v-if="menu.items && menu.items.length > 0" :items="menu.items" />
      <p v-else class="text-center mt-5">This menu doesn't have any items</p>
    </div>

    <!-- Button save menu -->
    <div class="text-end">
      <v-btn color="primary" :loading="isLoading" @click="submit" class="mt-5 ml-auto">Save menu</v-btn>
    </div>

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
import { required, minLength, maxLength, email, helpers, decimal } from 'vuelidate/lib/validators';
import modal from '@/components/Modal';
import Redirect from '@/components/RedirectTo';
import Items from './components/Items';
import slugify from '@/helpers/slugify';

export default {
  display: 'Nested',
  components: {
    modal,
    Redirect,
    Items,
  },
  data() {
    return {
      showModal: false,
      newTree: {},
      title: '',
      item: {
        name: '',
        link: '',
      },
      invalid: false,
      invalidSubmit: false,
      menu: {
        title: '',
        items: [],
      },
      items: [],
      note: null,
      isCreated: false,
      isLoading: false,
    };
  },
  validations: {
    item: {
      name: {
        required,
      },
      link: {
        required: false,
      },
    },
    menu: {
      title: {
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
    onDeleteNote(data) {
      data._vm.store.deleteNode(data);
    },
    /*
      Func add child item
      input: object
      output: void
    */
    addChild(data) {
      console.log(123);
      let obj = {};
      obj.name = this.item.name;
      obj.link = this.item.link;
      obj.handle = slugify(this.item.name);
      obj.children = [];
      console.log(obj);
      data.children.push(obj);
    },
    /*
      Func on change tree node
      input: object
      output: void
    */
    onChange(node, targetTree) {
      console.log(targetTree.getPureData());
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
        obj.handle = slugify(this.item.name);
        obj.children = [];
        if (this.note) {
          if (this.isCreated) {
            this.addChild(this.note);
          } else {
            this.note.name = this.item.name;
            this.note.handle = slugify(this.item.name);
            this.note.link = this.item.link;
          }
        } else {
          this.menu.items.push(obj);
        }
        this.showModal = false;
      }
    },
    /*
      Func submit
      input: void
      output: void
    */
    submit() {
      this.$v.$touch();
      this.isLoading = true;
      this.invalidSubmit = this.$v.menu.title.$invalid;
      if (!this.invalidSubmit) {
        console.log(this.menu);
      }
      this.isLoading = false;
    },
  },
  watch: {
    'menu.title': function() {
      this.menu.handle = slugify(this.menu.title);
    },
    'item.name': function() {
      this.item.handle = slugify(this.item.name);
    },
  },
};
</script>

<style lang="scss">
.menus_create-page {
  .vtl-node-content {
    width: 100%;
  }
  .vtl-operation {
    display: none;
  }
  .menu-items {
    min-height: 200px;
    max-height: 500px;
    background-color: $border-color;
    padding: 10px;
    overflow-y: auto;
  }
}
</style>
