import * as React from 'react';
import Typography from '@mui/material/Typography';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { Avatar, Box, Button } from '@mui/material';

export default function MediaCard({name, description, profile}) {
    return (
        <Box sx = {{display: "flex",margin: "2rem", paddingTop: "1rem", flexDirection: "column", textAlign:"center", justifyContent:"center", alignItems: "center"}}>
            <Typography variant="body2" sx = {{fontSize:"3rem", fontWeight: 900, fontFamily: "poppins"}}>
            {name}
            </Typography>
            <img src = {profile} className='profilepic' />
            <Typography variant="inherit" color="inherit" sx = {{
                fontStyle: "italic",
                maxWidth: "50ch",
                display :"flex", flexWrap: "wrap",
                }}>
                <FormatQuoteIcon  sx = {{fontSize: "4rem", transform: "rotate(180deg)"}}/> 
                {description}
            </Typography>
            <Button variant='contained' sx = {{my: "1rem"}}>View profile</Button>

        </Box>
    )
}