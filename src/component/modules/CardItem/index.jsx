import { Box, Grid, Paper, Typography, Chip } from '@mui/material'
import React from 'react'

const card = [
  {
    title: "Sales Today",
    chip: "Today",
    prime: "2.532",
    subtitle1: "+26%",
    subtitle2: "Since last month",
  },
  {
    title: "Visitors",
    chip: "Annual",
    prime: "170.212",
    subtitle1: "-14%",
    subtitle2: "Since last month",
  },
  {
    title: "Total Earnings",
    chip: "Monthly",
    prime: "$ 24.300",
    subtitle1: "+18%",
    subtitle2: "Since last month",
  },
  {
    title: "Pending Orders",
    prime: "45",
    subtitle1: "-9%",
    subtitle2: "Since last month",
  },
]

function CardItem() {
  return (
    <Grid className="card-list" item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }} >
      {card.map((card) => (
        <Grid className="card-item" key={Math.random()} item xs={2.8}>
          <Paper elevation={0} className="paper-card-item">
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Typography className="card-title" variant='subtitle1' component="h6" marginLeft={0.5}> {card.title}</Typography>
                <Chip className="card-chip" label={card.chip} color="primary" />
              </Box>
              <Typography className="card-prime" variant="h6" component="h3"> {card.prime}</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Chip className="card-chip2" label={card.subtitle1} color="success" />
                <Typography className="card-subtitle" variant='body3' component="h6" marginLeft={1.5}> {card.subtitle2}</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid >
      ))}
    </Grid>
  )
}

export default CardItem