<template>
  <div class="menus-page">
    <v-row>
      <v-col cols="12" md="6" sm="6">
        <h1>Navigation</h1>
        <router-link class="text-decoration-none" :to="{ name: 'website.redirects' }">
          <v-icon class="mr-2">fas fa-link</v-icon> URL redirects
        </router-link>
      </v-col>
      <v-col class="d-flex align-center justify-end" cols="12" md="6" sm="6">
        <v-btn color="primary" @click="$router.push({ name: 'website.menus.create' })">+ Add menu</v-btn>
      </v-col>
      <v-col cols="12" md="5" sm="12">
        <h2>Menus</h2>
        <p>Menus, or link lists, help your customers navigate around your online store.</p>
        <p>You can also create nested menus to display drop-down menus, and group products or pages together.</p>
      </v-col>
      <v-col cols="12" md="5" sm="12">
        <template>
          <v-simple-table cols="tbl-menus">
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Title
                  </th>
                  <th class="text-left">
                    Menu items
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(menu, key) in menus" :key="key">
                  <td>
                    <router-link :to="{ name: 'website.menus.update', params: { id: menu.id } }">
                      {{ menu.title }}
                    </router-link>
                  </td>
                  <td>{{ listTitleMenuItems(menu.items) }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          created_at: '2021-01-04T02:49:29+00:00',
          handle: 'main-menu',
          id: 322404,
          is_default: true,
          shop_id: 10129992,
          title: 'Main menu',
          updated_at: '2021-01-04T02:49:29+00:00',
          items: [
            {
              children: [],
              id: 1535661,
              menu_id: 322404,
              name: 'Man',
              parent_id: null,
              position: 0,
              type: 'collections',
            },
            {
              children: [],
              id: 1535662,
              menu_id: 322404,
              name: 'Women',
              parent_id: null,
              position: 1,
              type: 'collections',
            },
            {
              children: [],
              id: 1535663,
              menu_id: 322404,
              name: 'GPS Watches',
              parent_id: null,
              position: 2,
              type: 'collections',
            },
            {
              children: [],
              id: 1535664,
              menu_id: 322404,
              name: 'Accessories',
              parent_id: null,
              position: 3,
              type: 'collections',
            },
          ],
        },
      ],
    };
  },
  methods: {
    listTitleMenuItems(items) {
      let arr = items.map(item => item.name);
      return arr.join(',') || '';
    },
  },
};
</script>
<style lang="scss">
.menus-page {
  .v-data-table {
    background-color: transparent;
  }
}
</style>
