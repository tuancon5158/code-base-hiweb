export default [
  // List Page
  {
    path: 'pages',
    name: 'website.pages',
    component: () => import('@/views/website/pages/List'),
  },

  // Create page
  {
    path: 'pages/create',
    name: 'website.pages.create',
    component: () => import('@/views/website/pages/Create'),
  },
];
