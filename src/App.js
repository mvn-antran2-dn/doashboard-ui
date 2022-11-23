import "../src/assets/scss/styles.scss";
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Logo from "./assets/images/logo";
import Chip from '@mui/material/Chip';
import { Grid } from '@mui/material';
import Sidebar from './component/modules/sidebar';
import Main from './pages';
import FooterCP from "./component/layout/footer";
import HeaderCP from "./component/layout/header";
import { Route, Routes } from "react-router-dom";

const drawerWidth = 259;
function App(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar className="header-toolbar">
        <Grid item xs={2.15} className="page-header-logo">
          <Paper square elevation={0} className='pager-logo'>
            <Box className='header-logo' sx={{ display: "flex", alignItems: "center" }}>
              <Logo />
              <Typography marginLeft={1.5}>Mira</Typography>
              <Chip label="PRO" color="success" size="small" className="header-chip-pro"/>
            </Box>
          </Paper>
        </Grid></ Toolbar>
      <Grid className="page-main-sidebar">
        <Sidebar />
      </Grid>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  return (
    <div className="App">
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
          className="appbar"
          elevation={0}
        >
          <Toolbar className="header-toolbar">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <HeaderCP />
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
          className="menu-nav"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            className="menu-nav-drawer"
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
          className="page-main"
        >
           <Routes>
              <Route path="*" element={<Main />}></Route>
            </Routes>
        </Box>
      </Box>
      <FooterCP />
    </div>
  );
}
App.propTypes = {
  window: PropTypes.func,
};

export default App;
