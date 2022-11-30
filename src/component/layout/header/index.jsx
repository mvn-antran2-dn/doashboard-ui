import React from 'react'
import Paper from '@mui/material/Paper';
import { Grid, Box, Typography, Tooltip, MenuItem, Menu } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextareaAutosize from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import Avatar from '@mui/material/Avatar';

function HeaderCP() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
  const open2 = Boolean(anchorEl2);
  const open3 = Boolean(anchorEl3);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  // const handleClose1 = () => {
  //   setAnchorEl1(null);
  // };
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  const { t } = useTranslation("translation");
  const changeLanguage = (e) => {
    const languageValue = e.target.id
    i18n.changeLanguage(languageValue);
    setAnchorEl1(null);
  }
  return (
    <>
      <Grid item xs={9.85} className="page-header-menu">
        <Paper square elevation={0} sx={{ display: "flex", alignItems: "center" }} color = "primary">
          <Box className='header-menu' paddingX={1.5} paddingY={2.4} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box className='header-menu-search'>
              <SearchIcon></SearchIcon>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder={t("title")}
                style={{ width: 200, height: 20 }}
                className="search-input"
              />
            </Box>
            <Box className='header-menu-social' sx={{ display: "flex", alignItems: "center" }}>
              <Box className="tooltip-btn-menu-social">
                <Box className='header-menu-social-box mess'>
                  <Chip label="3" color="primary" size="small" />
                  <Tooltip title="Messenger">
                    <ChatBubbleOutlineIcon
                      id="basic-button-mess"
                      aria-controls={open ? 'basic-menu-mess' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick3} />
                  </Tooltip>
                </Box>
              </Box>
              <Menu
                id="basic-menu-mess"
                anchorEl={anchorEl3}
                open={open3}
                onClose={handleClose3}
                elevation={0}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem className="menu-item-today item-mess" onClick={handleClose3}>3 New Messages</MenuItem>
                <MenuItem className="menu-item-today item-mess" onClick={handleClose3}>
                  <Box className="menu-item-mess-content">
                    <div>
                      <img src="https://mira.bootlab.io/static/img/avatars/avatar-1.jpg" alt="avatar1" />
                    </div>
                    <Box className="item-mess-title">
                      <Typography component="h3" className='menu-header-title'> Lucy Lavender</Typography>
                      <Typography component="h6" className='menu-header-subtitle'>Nam pretium turpis et arcu. Duis arcu tortor.</Typography>
                    </Box>
                  </Box>
                </MenuItem>
                <MenuItem className="menu-item-today item-mess" onClick={handleClose3}>
                  <Box className="menu-item-mess-content">
                    <div>
                      <img src="https://mira.bootlab.io/static/img/avatars/avatar-2.jpg" alt="avatar2" />
                    </div>
                    <Box className="item-mess-title">
                      <Typography component="h3" className='menu-header-title'> Remy Sharp</Typography>
                      <Typography component="h6" className='menu-header-subtitle'>Curabitur ligula sapien euismod vitae.</Typography>
                    </Box>
                  </Box>
                </MenuItem>
                <MenuItem className="menu-item-today item-mess" onClick={handleClose3}>
                  <Box className="menu-item-mess-content">
                    <img src="https://mira.bootlab.io/static/img/avatars/avatar-3.jpg" alt="avatar3" />
                    <Box className="item-mess-title">
                      <Typography component="h3" className='menu-header-title'> Cassandra Mixon</Typography>
                      <Typography component="h6" className='menu-header-subtitle'>Pellentesque auctor neque nec urna.</Typography>
                    </Box>
                  </Box>
                </MenuItem>
                <MenuItem className="menu-item-today item-mess" onClick={handleClose3}>Show all messages</MenuItem>
              </Menu>
              <Box className="tooltip-btn-menu-social">
                <Box className='header-menu-social-box notifi'>
                  <Chip label="3" color="primary" size="small" />
                  <Tooltip title="Notification">
                    <NotificationsNoneIcon
                      id="basic-button-nottifi"
                      aria-controls={open ? 'basic-menu-notifi' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick2} />
                  </Tooltip>
                </Box>
              </Box>
              <Menu
                id="basic-menu-notifi"
                anchorEl={anchorEl2}
                open={open2}
                onClose={handleClose2}
                elevation={0}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                TransitionProps={{ className: "notifi-mess-menu-list" }}
              >
                <MenuItem className="menu-item-today item-mess" onClick={handleClose3}>7 New Notifications</MenuItem>
                <MenuItem className="menu-item-today item-mess" onClick={handleClose3}>
                  <Box className="menu-item-mess-content">
                    <Box className="item-icon">
                      <DnsOutlinedIcon />
                    </Box>
                    <Box className="item-mess-title">
                      <Typography component="h3" className='menu-header-title'> Update complete</Typography>
                      <Typography component="h6" className='menu-header-subtitle'>Restart server to complete update.</Typography>
                    </Box>
                  </Box>
                </MenuItem>
                <MenuItem className="menu-item-today item-mess" onClick={handleClose3}>
                  <Box className="menu-item-mess-content">
                    <Box className="item-icon">
                      <PersonAddOutlinedIcon />
                    </Box>
                    <Box className="item-mess-title">
                      <Typography component="h3" className='menu-header-title'> New connection</Typography>
                      <Typography component="h6" className='menu-header-subtitle'>Anna accepted your request.</Typography>
                    </Box>
                  </Box>
                </MenuItem>
                <MenuItem className="menu-item-today item-mess" onClick={handleClose3}>
                  <Box className="menu-item-mess-content">
                    <Box className="item-icon">
                      <NotificationsNoneIcon />
                    </Box>
                    <Box className="item-mess-title">
                      <Typography component="h3" className='menu-header-title'> Lorem ipsum</Typography>
                      <Typography component="h6" className='menu-header-subtitle'>Aliquam ex eros, imperdiet vulputate hendrerit et</Typography>
                    </Box>
                  </Box>
                </MenuItem>
                <MenuItem className="menu-item-today item-mess new-login" onClick={handleClose3}>
                  <Box className="menu-item-mess-content">
                    <Box className="item-icon">
                      <HomeOutlinedIcon />
                    </Box>
                    <Box className="item-mess-title">
                      <Typography component="h3" className='menu-header-title'> New login</Typography>
                      <Typography component="h6" className='menu-header-subtitle'>Login from 192.186.1.1.</Typography>
                    </Box>
                  </Box>
                </MenuItem>
                <MenuItem className="menu-item-today item-mess" onClick={handleClose3}>Show all notifications</MenuItem>
              </Menu>
              <Box className="tooltip-btn-menu-social">
                <Tooltip title="Language">
                  <Avatar
                    alt={t("alt")}
                    src={t("img")}
                    id="basic-button-language"
                    aria-controls={open ? 'basic-menu-language' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick1} />
                </Tooltip>
              </Box>
              <Menu
                id="basic-menu-language"
                anchorEl={anchorEl1}
                open={open1}
                onClose={changeLanguage}
                elevation={0}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem className="menu-item-today" id="eng" onClick={changeLanguage}>English</MenuItem>
                <MenuItem className="menu-item-today" id="french" onClick={changeLanguage}>French</MenuItem>
                <MenuItem className="menu-item-today" id="german" onClick={changeLanguage}>German</MenuItem>
                <MenuItem className="menu-item-today" id="dutch" onClick={changeLanguage}>Dutch</MenuItem>
              </Menu>
              <Box className="tooltip-btn-menu-social">
                <Tooltip title="Account">
                  <PowerSettingsNewIcon
                    id="basic-button-account"
                    aria-controls={open ? 'basic-menu-account' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick} />
                </Tooltip>
              </Box>
              <Menu
                id="basic-menu-account"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                elevation={0}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem className="menu-item-today" onClick={handleClose}>Profile</MenuItem>
                <MenuItem className="menu-item-today" onClick={handleClose}>Sign out</MenuItem>
              </Menu>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </>
  )
}

export default HeaderCP