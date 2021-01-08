<template>
  <div class="total-sales">
    <v-hover v-slot="{ hover }">
      <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 16 : 2">
        <v-card-text>
          <h2>Online store conversion rate</h2>
          <h1>6.29%</h1>
          <template>
            <v-simple-table class="tbl-total">
              <template v-slot:default>
                <tbody>
                  <tr>
                    <td class="text-left">Online store</td>
                    <td class="text-right">6.29%</td>
                  </tr>
                  <tr>
                    <td class="text-left">Total sales via Boost Upsell</td>
                    <td class="text-right">6.80%</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </template>
          <h3 class="my-3">CONVERSION FUNNEL</h3>
          <bar :chartdata="chartdata" :options="options" />
        </v-card-text>
      </v-card>
    </v-hover>
  </div>
</template>
<script>
import Bar from '@/components/chart/Bar';

export default {
  components: {
    Bar,
  },
  data() {
    return {
      chartdata: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        datasets: [
          {
            label: 'Dec 28, 2020 - Jan 03, 2021',
            backgroundColor: 'rgb(255, 180, 14)',
            pointBorderColor: '#249EBF',
            data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100],
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                display: true,
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
            },
          ],
        },
        legend: {
          display: false,
          labels: {
            display: true,
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>

<style lang="scss">
.total-sales {
  td {
    border-bottom: none !important;
    padding: 5px !important;
    margin: 0;
    height: auto !important;
  }
}
</style>
