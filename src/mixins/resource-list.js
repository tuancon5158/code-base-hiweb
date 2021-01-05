import axios from 'axios';
import utilities from '@/helpers/utilities';
import FORMAT_APP from '@/const/format';
export default {
  data() {
    return {
      // Resource type
      resourceType: null,
      updateRouteName: null,
      // State
      lastExecuteRequest: null,
      isLoading: true,
      errors: [],
      //tab header
      currentTab: 0,

      // Executor
      executor: null,

      // Data
      limit: FORMAT_APP.LIMIT_PAGE,
      page: 1,
      firstPage: null,
      sort: '-created_at',
      filterData: [],
      params: {},

      // Search
      searchableField: '',
      searchString: '',
      keyUpAt: null,

      document: null,
    };
  },

  created() {
    // Set current page
    this.page = parseInt(this.$route.query.page ? this.$route.query.page : '1');
  },

  mounted() {
    this.execute();
  },
  methods: {
    /**
     * Executor
     */
    execute() {
      if (this.executor) {
        clearTimeout(this.executor);
        this.executor = null;
      }

      this.executor = setTimeout(() => {
        this.getResources();
      }, 300);
    },

    async getResources() {
      // Reset state
      this.document = null;
      this.isLoading = true;
      this.errors = [];

      try {
        // Get page
        this.document = (await axios.get(`https://5b31f06482407e001413f0fe.mockapi.io/${this.resourceType}`)).data;
        // Loading state off
        this.isLoading = false;
      } catch (e) {
        this.errors = utilities.handleErrorResponse(e);
        this.isLoading = false;
      }
    },
    /**
     * Set filter data
     */
    setFilterData(filterData) {
      this.filterData = filterData;
    },

    /**
     * Set sort
     */
    setSort(sort) {
      this.sort = sort;
    },

    /**
     * Set limit
     */
    setLimit(limit) {
      this.limit = limit;
    },

    /**
     * Get update router data
     */
    getUpdateRouterData(id) {
      return {
        name: this.updateRouteName,
        params: {
          id,
        },
      };
    },
  },
  watch: {
    $route: function() {
      this.execute();
      this.searchString = '';

      // Set current page
      this.page = parseInt(this.$route.query.page);
      if (!this.page) {
        this.firstPage = '';
      }
    },

    page: function() {},

    limit: function() {
      this.isLoading = true;
    },

    sort: function() {
      this.isLoading = true;
    },

    filterData: function() {
      this.isLoading = true;
    },

    searchString: function(searchString) {
      this.keyUpAt = new Date().getTime();
      setTimeout(() => {
        let now = new Date().getTime();
        if (this.keyUpAt && now > this.keyUpAt + 800) {
          //   this.page = 1;
          this.keyUpAt = null;

          // Remove other filters & sorting
          this.sort = null;
          this.filterData = [];

          this.getResources();
        }
      }, 1000);
    },
  },
};
