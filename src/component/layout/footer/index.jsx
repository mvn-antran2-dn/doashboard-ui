import React from 'react'
import Paper from '@mui/material/Paper';
import { Grid, Box, Button, Typography, } from '@mui/material';

function FooterCP() {
  return (
    <Grid item xs={9.85} className="page-footer">
      <Paper className='footer-paper' square elevation={0} sx={{ display: "flex", alignItems: "center" }}>
        <Box className='footer-menu' sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box className='footer-menu-left'>
            <Button variant="text">Support</Button>
            <Button variant="text">Help Center</Button>
            <Button variant="text">Privacy</Button>
            <Button variant="text">Term of Service</Button>
          </Box>
          <Box className='footer-menu-right' sx={{ display: "flex", alignItems: "center" }}>
            <Typography className="text-ft-menu">© 2022 - Mira</Typography>
          </Box>
        </Box>
      </Paper>
    </Grid>
  )
}

export default FooterCP