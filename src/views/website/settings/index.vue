<template>
  <div class="settings__pages">
    <v-row>
      <v-col cols="12">
        <h2>Settings</h2>
      </v-col>
      <v-col v-for="(page, index) in pages" :key="index" cols="12" md="4" sm="12" xs="12">
        <router-link class="text-decoration-none" :to="{ name: page.router }">
          <v-hover v-slot="{ hover }" open-delay="200">
            <v-card height="125" :elevation="hover ? 8 : 1" :class="{ 'on-hover': hover }" class="mx-auto">
              <v-card-text>
                <v-row no-gutters>
                  <v-col cols="2" xs="2" sm="2" md="2">
                    <v-icon>{{ page.icon }}</v-icon>
                  </v-col>
                  <v-col cols="10" xs="10" sm="10" md="10">
                    <h3 class="text-decoration-none">{{ page.title }}</h3>
                    <p class="text-decoration-none mt-3">{{ page.des }}</p>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-hover>
        </router-link>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: [
        {
          icon: 'fas fa-cog',
          title: 'General',
          des: 'View and update your store details',
          router: '',
        },
        {
          icon: 'far fa-credit-card',
          title: 'Payment providers',
          des: `Enable and manage your store's payment providers`,
          router: 'website.settings.payments',
        },
        {
          icon: 'fas fa-shopping-cart',
          title: 'Checkout',
          des: 'Customize your online checkout process',
          router: '',
        },
        {
          icon: 'fas fa-user-circle',
          title: 'Account',
          des: 'Manage staff accounts and permissions',
          router: '',
        },
        {
          icon: 'fas fa-shipping-fast',
          title: 'Shipping',
          des: 'Manage how you ship orders to customers',
          router: 'website.settings.shipping',
        },
        {
          icon: 'far fa-bell',
          title: 'Notification',
          des: 'Manage notifications sent to you and your customers',
          router: '',
        },
        {
          icon: 'fas fa-balance-scale-right',
          title: 'Legal',
          des: `Manage your store's legal pages`,
          router: '',
        },
        {
          icon: 'fas fa-file-invoice-dollar',
          title: 'Billing',
          des: 'Manage your billing information and view your invoices',
          router: '',
        },
      ],
    };
  },
};
</script>
