const menu = [
  {
    title: 'Home',
    icon: 'fas fa-home',
    path: '/w/abc.hiwebio/',
  },
  {
    title: 'Products',
    icon: 'fas fa-tags',
    path: '/w/abc.hiwebio/products',
    children: [
      {
        title: 'All products',
        path: '/w/abc.hiwebio/products',
      },
      {
        title: 'Test componet',
        path: '/w/abc.hiwebio/dattest',
      },
    ],
  },
];
export default {
  menu,
};
