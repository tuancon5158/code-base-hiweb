<template>
  <div>
    <v-navigation-drawer color="#f9fbfd" :clipped="true" mobile-breakpoint="750" app fixed v-model="drawer" width="240">
      <v-list class="toolbar-mobile">
        <v-list-item>
          <span class="logo-app-toolbar-mobile">
            <img src="@/assets/images/logo.png" />
          </span>
        </v-list-item>
      </v-list>
      <v-list>
        <div v-for="(item, i) in items" :key="i">
          <v-list-group
            v-if="item.children && item.children.length > 0"
            :key="item.title"
            :prepend-icon="item.action"
            no-action
          >
            <template v-slot:activator>
              <v-list-item-icon>
                <!-- <v-icon v-text="item.icon"></v-icon> -->
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="$t(item.title)"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="(child, i) in item.children" :key="i" :to="{ path: child.path }" class>
              <v-list-item-content>
                <v-list-item-title v-text="$t(child.title)"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item active-class="siderbar-active" v-else :to="{ path: item.path }">
            <v-list-item-icon>
              <!-- <v-icon v-text="item.icon"></v-icon> -->
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app fixed color="white" height="58" class="toolbar" :clipped-left="true">
      <v-row no-gutters class="toolbar-container">
        <span class="logo-app-toolbar">
          <img src="@/assets/images/logo.png" />
        </span>
        <v-btn class="btn-show-toolbar" elevation="0" icon @click.stop="drawer = !drawer">
          <v-icon>fas fa-bars</v-icon>
        </v-btn>
        <v-col cols="8" class="d-flex align-center justify-center">
          <input placeholder="Search" />
        </v-col>
        <v-spacer></v-spacer>
        <span>
          <h2>User</h2>
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
// var  VI = requ "@/assets/images/vi.png";
// import EN from "@/assets/images/en.png";
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
.toolbar {
  box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.15) !important;
  background-color: #fff;
  .toolbar-container {
    display: flex;
    width: 100%;
    align-items: center;
    input {
      outline: none;
      border: 1px solid #ddd;
      padding: 15px;
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
    height: 58px;
    width: 240px;
    border-bottom: 1px solid #ddd;
    .v-list-item {
    }
    @include flex();
    img {
      width: 120px;
    }
  }
}
</style>
