import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import { CategoryScale } from 'chart.js';
import { Card, CardHeader, Grid, Box, Typography } from '@mui/material';
import Chart from 'chart.js/auto';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import BasicTable from '../TableDoughnut';
Chart.register(CategoryScale);

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);
const source = [
  'Social',
  'Search Engines',
  'Direct',
  'Other',
];
const state = {
  labels: source,
  options: {},
  datasets: [
    {
      data: [260, 125, 54, 146],
      backgroundColor: [
        'rgba(71, 130, 218, 1)',
        'rgba(237,65,52,1)',
        'rgba(243, 152,62,1)',
        'rgba(238,238,238,1)',
      ],
      borderWidth: 6,
      cutout: 68,
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
};
const DoughnutChart = () => {
  return (
    <Grid className='chart-doughnut' item xs={12} >
      <Card elevation={0}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <CardHeader className="title-chart-line" title='Weekly sales' variant='h6' />
          <MoreVertOutlinedIcon sx={{  marginRight: "16px" }}/>
        </Box>
        <Grid sx={{ width: "178px", marginLeft: "90px",position: "relative", marginTop: "14px" }}>
          <Box className='more-sale-doughnut-chart'>
            <Typography variant="h6" component="h3">+27%</Typography>
            <Typography variant="subtitle2" component="h4">more sales</Typography>
          </Box>
          <Doughnut className='doughnut-chart' options={options} data={state} />
        </Grid>
        <BasicTable />
      </Card>
    </Grid>
  );
};
export default DoughnutChart;