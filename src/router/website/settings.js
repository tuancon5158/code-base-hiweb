export default [
  {
    path: 'settings',
    name: 'website.settings',
    component: () => import('@/views/website/settings'),
  },
  {
    path: 'settings/payments',
    name: 'website.settings.payments',
    component: () => import('@/views/website/settings/components/Payments'),
  },
  {
    path: 'menus/update/:id',
    name: 'website.menus.update',
    props: true,
    component: () => import('@/views/website/menus/Update'),
  },
];
