import React from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import LuggageIcon from '@mui/icons-material/Luggage';
import WebIcon from '@mui/icons-material/Web';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TuneIcon from '@mui/icons-material/Tune';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  const [open1, setOpen1] = React.useState(true);
  const [open2, setOpen2] = React.useState(true);
  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  return (
    <>
      <List
        sx={{ width: '100%', maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader className='sidebar-list-title' component="div" id="nested-list-subheader">
            PAGES
          </ListSubheader>
        }
      >
        <ListItemButton className='sidebar-list-name' onClick={handleClick1}>
          <ListItemIcon sx={{minWidth: "38px"}}>
            <TuneIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
          {open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse className='sidebar-list-collapse' in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <NavLink to="/">
              <ListItemButton sx={{ pl: 4, padding: "2px 16px 14px 32px " }}>
                <ListItemText className='sidebar-item-name' primary="Default" />
              </ListItemButton>
            </NavLink>
          </List>
        </Collapse>
        <Collapse className='sidebar-list-collapse' in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, padding: "2px 16px 14px 32px " }}>
              <ListItemText className='sidebar-item-name' primary="Analytics" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse className='sidebar-list-collapse' in={open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, padding: "2px 16px 6px 32px " }}>
              <ListItemText className='sidebar-item-name' primary="SaaS" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton className='sidebar-list-name' onClick={handleClick2}>
          <ListItemIcon sx={{minWidth: "38px"}}>
            <WebIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
          {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse className='sidebar-list-collapse' in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, padding: "2px 16px 14px 32px " }}>
              <ListItemText className='sidebar-item-name' primary="Profile" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse className='sidebar-list-collapse' in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, padding: "2px 16px 14px 32px " }}>
              <ListItemText className='sidebar-item-name' primary="Settings" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse className='sidebar-list-collapse' in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, padding: "2px 16px 14px 32px " }}>
              <ListItemText className='sidebar-item-name' primary="Pricing" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse className='sidebar-list-collapse' in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <NavLink to="/chat">
              <ListItemButton sx={{ pl: 4, padding: "2px 16px 14px 32px " }}>
                <ListItemText className='sidebar-item-name' primary="Chat" />
              </ListItemButton>
            </NavLink>
          </List>
        </Collapse>
        <Collapse className='sidebar-list-collapse' in={open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4, padding: "2px 16px 6px 32px " }}>
              <ListItemText className='sidebar-item-name' primary="Blank Page" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon sx={{minWidth: "38px"}}>
            <LuggageIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon sx={{minWidth: "38px"}}>
            <ShoppingCartOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon sx={{minWidth: "38px"}}>
            <PaymentOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Invoies" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon sx={{minWidth: "38px"}}>
            <AssignmentTurnedInOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Task" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon sx={{minWidth: "38px"}}>
            <CalendarTodayOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Calender" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon sx={{minWidth: "38px"}}>
            <GroupOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Auth" />
        </ListItemButton>
      </List>
      <List
        sx={{ width: '100%', maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader className='sidebar-list-title' component="div" id="nested-list-subheader2">
            ELEMENT
          </ListSubheader>
        }
      >
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon sx={{minWidth: "38px"}}>
            <WidgetsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Components" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon sx={{minWidth: "38px"}}>
            <PieChartOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Chart" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon sx={{minWidth: "38px"}}>
            <AssignmentTurnedInOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Forms" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon sx={{minWidth: "38px"}}>
            <FormatListBulletedOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon sx={{minWidth: "38px"}}>
            <FavoriteBorderOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Icons" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon sx={{minWidth: "38px"}}>
            <MapOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Maps" />
        </ListItemButton>
      </List>
    </>
  );
}

export default Sidebar