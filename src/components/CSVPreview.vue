<template>
  <div class="csv-preview">
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr v-for="(csv, key) in parse_csv[0]" :key="key">
            <td v-if="resources.includes(key)">{{ key }}</td>
            <td v-if="resources.includes(key)">{{ csv }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: ['file'],
  data() {
    return {
      channel_name: '',
      channel_fields: [],
      channel_entries: [],
      parse_header: [],
      parse_csv: [],
      sortOrders: {},
      sortKey: '',
      count: 0,
      productCount: 0,
      csv: null,
      resources: ['Title', 'Description', 'Type', 'Vendor', 'Body (Html)'],
    };
  },
  created() {
    this.loadCSV();
  },
  filters: {
    capitalize: function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    },
  },
  methods: {
    sortBy: function(key) {
      var vm = this;
      vm.sortKey = key;
      vm.sortOrders[key] = vm.sortOrders[key] * -1;
    },
    loadCSV() {
      var vm = this;
      if (window.FileReader) {
        var reader = new FileReader();
        // Handle errors load
        reader.onload = function(event) {
          var csv = event.target.result;
          vm.parse_csv = vm.csvJSON(csv);
          console.log('parse', vm.$papa.parse(csv, {}));
        };
        reader.readAsText(this.file, 'UTF-8');
        reader.onerror = function(evt) {
          if (evt.target.error.name == 'NotReadableError') {
            alert(`Canno't read file !`);
          }
        };
      } else {
        alert('FileReader are not supported in this browser.');
      }
    },
    csvJSON(csv) {
      var vm = this;
      var lines = vm.$papa.parse(csv, {});
      var result = [];
      var headers = lines.data[0];
      vm.parse_header = lines.data[0];
      vm.count = lines.data.length - 1;
      // let product = lines.data.filter(line => line.)
      // lines.data[0].split(',').forEach(function(key) {
      //   vm.sortOrders[key] = 1;
      // });
      lines.data.map(function(line, indexLine) {
        if (indexLine < 1) return; // Jump header line
        if (indexLine > 10) return; // Jump 10 line
        var obj = {};
        var currentline = line;
        headers.map(function(header, indexHeader) {
          obj[header] = currentline[indexHeader];
        });
        result.push(obj);
      });
      result.pop(); // remove the last item because undefined values
      console.log(result);
      return result; // JavaScript object
    },
  },
  watch: {
    file: function() {
      this.loadCSV();
    },
  },
};
</script>
