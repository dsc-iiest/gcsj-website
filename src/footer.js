import { Box, IconButton, Typography, Link} from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailIcon from '@mui/icons-material/Mail';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GdscLogo from './gdscLogo.png'
import codeIIEST from './codeIIEST.png'
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
    return (
        <Box sx = {{color: "rgba(255, 255, 255, 0.48)"}}>
            <Box sx={{
                display: 'flex',
                backgroundColor: "hsl(0, 0.00%, 10%)",
                gap: "1rem",
                padding: "1rem",
                alignItems: "center",
                width: "100%",
                flexWrap:"wrap"
            }}>
                <Box sx={{display: "flex", alignItems: "center", width: "100%", gap: "3rem",justifyContent :"center" }}>
                    <img src={codeIIEST} style={{ "width": "3.5rem" }} />
                    <img src={GdscLogo} style={{ "width": "13rem" }} />
                </Box>
                
            </Box>

            <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "hsl(0, 0.00%, 10%)", justifyContent: "center", paddingTop: "1rem" }}>
                <Typography sx={{ textAlign: "center" }}>Stay in the loop?</Typography>
                <Box sx={{ display: "flex", "justifyContent": "center", py: "0.3rem"}}>
                    <IconButton className="footerhover" sx={{color:"#cdcdcd"}}><TwitterIcon /></IconButton>
                    <IconButton className="footerhover" sx={{color:"#cdcdcd"}}><GitHubIcon /></IconButton>
                    <IconButton className="footerhover" sx={{color:"#cdcdcd"}}><FacebookIcon /></IconButton>
                    <IconButton className="footerhover" sx={{color:"#cdcdcd"}}><MailIcon /></IconButton>
                    <IconButton className="footerhover" sx={{color:"#cdcdcd"}}><YouTubeIcon /></IconButton>
                    <IconButton className="footerhover" sx={{color:"#cdcdcd"}}><LinkedInIcon /></IconButton>
                </Box>
                <Box sx={{ display: "flex", "justifyContent": "center", paddingBottom: "0.5rem", paddingTop: "1rem"}}>
                    <Typography 
                        sx={{
                        color: "rgba(255, 255, 255, 0.48)",
                        fontFamily: "poppins",
                        display: "flex",
                        flexWrap :"wrap",
                        justifyContent:"center"
                    }}>
                        Made with <FavoriteIcon sx = {{color: "red", position: "relative", mx: "0.5rem"}}/> by <Link className="footerhover" href="#" sx={{textDecoration: "none" ,fontFamily: "poppins",color: "white", px: "0.5rem"}}>Soumyajit Karmakar</Link> and <Link className="footerhover" href="#" sx={{textDecoration: "none" ,fontFamily: "poppins",color: "white", px: "0.5rem"}}>Abhijit Karmakar</Link>
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}