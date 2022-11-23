import { Avatar, Box, Button, Divider, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';

const chat = [
  {
    src1: "https://mira.bootlab.io/static/img/avatars/avatar-2.jpg",
    src2: "https://mira.bootlab.io/static/img/avatars/avatar-1.jpg",
    title1: "Remy Sharp",
    title2: "You",
    subtitle1: "Sit meis deleniti eu, pri vidit meliore docendi ut, an eum erat animal commodo.",
    subtitle2: "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.",
    time1: "20 minutes ago",
    time2: "12 minutes ago"
  },
  {
    src1: "https://mira.bootlab.io/static/img/avatars/avatar-2.jpg",
    src2: "https://mira.bootlab.io/static/img/avatars/avatar-1.jpg",
    title1: "Remy Sharp",
    title2: "You",
    subtitle1: "Cum ea graeci tractatos. 😄",
    subtitle2: "ras pulvinar, sapien id vehicula aliquet, diam velit elementum orci. 👍",
    time1: "8 minutes ago",
    time2: "5 minutes ago"
  },
  {
    src1: "https://mira.bootlab.io/static/img/avatars/avatar-2.jpg",
    title1: "Remy Sharp",
    subtitle1: "Lorem ipsum dolor sit amet, vis erat denique in, dicunt prodesset te vix.",
    time1: "3 minutes ago",
    subtitle2: "",
  },
]

function ChatBox() {
  return (
    <Grid item xs={12} className="content-right">
      <Box className="content-right-chat">
        {chat.map((chat) =>
          <Box key={Math.random()} className="content-right-mess ">
            <Box className="content-right-messenger first ">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar className="content-right-img" alt="remy" src={chat.src1} />
                <Box className="content-right-user">
                  <Typography component="h3" className='content-right-title'> {chat.title1}</Typography>
                  <Typography component="p" className='content-right-subtitle'>{chat.subtitle1}</Typography>
                </Box>
              </Box>
              <Typography component="p" className='content-right-time'>{chat.time1}</Typography>
            </Box>
            { chat.subtitle2 === "" ? "" :
            <Box className="content-right-messenger second ">
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar className="content-right-img" alt="Lucy" src={chat.src2} />
                <Box className="content-right-user">
                  <Typography component="h3" className='content-right-title'> {chat.title2}</Typography>
                  <Typography component="p" className='content-right-subtitle'>{chat.subtitle2}</Typography>
                </Box>
              </Box>
              <Typography component="p" className='content-right-time'>{chat.time2}</Typography>
            </Box> 
            }           
          </Box>
        )}
      </Box>
      <Divider variant="middle" className="content-right-divider" />
      <Box className="content-right-sent flex align-items-center">
        <TextField id="outlined-basic" label="Type your message" variant="outlined" className="content-right-input" />
        <Button className="content-right-btn-sent" variant="contained" endIcon={<SendIcon />}></Button>
      </Box>
    </Grid>
  )
}

export default ChatBox