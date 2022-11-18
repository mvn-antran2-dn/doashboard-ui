// import React from 'react'
// import Paper from '@mui/material/Paper';
// import { Grid, Box, Typography, Tooltip } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import TextareaAutosize from '@mui/material/TextField';
// import Logo from "../../../assets/images/logo"
// import Chip from '@mui/material/Chip';
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import LanguageIcon from "@mui/icons-material/Language";
// import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

// function HeaderCP() {
//   return (
//     <>
//       <Box>
//         <Grid container className='page-header'>
//           <Grid item xs={2.15} className="page-header-logo">
//             <Paper square elevation={0} className='pager-logo'>
//               <Box className='header-logo' sx={{ display: "flex", alignItems: "center" }}>
//                 <Logo />
//                 <Typography marginLeft={1.5}>Mira</Typography>
//                 <Chip label="PRO" color="success" size="small" />
//               </Box>
//             </Paper>
//           </Grid>
//           <Grid item xs={9.85} className="page-header-menu">
//             <Paper square elevation={0} sx={{ display: "flex", alignItems: "center" }}>
//               <Box className='header-menu' paddingX={1.5} paddingY={2.4} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
//                 <Box className='header-menu-search'>
//                   <SearchIcon></SearchIcon>
//                   <TextareaAutosize
//                     aria-label="empty textarea"
//                     placeholder="Search topics..."
//                     style={{ width: 200, height: 20 }}
//                     className="search-input"
//                   />
//                 </Box>
//                 <Box className='header-menu-social' sx={{ display: "flex", alignItems: "center" }}>
//                   <Box className='header-menu-social-box mess'>
//                     <Chip label="3" color="primary" size="small" />
//                     <Tooltip title="Messenger">
//                       <ChatBubbleOutlineIcon />
//                     </Tooltip>
//                   </Box>
//                   <Box className='header-menu-social-box notifi'>
//                     <Chip label="3" color="primary" size="small" />
//                     <Tooltip title="Notification">
//                       <NotificationsNoneIcon />
//                     </Tooltip>
//                   </Box>
//                   <Tooltip title="Language">
//                     <LanguageIcon />
//                   </Tooltip>
//                   <Tooltip title="Logout">
//                     <PowerSettingsNewIcon />
//                   </Tooltip>
//                 </Box>
//               </Box>
//             </Paper>
//           </Grid>
//         </Grid>
//       </Box>
//     </>
//   )
// }

// export default HeaderCP