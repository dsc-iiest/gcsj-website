import Header from './Header';
import LContent from './LeadetBContent';
import Footer from './footer';
import { CssBaseline, Box, Typography, Button } from '@mui/material';
import ReplayCircleFilledIcon from '@mui/icons-material/ReplayCircleFilled';
import cloud from './GCRFicon.png'


function LeaderBoard() {
    return (
        <>
            <CssBaseline />
            <Header />
            <Box className="Lbanner">
                <img src={cloud} style = {{width: "10rem"}} />
                <Typography sx={{ fontFamily: "Poppins", fontSize: "4.5rem", fontWeight: "bold" }}> LeaderBoard</Typography>
                <Typography variant="h6" sx = {{width: "70ch"}}>Explore the achievements and accomplishments of our outstanding community members. Our leaderboard showcases the dedication, talent, and hard work of individuals who have excelled in various fields. </Typography>
                <Button
                    size="large"
                    startIcon={<ReplayCircleFilledIcon size="large"/>}
                    sx={{
                        my: "1rem",
                        borderTop: "0.3rem solid #da483b",
                        borderBottom: "0.3rem solid #ff9e0f",
                        borderLeft: "0.3rem solid #1ca45c",
                        borderRight: "0.3rem solid #4486f4",
                        color: "#da483b",
                        borderRadius: "1rem",
                        width: "12rem",
                        fontWeight: 700
                    }}>Refresh
                </Button>

            </Box >
            <LContent />
            <CssBaseline />
            <Footer />
        </>
    )
}

export default LeaderBoard;
