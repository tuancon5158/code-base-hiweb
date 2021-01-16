const menu = [
  {
    title: 'Home',
    icon: 'fas fa-home',
    name: 'website',
  },
  {
    title: 'Products',
    icon: 'fas fa-tags',
    name: 'website.products',
    children: [
      {
        title: 'All products',
        name: 'website.products',
      },
      {
        title: 'Collections',
        name: 'website.collections',
      },
      {
        title: 'Test componet',
        name: 'website.products.dattest',
      },
    ],
  },
  {
    title: 'Orders',
    icon: 'fas fa-clipboard',
    name: 'website.orders',
    children: [
      {
        title: 'All orders',
        name: 'website.orders',
      },
    ],
  },
  {
    title: 'Settings',
    icon: 'fas fa-cog',
    name: 'website.settings',
    children: [],
  },
  {
    title: 'Online Store',
    icon: 'fas fa-store-alt',
    children: [
      {
        title: 'Pages',
        name: 'website.pages',
      },
      {
        title: 'Navigation',
        name: 'website.menus',
      },
    ],
  },
];
export default {
  menu,
};
