import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title } from 'chart.js';
import { CategoryScale } from 'chart.js';
import { Card, CardHeader, Grid, Box } from '@mui/material';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
ChartJS.register(CategoryScale);

ChartJS.register(LineElement, PointElement, LinearScale, Title);

const LineChart = () => {
  const [gradient, setGradient] = useState();

  useEffect(() => {
    var ctx = document.getElementById("lineChart").getContext("2d");

    setGradient(ctx.createLinearGradient(0, 0, 0, 400));
   
  },[])
  console.log(setGradient);
  if(setGradient){
    gradient?.addColorStop(0, 'rgba(241,245,249,1)');
    gradient?.addColorStop(1, 'rgba(255,255,255,0)');
  }
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
        borderColor: '#1976D2',
        borderWidth: 2,
        tension: 0.4,
        backgroundColor: gradient,
        fill: true, 
        data: [
          2115, 1562, 1584, 1892, 1487, 2223, 2966, 2448, 2905, 3838, 2917, 3327,
        ],
      },
      {
        borderColor: '#ABABAB',
        borderWidth: 2,
        pointBackground: '#fff',
        pointBorderWidth: 2,
        tension: 0.4,
        borderDash: [5, 5],
        data: [958, 724, 629, 883, 915, 1214, 1476, 1212, 1554, 2128, 1466, 1827],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };
  return (
    <Grid className='chart-line' item xs={12} >
      <Card elevation={0}>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <CardHeader className="title-chart-line" title='Total revenue' variant='h6' />
          <MoreVertOutlinedIcon sx={{ marginRight: "16px" }} />
        </Box>
        <Grid className="line-chart">
          <Line className='line-chart-canvas' options={options} data={state} id="lineChart" />
        </Grid>
      </Card>
    </Grid>
  );
};
export default LineChart;