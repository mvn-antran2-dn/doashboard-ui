import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';

const card = [
  {
    title: "Total Earnings",
    path1: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    path2: "",
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "23",
    prime: "$ 2.405",
    transform: "-25%",
  },
  {
    title: "Orders Today",
    path1: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z",
    path2: "M16 10a4 4 0 0 1-8 0",
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6",
    prime: "30",
    transform: "-70%",
  },
  {
    title: "Total Revenue",
    path1: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    path2: "",
    x1: "12",
    y1: "1",
    x2: "12",
    y2: "23",
    prime: "$ 1.224",
    transform: "-50%",
  },
]

function CardProfile() {
  return (
    <Grid className="card-list-profile" item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }} >
      {card.map((card) => (
        <Grid className="card-profile-item" key={Math.random()} item xs={3.8}>
          <Paper elevation={0} className="paper-card-item">
            <Box className="card-profile">
              <Typography className="card-profile-prime" variant="h6" component="h3"> {card.prime}</Typography>
              <Typography className="card-profile-title" variant='subtitle1' component="h6" marginLeft={0.5}> {card.title}</Typography>
              <svg className="card-profile-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1={card.x1} y1={card.y1} x2={card.x2} y2={card.y2}></line>
                <path d={card.path1}></path>
                {card.path2 === "" ? "" : (<path d="M16 10a4 4 0 0 1-8 0"></path>)}
              </svg>
              <LinearProgress className = "card-profile-progress" />
            </Box>
          </Paper>
        </Grid >
      ))}
    </Grid>
  )
}

export default CardProfile