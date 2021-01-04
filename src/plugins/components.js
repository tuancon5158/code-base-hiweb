import Vue from 'vue';

// Loading
import Loader from '@/components/Loader';

import FilterMoreDrawer from '@/components/FilterMoreDrawer';

// eslint-disable-next-line prettier/prettier
Vue.component('FilterMoreDrawer', FilterMoreDrawer);

Vue.component('page-loader', Loader);
