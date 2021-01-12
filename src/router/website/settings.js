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
    path: 'settings/shipping',
    name: 'website.settings.shipping',
    component: () => import('@/views/website/shipping'),
  },
];
