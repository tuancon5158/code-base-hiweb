export default {
  data() {
    return {
      productPageRoutes: [],
      isProductPage: false,
      isCheckoutPage: false,
    };
  },
  watch: {
    "$route.name": function() {
      this.setCurrentPage();
    },
  },
  computed: {
    canGoBack() {
      return !this.isHistoryEmpty() && this.isProductPage;
    },
  },
  created() {
    this.setCurrentPage();
  },
  methods: {
    setCurrentPage() {
      this.isProductPage = !!this.$route.params.parentSku;
      this.isCheckoutPage = this.$route.name === "checkout";
    },
    // Check if history is empty
  },
};
