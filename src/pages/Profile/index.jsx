import { Avatar, Box, Breadcrumbs, Button, Chip, Divider, Grid, Link, Typography } from '@mui/material'
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LuggageIcon from '@mui/icons-material/Luggage';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import BarChartProfile from '../../component/modules/BarChartProfile';
import CardProfile from '../../component/modules/CardProfile';
import TableProfile from '../../component/modules/TableProfile';

const chip = [
  {
    language: "HTML",
  },
  {
    language: "Javascript",
  },
  {
    language: "Sass",
  },
  {
    language: "React",
  },
  {
    language: "Redux",
  },
  {
    language: "Next.js",
  },
  {
    language: "Material UI",
  },
  {
    language: "UI",
  },
  {
    language: "UX",
  },
];

function Profile() {
  return (
    <Box>
      <Grid container className='page-main-content'>
        <Box className="page-chat-header">
          <Typography variant="h5" component="h3" className='page-chat-header-title'> Profile</Typography>
          <Breadcrumbs aria-label="breadcrumb" className="page-chat-header-breadcrumb">
            <Typography >Dashboard</Typography>
            <Typography >Pages</Typography>
            <Typography >Profile</Typography>
          </Breadcrumbs>
        </Box>
        <Divider variant="middle" className="page-main-divider chat-divider" />
        <Grid item xs={12} className="page-profile flex" >
          <Grid item xs={2.8} className="content-left">
            <Card elevation={0} className="profile-card profile-card1">
              <CardContent sx={{ padding: "15px 16px" }}>
                <Typography component="h6" className='profile-card1-header'> Profile Details</Typography>
                <Box className="profile-card1-content">
                  <Avatar alt="avatar-profile" src="https://mira.bootlab.io/static/img/avatars/avatar-1.jpg" sx={{ width: "128px", height: "128px" }} />
                  <Typography component="p" className='profile-card1-subtitle one'> Lucy Lavender</Typography>
                  <Typography component="p" className='profile-card1-subtitle'> Lead Developer</Typography>
                  <Box>
                    <Button className="profile-card1-btn" variant="contained" size="small">Follow</Button>
                    <Button className="profile-card1-btn" variant="contained" size="small">Message</Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Card elevation={0} className="profile-card profile-card2">
              <CardContent sx={{ padding: "15px 16px" }}>
                <Typography component="h6" className='profile-card1-header'> Skills</Typography>
                <Box className="profile-card2-content flex">
                  {chip.map((item) => (
                    <Chip key={Math.random()} label={item.language} className="profile-card2-content-chip"/>
                  ))}
                </Box>
              </CardContent>
            </Card>
            <Card elevation={0} className="profile-card profile-card3">
              <CardContent sx={{ padding: "15px 16px" }}>
                <Typography component="h6" className='profile-card1-header'> About</Typography>
                <Box className="profile-card3-content">
                  <Box className="profile-card3-content-subtitle flex">
                    <HomeOutlinedIcon />
                    <Typography component="span" className='profile-card3-subtitle'>Lives in<Link href="#">San Fransisco, SA</Link></Typography>
                  </Box>
                  <Box className="profile-card3-content-subtitle flex">
                  <LuggageIcon />
                    <Typography component="span" className='profile-card3-subtitle'>Works at<Link href="#"> Material UI</Link></Typography>
                  </Box>
                  <Box className="profile-card3-content-subtitle flex">
                    <RoomOutlinedIcon />
                    <Typography component="span" className='profile-card3-subtitle'>Lives in <Link href="#">Boston</Link></Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
            <Card elevation={0} className="profile-card profile-card3">
              <CardContent sx={{ padding: "15px 16px" }}>
                <Typography component="h6" className='profile-card1-header'> Elsewhere</Typography>
                <Box className="profile-card3-content card4">
                  <Box className="profile-card3-content-subtitle flex">
                    <LaunchOutlinedIcon />
                    <Link href="#">lucylavender.io</Link>
                  </Box>
                  <Box className="profile-card3-content-subtitle flex">
                  <TwitterIcon />
                    <Link href="#">Twitter</Link>
                  </Box>
                  <Box className="profile-card3-content-subtitle flex">
                    <FacebookOutlinedIcon />
                     <Link href="#">Facebook</Link>
                  </Box>
                  <Box className="profile-card3-content-subtitle flex">
                    <InstagramIcon />
                     <Link href="#">Instagram</Link>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={0.25} ></Grid>
          <Grid item xs={8.95}>
            <BarChartProfile />
            <CardProfile />
            <TableProfile />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Profile