import React from 'react'
import { Avatar, Box, Divider, Grid, Paper, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import TextField from '@mui/material/TextField';
import ChatBox from '../../component/modules/Chatbox';
import { useState } from 'react';

function Chat() {
  const itemList = [
    {
      alt: "avatar1",
      src: "https://mira.bootlab.io/static/img/avatars/avatar-1.jpg",
      title: "Lucy Lavender",
      subtitle: "Sent a photo",
    },
    {
      alt: "avatar2",
      src: "https://mira.bootlab.io/static/img/avatars/avatar-2.jpg",
      title: "Remy Sharp",
      subtitle: "Coffee?",
    },
    {
      alt: "avatar3",
      src: "https://mira.bootlab.io/static/img/avatars/avatar-3.jpg",
      title: "Cassandra Mixon",
      subtitle: "Hello! 👋",
    },
  ];
  const [filteredList, setFilteredList] = new useState(itemList);

  const filterBySearch = (e) => {
    const query = e.target.value;
    var updatedList = [...itemList];
    updatedList = updatedList.filter((item) => {
      return item.title.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    setFilteredList(updatedList);
  };
  return (
    <Box>
      <Grid container className='page-main-content'>
        <Box className="page-chat-header">
          <Typography variant="h5" component="h3" className='page-chat-header-title'> Chat</Typography>
          <Breadcrumbs aria-label="breadcrumb" className="page-chat-header-breadcrumb">
            <Typography >Dashboard</Typography>
            <Typography >Pages</Typography>
            <Typography >Chat</Typography>
          </Breadcrumbs>
        </Box>
        <Divider variant="middle" className="page-main-divider chat-divider" />
        <Paper className="page-chat-content flex" elevation={0}>
          <Grid item xs={3} className="content-left">
            <Grid item xs={12} className="content-left-input">
              <Box sx={{ padding: "7px 8px 8px" }}>
                <TextField onChange={filterBySearch} id="outlined-basic" label="Search contacts" variant="outlined" className="content-left-input-text" />
              </Box>
              <Divider variant="middle" className="content-left-divider" />
              <Box sx={{ padding: "8px 0" }}>
                {filteredList.map((item, index) => (
                  <Box key={index} className="content-left-mess flex align-items-center">
                    <Box sx={{ position: "relative", margin: "0 16px 1px 0", display: "flex", alignItems: "center" }}>
                      <Avatar alt={item.alt} src={item.src} />
                      <span className='content-left-online'></span>
                    </Box>
                    <Box className="content-left-user">
                      <Typography component="h3" className='content-left-title'> {item.title}</Typography>
                      <Typography component="p" className='content-left-subtitle'>{item.subtitle}</Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <ChatBox />
          </Grid>
        </Paper>
      </Grid>
    </Box>
  )
}

export default Chat