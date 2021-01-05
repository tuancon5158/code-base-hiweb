<template>
  <div class="toolbar-page">
    <v-navigation-drawer color="navi" :clipped="true" mobile-breakpoint="750" app fixed v-model="drawer" width="240">
      <v-list class="toolbar-mobile">
        <v-list-item class="d-flex justify-center">
          <span class="logo-app-toolbar-mobile">
            <img src="@/assets/images/logo.png" />
          </span>
        </v-list-item>
      </v-list>
      <v-list nav dense>
        <div v-for="(item, i) in items" :key="i">
          <v-list-group
            v-if="item.children && item.children.length > 0"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
            exact
          >
            <template v-slot:activator>
              <v-list-item-icon> </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="$t(item.title)"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item
              active-class="siderbar-active"
              exact
              v-for="(child, i) in item.children"
              :key="i"
              :to="{ path: child.path }"
              class
            >
              <v-list-item-content>
                <v-list-item-title v-text="$t(child.title)"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item exact active-class="siderbar-active" v-else :to="{ path: item.path }">
            <v-list-item-icon> </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app fixed color="white" class="toolbar" :clipped-left="true">
      <v-row no-gutters class="toolbar-container">
        <span class="logo-app-toolbar">
          <img src="@/assets/images/logo.png" />
        </span>
        <v-btn class="btn-show-toolbar" elevation="0" icon @click.stop="drawer = !drawer">
          <v-icon>fas fa-bars</v-icon>
        </v-btn>
        <!-- <v-col cols="9" sm="8" class="d-flex align-center justify-center">
          <input placeholder="Search" />
        </v-col> -->
        <v-spacer></v-spacer>
        <span class="mr-4  align-center text-color--main pointer d-none d-sm-flex">
          <i class="far fa-user mr-2"></i>
          <h4 class="text-color--main">Seller 123</h4>
          <i class="fas fa-caret-down ml-2"></i>
        </span>
      </v-row>

      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
import MENU from '@/const/mockData';
import { mapState } from 'vuex';
import IMAGE from '@/const/image';
import ClickOutside from 'vue-click-outside';
export default {
  data() {
    return {
      drawer: true,
      mini: true,
      items: MENU.menu,
    };
  },
  methods: {},
};
</script>
<style lang="scss">
.toolbar-page {
  .v-list {
    .v-list-item__title {
      font-size: 12px !important;
    }
  }
  .v-list--nav {
    padding-left: 0px;
  }
  .siderbar-active {
    // background: #fffd;
    opacity: 0.7;
    // background: $main-color;
    border-left: 5px solid $main-color;
    .v-list-item__title {
      color: $main-color;
      font-weight: bold;
      font-size: 12px !important;
    }
  }
  .toolbar {
    height: $height-header-main;
    box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.15) !important;
    background-color: #fff;
    .toolbar-container {
      display: flex;
      width: 100%;
      align-items: center;
      input {
        outline: none;
        border: 1px solid #ddd;
        padding: 10px;
        border-radius: 8px;
        width: 100%;
        max-width: 650px;
        background: #f1f2f3;
      }
      .logo-app-toolbar {
        width: 240px;
        @include flex();
        img {
          width: 120px;
        }
      }
    }
  }
  .toolbar-mobile {
    display: none;
  }
  .btn-show-toolbar {
    display: none;
  }
  @media only screen and (max-width: 750px) {
    .login-form {
      width: 100% !important;
    }
    .toolbar {
      .btn-show-toolbar {
        display: block;
      }
    }
    .logo-app-toolbar {
      display: none !important;
    }
    .toolbar-mobile {
      padding: 0;
      height: $height-header-main;
      width: 240px;
      border-bottom: 1px solid #ddd;

      @include flex();
      img {
        width: 120px;
      }
    }
  }
}
</style>
