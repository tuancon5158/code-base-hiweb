/* eslint-disable prettier/prettier */
const menu = [
    {
        title: 'Home',
        icon: 'mdi-folder',
        path: '/w/abc.hiwebio/',
    },
    {
        title: 'Products',
        icon: 'mdi-folder',
        path: '/w/abc.hiwebio/products',
        children: [
            {
                title: 'All products',
                path: '/w/abc.hiwebio/products',
            },

        ],
    },

];
export default {
    menu,
};
