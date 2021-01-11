import Vue from 'vue';

// Loading
import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';
import FilterMoreDrawer from '@/components/FilterMoreDrawer';
import HeaderTableTabs from '@/components/HeaderTableTabs';
import BeforeLeavePage from '@/components/dialog/BeforeLeavePage';
import GroupSubmit from '@/components/form/GroupSubmit';
import InputNest from '@/views/website/components/inputs/InputNest';
import InputDefault from '@/views/website/components/inputs/InputDefault';

// eslint-disable-next-line prettier/prettier
Vue.component('FilterMoreDrawer', FilterMoreDrawer);

Vue.component('InputNest', InputNest);
Vue.component('InputDefault', InputDefault);

Vue.component('page-loader', Loader);
Vue.component('pagination', Pagination);
Vue.component('HeaderTableTabs', HeaderTableTabs);
Vue.component('BeforeLeavePage', BeforeLeavePage);
Vue.component('GroupSubmit', GroupSubmit);
Vue.component('GroupSubmit', GroupSubmit);
