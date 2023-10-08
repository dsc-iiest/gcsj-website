import * as React from 'react';
import Typography from '@mui/material/Typography';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Box, IconButton } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function MediaCard({ name, description, profile }) {
    return (
        <Box sx={{ display: "flex", margin: "2rem", padding: "1rem", flexDirection: "column", textAlign: "center", justifyContent: "center", alignItems: "center", background: "#fff", borderRadius: "1.3rem"}}>
            <Typography variant="body2" sx={{ fontSize: "2.5rem", fontWeight: 900, fontFamily: "poppins" }}>
                {name}
            </Typography>
            <img src={profile} className='profilepic' />
            <Typography variant="inherit" color="inherit" sx={{
                fontStyle: "italic",
                maxWidth: "50ch",
                display: "flex", flexWrap: "wrap",
            }}>
                <FormatQuoteIcon sx={{ fontSize: "3rem", transform: "rotate(180deg)" }} />
                {description}
            </Typography>
            {/* {<Button variant='contained' sx = {{my: "1rem"}}>View profile</Button>} */}
            <Box sx={{ display: "flex", "justifyContent": "center" }}>
                <IconButton size="large"><TwitterIcon /></IconButton>
                <IconButton size="large"><GitHubIcon /></IconButton>
                <IconButton size="large"><LinkedInIcon /></IconButton>
            </Box>
        </Box>
    )
}