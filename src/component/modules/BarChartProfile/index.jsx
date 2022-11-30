import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import { CategoryScale } from 'chart.js';
import { Card, CardHeader, Grid, Box } from '@mui/material';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const state = {
  labels: months,
  options: {},
  datasets: [
    {
      backgroundColor: '#4782da',
      label: 'mobile',
      barThickness: 15,
      maxBarThickness: 10,
      data: [
        54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79
      ],
    },
    {
      backgroundColor: '#eeeeee',
      label: 'desktop',
      barThickness: 15,
      maxBarThickness: 10,
      data: [69, 66, 24, 48, 52, 51, 44, 53, 62, 79, 51, 68],
    },
  ],
};
const options = {
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
    },
    legend: {
      display: false,
    },
  },
  responsive: true,
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    }
  }
};
const BarChartProfile = () => {
  return (
    <Grid item xs={12} >
      <Card elevation={0} sx={{ paddingBottom: "16px" }}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <CardHeader className="title-chart-line bar-chart-profile-title" title='Sales / Revenue' variant='h6' />
        </Box>
        <Grid className="bar-chart-profile">
          <Bar options={options} data={state} sx={{ height: "280px" }} />
        </Grid>
      </Card>
    </Grid>
  );
};
export default BarChartProfile;