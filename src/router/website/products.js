export default [
  // Main Page
  {
    path: 'products',
    name: 'website.products',
    component: () => import('@/views/website/products'),
  },

  // Create product
  {
    path: 'products/create',
    name: 'website.products.create',
    component: () => import('@/views/website/products/Create'),
  },

  // Update product
  {
    path: 'products/update/:id',
    name: 'website.products.update',
    props: true,
    component: () => import('@/views/website/products/Update'),
  },
  {
    path: 'products/datest',
    name: 'website.products.dattest',
    props: true,
    component: () => import('@/views/website/test/DAT'),
  },
];
