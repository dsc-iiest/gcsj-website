import { Box, Button, IconButton, Typography, Divider, Link } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import GdscLogo from './gdscLogo.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import codeIIEST from './codeIIEST.png'
import { Link as RouterLink } from 'react-router-dom';



export default function Footer() {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                backgroundColor: "rgb(1, 0, 50)",
                gap: "1rem",
                padding: "1rem",
                alignItems: "start",
                justifyContent: "left",
            }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <img src={GdscLogo} style={{ "width": "15rem", paddingBottom: "2rem" }} />
                    <img src={codeIIEST} style={{ "width": "3rem", paddingBottom: "2rem" }} />
                </Box>
                <Typography sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "left"
                }}>

                    <Typography color="inherit" sx={{ px: "2rem" }}>About Us</Typography>
                    <Typography sx={{ color: "#969696", fontSize: "0.8rem", maxWidth: "30ch", px: "2rem", paddingTop: "1rem" }}>GDSC and codeIIEST are in collaboration</Typography>


                </Typography>

                <Typography sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "left"
                }}>
                    <Typography color="inherit" sx={{ px: "2rem" }}>Contact Us</Typography>
                    <Link href="#" sx={{ color: "#969696", fontSize: "0.8rem", maxWidth: "30ch", px: "2.2rem" }}><EmailIcon sx={{ position: "relative", top: "0.4rem", fontSize: "1.2rem", m: "0.2rem" }} />abcde@gmail.com</Link>
                </Typography>

                <Typography sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "left"
                }}>
                    <Typography color="inherit" sx={{ px: "2rem" }}>Quick links</Typography>
                    <Link href="#" sx={{ color: "#969696", fontSize: "0.8rem", maxWidth: "30ch", px: "2.2rem" }}><HomeIcon sx={{ position: "relative", top: "0.4rem", fontSize: "1.2rem", m: "0.2rem" }} />Home</Link>
                    <Link href="#" sx={{ color: "#969696", fontSize: "0.8rem", maxWidth: "30ch", px: "2.2rem" }}><FormatListBulletedIcon sx={{ position: "relative", top: "0.4rem", fontSize: "1.2rem", m: "0.2rem" }} />Report</Link>
                    <Link href="#" sx={{ color: "#969696", fontSize: "0.8rem", maxWidth: "30ch", px: "2.2rem" }}><LeaderboardIcon sx={{ position: "relative", top: "0.4rem", fontSize: "1.2rem", m: "0.2rem" }} />Leaderboard</Link>
                </Typography>



            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "rgb(1, 0, 50)", justifyContent: "center" }}>
                <Divider />
                <Typography sx={{ textAlign: "center" }}>Stay in the loop?</Typography>
                <Box sx={{ display: "flex", "justifyContent": "center", py: "0.3rem" }}>
                    <IconButton sx={{ px: "2rem" }}><TwitterIcon /></IconButton>
                    <IconButton sx={{ px: "2rem" }}><GitHubIcon /></IconButton>
                    <IconButton sx={{ px: "2rem" }}><FacebookIcon /></IconButton>
                    <IconButton sx={{ px: "2rem" }}><MailIcon /></IconButton>
                    <IconButton sx={{ px: "2rem" }}><YouTubeIcon /></IconButton>
                    <IconButton sx={{ px: "2rem" }}><LinkedInIcon /></IconButton>
                </Box>
            </Box>
        </Box>
    )
}