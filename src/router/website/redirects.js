export default [
  {
    path: 'redirects',
    name: 'website.redirects',
    component: () => import('@/views/website/redirects/List'),
  },
  {
    path: 'redirects/create',
    name: 'website.redirects.create',
    component: () => import('@/views/website/redirects/Create'),
  },
  {
    path: 'redirects/update/:id',
    name: 'website.redirects.update',
    props: true,
    component: () => import('@/views/website/redirects/Update'),
  },
];
