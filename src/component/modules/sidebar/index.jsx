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

function Sidebar() {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
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
        <ListItemButton className='sidebar-list-name' onClick={handleClick}>
          <ListItemIcon>
            <TuneIcon />
          </ListItemIcon>
          <ListItemText primary="Doashboard" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse className='sidebar-list-name' in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText className='sidebar-item-name'  primary="Default" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse className='sidebar-list-name' in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText className='sidebar-item-name' primary="Analytics" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse className='sidebar-list-name' in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText className='sidebar-item-name' primary="Saas" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon>
            <WebIcon />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon>
            <LuggageIcon />
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon>
            <ShoppingCartOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon>
            <PaymentOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Invoies" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon>
            <AssignmentTurnedInOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Task" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon>
            <CalendarTodayOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Calender" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon>
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
          <ListItemIcon>
            <WidgetsOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Components" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon>
            <PieChartOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Chart" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon>
            <AssignmentTurnedInOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Forms" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon>
            <FormatListBulletedOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Tables" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon>
            <FavoriteBorderOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Icons" />
        </ListItemButton>
        <ListItemButton className='sidebar-list-name'>
          <ListItemIcon>
            <MapOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Maps" />
        </ListItemButton>
      </List>
    </>
  );
}

export default Sidebar