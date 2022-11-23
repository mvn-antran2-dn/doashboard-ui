import { Box, Grid, Menu, MenuItem, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import LoopOutlinedIcon from '@mui/icons-material/LoopOutlined';
import Divider from '@mui/material/Divider';
import CardItem from '../../component/modules/CardItem';
import LineChart from '../../component/modules/ChartLine';
import DoughnutChart from '../../component/modules/ChartDoughnut';
import BarChart from '../../component/modules/BarChart';
import BarTable from '../../component/modules/TableBar';
import { useTranslation } from "react-i18next";

function DashBoard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { t } = useTranslation("translation");
  return (
    <>
      <Box>
        <Grid container className='page-main-content'>
          <Grid item xs={12} className="page-main-menu-header">
            <Grid>
              <Typography variant="h5" component="h3" className='menu-header-title'> Default Dashboard</Typography>
              <Typography variant="subtitle1" component="h6" className='menu-header-subtitle'> {t("title-main")}👋</Typography>
            </Grid>
            <Grid className="btn-social">
              <Button className='menu-header-btn-social' variant="text"><LoopOutlinedIcon /></Button>
              <Button className='menu-header-btn-social filter' variant="text"> <FilterListOutlinedIcon /></Button>
              <Button id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} className='menu-header-btn-today' variant="contained">Today: April 29</Button>
            </Grid>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              elevation={0}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem className="menu-item-today" onClick={handleClose}>Today</MenuItem>
              <MenuItem className="menu-item-today" onClick={handleClose}>Yesterday</MenuItem>
              <MenuItem className="menu-item-today" onClick={handleClose}>Last 7 days</MenuItem>
              <MenuItem className="menu-item-today" onClick={handleClose}>Last 30 days</MenuItem>
              <MenuItem className="menu-item-today" onClick={handleClose}>This month</MenuItem>
              <MenuItem className="menu-item-today" onClick={handleClose}>Last month</MenuItem>
            </Menu>
          </Grid>
          <Divider variant="middle" className="page-main-divider" />
          <CardItem />
          <Grid className="chart-line-doughnut" item xs={12} sx={{ display: "flex" }}>
            <Grid item xs={7.95} >
              <LineChart />
            </Grid>
            <Grid item xs={3.85} sx={{ marginLeft: "20px" }} >
              <DoughnutChart />
            </Grid>
          </Grid>
          <Grid className="chart-bar-table" item xs={12} sx={{ display: "flex" }}>
            <Grid item xs={3.85} >
              <BarChart />
            </Grid>
            <Grid item xs={8} sx={{ marginLeft: "20px" }} >
              <BarTable />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default DashBoard