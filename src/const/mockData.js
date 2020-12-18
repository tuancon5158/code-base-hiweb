/* eslint-disable prettier/prettier */
const menu = [
    {
        title: 'Home',
        icon: 'home',
        path: '/w/abc.hiwebio/products',
    },
    {
        title: 'Products',
        icon: 'category',
        path: '/w/abc.hiwebio/products1',
    },
    {
        title: 'Orders',
        icon: 'payments',
        path: '/w/abc.hiwebio/products2',
    },
    {
        title: 'Cài đặt',
        icon: 'settings',
        children: [
            {
                title: 'Chương trình khuyến mãi',
                path: '/w/abc.hiwebio/productssd',
            },
            {
                title: 'Banner quảng cáo',
                path: '/w/abc.hiwebio/productssd',
            },
            {
                title: 'Phiên bản ứng dụng',
                path: '/w/abc.hiwebio/productssd',
            },

        ],
    },
];
export default {
    menu,
};
