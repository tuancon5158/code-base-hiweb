import Vue from 'vue';

// Loading
import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';
import FilterMoreDrawer from '@/components/FilterMoreDrawer';
import HeaderTableTabs from '@/components/HeaderTableTabs';

// eslint-disable-next-line prettier/prettier
Vue.component('FilterMoreDrawer', FilterMoreDrawer);

Vue.component('page-loader', Loader);
Vue.component('pagination', Pagination);
Vue.component('HeaderTableTabs', HeaderTableTabs);
