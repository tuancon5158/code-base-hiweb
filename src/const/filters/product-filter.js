export default [
  {
    label: 'Product ID',
    field: 'id',
    operators: ['='],
  },
  {
    label: 'Product IDs',
    field: 'ids',
    operators: ['='],
    placeholder: 'id1,id2,id3',
  },
  {
    label: 'Visibility',
    field: 'visibility',
    operators: ['='],
    options: {
      public: 'Public',
      private: 'Private',
      'with-link': 'Anyone with the link',
    },
  },
  {
    label: 'Status',
    field: 'status',
    operators: ['='],
    options: {
      available: 'Available',
      'out-of-stock': 'Out of stock',
    },
  },
  {
    label: 'Handle',
    field: 'handle',
    operators: ['='],
  },
  {
    label: 'Collection',
    field: 'collection_id',
    operators: ['='],
    driver: 'product-collection-selector',
  },
  {
    label: 'Tags (any)',
    field: 'any_tag',
    operators: {
      '=': 'Have any of',
    },
    placeholder: 'tag 1, tag 2, tag 3',
  },
  {
    label: 'Title',
    field: 'title',
    operators: {
      '=': 'Is Equal to',
      '!=': 'Is Not Equal to',
      '>': 'Starts with',
      '<': 'Ends with',
    },
  },
  {
    label: 'Title search',
    field: 'title_search',
    operators: {
      '=': 'search for',
    },
    note:
      'To exclude a word, you can prepend a “-” character. For example, to find all products with title containing “foo” but not “bar”, use: foo -bar',
  },
];
