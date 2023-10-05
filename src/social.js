import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import codeIIEST from './codeIIEST.png'
import GoogleIcon from './google.png'



export default function Footer(){
  return (
    <Box sx={{
        display: 'flex',
        backgroundColor: "rgb(1, 0, 50)",
        gap: "1rem",
        padding: "1rem"
    }}>
        <Typography sx={{
            fontSize: '1.3rem',
            fontFamily: 'Poppins',
            flexGrow: 1,
            color: "#fff"
        }}
        ><img src = {codeIIEST} style = 
            {{"width": "2rem", 
            "position": "relative", 
            "top": "0.3rem",
            "margin-right": "0.4rem"}}/>
            <img src = {GoogleIcon} style = 
            {{"height": "2.2rem", 
            "position": "relative", 
            "top": "0.5rem",
            "padding-left": "0.4rem",
            "margin-right": "0.2rem",
            "borderLeft":"2px solid #fff"}}/>
        </Typography>
        <IconButton><TwitterIcon /></IconButton>
        <IconButton><GitHubIcon /></IconButton>
        <IconButton><FacebookIcon /></IconButton>
        <IconButton><MailIcon /></IconButton>
        <IconButton><YouTubeIcon /></IconButton>

    </Box>
  )
}