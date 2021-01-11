export default [
  {
    path: 'menus',
    name: 'website.menus',
    component: () => import('@/views/website/menus/List'),
  },

  {
    path: 'menus/create',
    name: 'website.menus.create',
    component: () => import('@/views/website/menus/Create'),
  },

  {
    path: 'menus/update/:id',
    name: 'website.menus.update',
    props: true,
    component: () => import('@/views/website/menus/Update'),
  },
];
