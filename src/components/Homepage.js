import Content from './content';
import { CssBaseline, Box, Typography, Button} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Homepage() {
    return (
        <>
            <CssBaseline />
            <Box sx = {{alignContent: "center", justifyItems: "center", textAlign: "center"}} className="banner">
                <Typography className='bannerText' 
                            sx={{ fontFamily: "Poppins", 
                                  fontSize: "4.2em", 
                                  fontWeight: "bold",
                                  lineHeight: "5rem",
                                  }}> Cloud Study Jams</Typography>
                <Box sx={{paddingTop: "1rem"}}>
                    <Button
                        href='https://www.iiests.ac.in/' 
                        target="_blank" 
                        rel="noopener noreferrer"
                        size="large"
                        startIcon={<LocationOnIcon />}
                        sx={{
                            border: "0.2rem solid #ff9e0f",
                            color: "#ff9e0f",
                            borderRadius: "0.8rem",
                            margin: "0.8rem",
                            width: "12rem",
                            fontWeight: 700
                        }}>IIEST, Shibpur
                    </Button>
                    
                </Box>
            </Box>
            <Content />
            <CssBaseline />
        </>
    )
}

export default Homepage;