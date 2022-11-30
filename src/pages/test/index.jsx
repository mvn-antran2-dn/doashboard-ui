// import { Avatar, Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';
// import React, { useEffect, useState } from 'react';
// import SendIcon from '@mui/icons-material/Send';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';
// import Radio from '@mui/material/Radio';

// function Test() {
//   const datas = [
//     {
//       subtitle1: "Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.",
//       subtitle2: "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.",
//       time1: "20",
//       time2: "12"
//     },
//     {
//       subtitle1: "Cum ea graeci tractatos. 😄",
//       subtitle2: "ras pulvinar, sapien id vehicula aliquet, diam velit elementum orci. 👍",
//       time1: "8",
//       time2: "5"
//     },
//     {
//       subtitle1: "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.",
//       time1: "3",
//       subtitle2: "",
//     },
//   ]
//   const [subtitle, setSubtitle] = useState('');
//   const [artists, setArtists] = useState([...datas]);
//   const handleOnchange = (e) => {
//     setSubtitle(e.target.value)
//   }
//   const handleSent = () => {
//     setArtists([...artists, { subtitle2: subtitle, subtitle1: '', time2: Math.floor(Math.random() * 3) }]);
//     setSubtitle('');
//   }
//   //
//   // const [isBlue, setIsBlue] = useState(localStorage.getItem("theme") === "blue");
//   const [isDefault, setIsDefault] = useState(localStorage.getItem("theme") === "default");
//   useEffect(() => {
//     document
//       .getElementsByTagName("HTML")[0]
//       .setAttribute("data-theme", localStorage.getItem("theme"));
//   }, []);
//   const toggleThemeChange1 = () => {
//     console.log(isDefault);
//     if (isDefault) {
//       localStorage.setItem("theme", "default");
//       document
//         .getElementsByTagName("HTML")[0]
//         .setAttribute("data-theme", "blue");
//       setIsDefault(false);
//     } else {
//     console.count("toggleThemeChange1 F");

//       localStorage.setItem("theme", "blue");
//       document
//         .getElementsByTagName("HTML")[0]
//         .setAttribute("data-theme", "default");
//       setIsDefault(true);
//     } 
//   }
//   //
//   return (
//     <Grid item xs={12} className="content-right">
//       <Box className="content-right-chat">
//         {artists.map((artist) =>
//           <Box key={Math.random()} className="content-right-mess ">
//             {artist.subtitle1 === "" ? "" :
//               <Box className="content-right-messenger first ">
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Avatar className="content-right-img" alt="remy" src="https://mira.bootlab.io/static/img/avatars/avatar-2.jpg" />
//                   <Box className="content-right-user">
//                     <Typography component="h3" className='content-right-title'>  Remy Sharp</Typography>
//                     <Typography component="p" className='content-right-subtitle'>{artist.subtitle1}</Typography>
//                   </Box>
//                 </Box>
//                 <Typography component="p" className='content-right-time'>{artist.time1} minutes ago</Typography>
//               </Box>}
//             {artist.subtitle2 === "" ? "" :
//               <Box className="content-right-messenger second ">
//                 <Box sx={{ display: "flex", alignItems: "center" }}>
//                   <Avatar className="content-right-img" alt="Lucy" src="https://mira.bootlab.io/static/img/avatars/avatar-1.jpg" />
//                   <Box className="content-right-user">
//                     <Typography component="h3" className='content-right-title'> You</Typography>
//                     <Typography component="p" className='content-right-subtitle'>{artist.subtitle2} </Typography>
//                   </Box>
//                 </Box>
//                 <Typography component="p" className='content-right-time'>{artist.time2} minutes ago</Typography>
//               </Box>
//             }
//           </Box>
//         )}
//       </Box>
//       <Divider variant="middle" className="content-right-divider" />
//       <Box className="content-right-sent flex align-items-center">
//         <TextField value={subtitle}
//           onChange={handleOnchange} id="outlined-basic" label="Type your message" variant="outlined" className="content-right-input" />
//         <Button onClick={handleSent} className="content-right-btn-sent" variant="contained" endIcon={<SendIcon />}></Button>
//       </Box>
//       <FormControl>
//       <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
//       <RadioGroup
//         aria-labelledby="demo-radio-buttons-group-label"
//         defaultValue = "default"
//         name="radio-buttons-group"
//       >
//         <FormControlLabel value="default" control={<Radio 
//           onClick={() => toggleThemeChange1()}/>} label="Default" />
//         <FormControlLabel value="blue" control={<Radio 
//           onClick={() => toggleThemeChange1()} />} label="Blue" />
//       </RadioGroup>
//     </FormControl>
//     </Grid>
//   )
// }
// export default Test
import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { Grid, Typography } from '@mui/material';

export default function Test() {

  const theme = [
    {
      color: "dark",
      title: "Dark"
    },
    {
      color: "light",
      title: "Light"
    },
    {
      color: "default",
      title: "Default"
    },
    {
      color: "blue",
      title: "Blue"
    },
    {
      color: "green",
      title: "Green"
    },
    {
      color: "indigo",
      title: "Indigo"
    },
  ]

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Button variant="contained">Contained</Button>
      <Box>
        <Alert severity="info">This is an info alert — check it out!</Alert>
      </Box>
      <Box>
        <Grid item xs={6}>
          {theme.map((item) => (
          <Grid key={Math.random()} item xs={6}>
            <div className="btn-theme">
              <div className = {`btn-theme-color theme-${item.color}`}></div>
            </div>
            <Typography component="h6" className='menu-header-title'> {item.title}</Typography>
          </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );

  return (
    <div>
      {['right',].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}