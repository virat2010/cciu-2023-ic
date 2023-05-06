"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};


export default function Chart({ dat }) {
  const data = {
    labels: dat.time,
    datasets: [
      {
        label: 'dataset 1',
        data: dat.bpm,
        cubicInterpolationMode: 'monotone',
        tension: 0.4,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
    options: {
      xAxes: [{
        type: 'time',
        ticks: {
          autoSkip: true,
          maxTicksLimit: 20
        }
      }],
    }
  };
  return <div><Line options={options} data={data} ref={(reference) => this.reference = reference} redraw={true} /></div>;
}