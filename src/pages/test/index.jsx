import { Avatar, Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

function Test() {
  const datas = [
    {
      subtitle1: "Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.",
      subtitle2: "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.",
      time1: "20",
      time2: "12"
    },
    {
      subtitle1: "Cum ea graeci tractatos. 😄",
      subtitle2: "ras pulvinar, sapien id vehicula aliquet, diam velit elementum orci. 👍",
      time1: "8",
      time2: "5"
    },
    {
      subtitle1: "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.",
      time1: "3",
      subtitle2: "",
    },
  ]
  const [subtitle, setSubtitle] = useState('');
  const [artists, setArtists] = useState([...datas]);
  const handleOnchange = (e) => {
    setSubtitle(e.target.value)
  } 
  const handleSent = () => {
    setArtists([...artists, { subtitle2: subtitle, subtitle1: '', time2:  Math.floor(Math.random() * 3)}]); 
    setSubtitle('');
  }
  return (
    <Grid item xs={12} className="content-right">
      <Box className="content-right-chat">
        {artists.map((artist) =>
          <Box key={Math.random()} className="content-right-mess ">
            {artist.subtitle1 === "" ? "" :
              <Box className="content-right-messenger first ">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar className="content-right-img" alt="remy" src="https://mira.bootlab.io/static/img/avatars/avatar-2.jpg" />
                  <Box className="content-right-user">
                    <Typography component="h3" className='content-right-title'>  Remy Sharp</Typography>
                    <Typography component="p" className='content-right-subtitle'>{artist.subtitle1}</Typography>
                  </Box>
                </Box>
                <Typography component="p" className='content-right-time'>{artist.time1} minutes ago</Typography>
              </Box>}
            {artist.subtitle2 === "" ? "" :
              <Box className="content-right-messenger second ">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar className="content-right-img" alt="Lucy" src="https://mira.bootlab.io/static/img/avatars/avatar-1.jpg" />
                  <Box className="content-right-user">
                    <Typography component="h3" className='content-right-title'> You</Typography>
                    <Typography component="p" className='content-right-subtitle'>{artist.subtitle2} </Typography>
                  </Box>
                </Box>
                <Typography component="p" className='content-right-time'>{artist.time2} minutes ago</Typography>
              </Box>
            }
          </Box>
        )}
      </Box>
      <Divider variant="middle" className="content-right-divider" />
      <Box className="content-right-sent flex align-items-center">
        <TextField value={subtitle}
          onChange={handleOnchange} id="outlined-basic" label="Type your message" variant="outlined" className="content-right-input" />
        <Button onClick={handleSent} className="content-right-btn-sent" variant="contained" endIcon={<SendIcon />}></Button>
      </Box>
    </Grid>
  )
}
export default Test