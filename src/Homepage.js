import Header from './Header';
import Content from './content';
import Footer from './footer';
import { CssBaseline, Box, Typography, Button} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import UpcomingIcon from '@mui/icons-material/Upcoming';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function Homepage() {
    return (
        <>
            <CssBaseline />
            <Header />
            <Box className="banner">
                <Typography className='bannerText' sx={{ fontFamily: "Poppins", fontSize: "4.5rem", fontWeight: "bold" }}> Cloud Study Jams</Typography>
                {/* <Box sx={{paddingTop: "1rem"}}>
                    <Button
                        size="large"
                        startIcon={<LocationOnIcon />}
                        sx={{
                            border: "0.2rem solid #da483b",
                            color: "#da483b",
                            borderRadius: "1rem 0 0 1rem",
                            width: "12rem",
                            fontWeight: 700
                        }}>IIEST, Shibpur
                    </Button>
                    <Button
                        size="large"
                        startIcon={<UpcomingIcon/>}
                        sx={{
                            border: "0.2rem solid #ff9e0f",
                            color: "#ff9e0f",
                            borderRadius: "0 0 0 0",
                            width: "16rem",
                            fontWeight: 700
                        }}>Upcoming Events
                    </Button>
                    <Button
                        size="large"
                        startIcon={<AutoStoriesIcon />}
                        sx={{
                            border: "0.2rem solid #1ca45c",
                            color: "#1ca45c",
                            borderRadius: "0 1rem 1rem 0",
                            width: "10rem",
                            fontWeight: 700
                        }}>Chapters
                    </Button>
                </Box> */}
            </Box>
            <Content />
            <CssBaseline />
            <Footer />
        </>
    )
}

export default Homepage;
