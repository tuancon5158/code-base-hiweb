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
        path: '/w/abc.hiwebio/products',
        name: 'website.products',
      },
      {
        title: 'Test componet',
        path: '/w/abc.hiwebio/dattest',
        name: 'website.products',
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
    path: '/w/abc.hiwebio/',
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
