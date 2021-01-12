export default [
  {
    path: 'pages',
    name: 'website.pages',
    component: () => import('@/views/website/pages/List'),
  },
  {
    path: 'pages/create',
    name: 'website.pages.create',
    component: () => import('@/views/website/pages/Create'),
  },
  {
    path: 'pages/update/:id',
    name: 'website.pages.update',
    props: true,
    component: () => import('@/views/website/pages/Update'),
  },
];
