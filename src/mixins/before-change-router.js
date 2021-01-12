export default {
  data() {
    return {
      isShowWarningLeavePage: false,
      nextPage: false,
      toRouter: '',
    };
  },

  created() {
    // Set current page
    this.page = this.$route.query.page ? parseInt(this.$route.query.page) : 1;
    console.log(this.$route.query.page, this.page);
  },

  beforeRouteLeave(to, from, next) {
    if (to.name !== from.name) {
      this.toRouter = to.name;
      this.isShowWarningLeavePage = true;
      if (this.nextPage) {
        next();
      }
    } else next();
  },
  methods: {
    callBackLeavePage(name) {
      this.nextPage = true;
      this.$router.push({ name: this.toRouter });
    },
  },
};
