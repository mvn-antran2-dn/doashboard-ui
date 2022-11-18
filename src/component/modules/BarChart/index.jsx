import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import { CategoryScale } from 'chart.js';
import { Card, CardHeader, Grid, Box } from '@mui/material';
import Chart from 'chart.js/auto';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
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
      barThickness: 5,
      data: [
        54, 67, 41, 55, 62, 45, 55, 73, 60, 76, 48, 79
      ],
    },
    {
      backgroundColor: '#c2d5f2',
      label: 'desktop',
      barThickness: 5,
      borderRadius: 4,
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
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    }
  }
};
const BarChart = () => {
  return (
    <Grid  item xs={12} >
      <Card elevation={0}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <CardHeader className="title-chart-line" title='Mobile / Desktop' variant='h6' />
          <MoreVertOutlinedIcon sx={{  marginRight: "16px" }}/>
        </Box>
        <Grid className="bar-chart">
          <Bar options={options} data={state} sx={{height: "340px"}}/>
        </Grid>
      </Card>
    </Grid>
  );
};
export default BarChart;