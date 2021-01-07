<template>
  <div>
    <notification type="error" />
    <tags-field
      :error="
        !$v.text.required
          ? 'Field is required'
          : !$v.text.minLength
          ? 'Field must have at least ' + $v.text.$params.minLength.min + ' characters.'
          : ''
      "
      model="text"
    />
    <v-btn @click="modalTest2 = true">Click</v-btn>
    <LineChar :chartdata="dataCharts.line.chartdata" :options="dataCharts.line.options" />
    <Bar :chartdata="dataCharts.bar.chartdata" :options="dataCharts.bar.options" />
    <Doughnut :chartdata="dataCharts.doughnut.chartdata" :options="dataCharts.doughnut.options" />
    <Pie :chartdata="dataCharts.pie.chartdata" :options="dataCharts.pie.options" />
    <Scatter :chartdata="dataCharts.scatter.chartdata" :options="dataCharts.scatter.options" />
    <SkeletonLoaders type="list-item-avatar, divider, list-item-three-line, card-heading, image, actions" />
    <Loader />
    <v-text-field></v-text-field>
    <DatePickers model="date" :range="true" />
    <CSVPreview v-if="file" :file="file" />
    <FileUploader v-on:callback="onFileUploaded" />
    <images-uploader />
    <modal model="modalTest" title="Test" :callback="submit">
      <template v-slot:content>
        <div>
          123
        </div>
      </template>
    </modal>
    <modal model="modalTest2" title="Test" :callback="submit">
      <template v-slot:content>
        <div>
          465
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import SkeletonLoaders from '@/components/SkeletonLoaders';
import Loader from '@/components/Loader';
import Modal from '@/components/Modal';
import CSVPreview from '@/components/CSVPreview';
import DatePickers from '@/components/form/DatePickers';
import FileUploader from '@/components/form/FileUploader';
import ImagesUploader from '@/components/form//ImagesUploader';
import Notification from '@/components/Notification';
import LineChar from '@/components/chart/Line';
import Bar from '@/components/chart/Bar';
import Doughnut from '@/components/chart/Doughnut';
import Pie from '@/components/chart/Pie';
import Scatter from '@/components/chart/Scatter';
import TagsField from '@/components/form/TagsField';
import { required, minLength, between } from 'vuelidate/lib/validators';

export default {
  components: {
    SkeletonLoaders,
    Loader,
    DatePickers,
    FileUploader,
    ImagesUploader,
    Notification,
    LineChar,
    Bar,
    Doughnut,
    Pie,
    Scatter,
    TagsField,
    Modal,
    CSVPreview,
  },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      dataCharts: {
        bar: {
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
                label: 'Data One',
                backgroundColor: '#f87979',
                pointBackgroundColor: 'white',
                borderWidth: 1,
                pointBorderColor: '#249EBF',
                data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
          },
        },
        doughnut: {
          chartdata: {
            labels: ['Babol', 'Cabanatuan', 'Daegu', 'Jerusalem'],
            datasets: [
              {
                borderWidth: 1,
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                ],
                data: [1000, 500, 1500, 1000],
              },
            ],
          },
          options: {
            legend: {
              display: true,
            },
            responsive: true,
            maintainAspectRatio: false,
          },
        },
        line: {
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
                label: 'Data One',
                borderWidth: 1,
                fill: false,
                showLine: true,
                borderCapStyle: 'butt',
                lineTension: 0.0,
                borderColor: '#2554FF',
                backgroundColor: '#2554FF',
                data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100],
              },
              {
                label: 'Data 2',
                borderJoinStyle: 'miter',
                lineTension: 0.0,
                borderDash: [10, 8],
                borderWidth: 1,
                fill: false,
                borderColor: 'red',
                backgroundColor: 'red',
                data: [12, 24, 23, 65, 14, 10, 20, 54, 50, 70, 65, 98],
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
              display: true,
            },
            responsive: true,
            maintainAspectRatio: false,
          },
        },
        pie: {
          chartdata: {
            labels: ['Babol', 'Cabanatuan', 'Daegu', 'Jerusalem'],
            datasets: [
              {
                borderWidth: 1,
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                ],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                ],
                data: [1000, 500, 1500, 1000],
              },
            ],
          },
          options: {
            legend: {
              display: true,
            },
            responsive: true,
            maintainAspectRatio: false,
          },
        },
        scatter: {
          chartData: {
            datasets: [
              {
                label: 'Population Data',
                borderWidth: 1,
                borderColor: '#2554FF',
                backgroundColor: '#2554FF',
                data: [
                  {
                    x: 6,
                    y: 3,
                    r: 15,
                  },
                  {
                    x: 3,
                    y: 12,
                    r: 4,
                  },
                  {
                    x: 5,
                    y: 15,
                    r: 10,
                  },
                  {
                    x: 3,
                    y: 12,
                    r: 8,
                  },
                  {
                    x: 4,
                    y: 5,
                    r: 20,
                  },
                  {
                    x: 2,
                    y: 6,
                    r: 3,
                  },
                  {
                    x: 4,
                    y: 9,
                    r: 11,
                  },
                  {
                    x: 5,
                    y: 10,
                    r: 6,
                  },
                ],
              },
            ],
          },
          options: {
            legend: {
              display: true,
            },
            responsive: true,
            maintainAspectRatio: false,
          },
        },
      },
      text: '',
      modalTest: false,
      modalTest2: false,
      file: null,
    };
  },
  validations: {
    text: {
      required,
      minLength: minLength(4),
    },
  },
  methods: {
    onFileUploaded(fileResources) {
      this.file = fileResources.file;
      console.log(this.file);
    },
    submit() {
      console.log(123);
    },
  },
};
</script>
