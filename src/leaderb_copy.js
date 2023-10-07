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
            <Box className="Lbanner" sx={{ display: "flex", placeItems: "center", paddingBottom: "2rem"}}>
                <Typography variant="h2" sx={{ fontWeight: 600, padding: "2rem" }}>Leaderboard</Typography>
                <Typography variant="h6" sx={{ textAlign: "center", minWidth: "28ch", maxWidth: "70ch" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aliquam rem alias enim earum a ipsa. Voluptatibus, adipisci facere. Accusantium tenetur laboriosam, illum pariatur adipisci possimus suscipit iure cupiditate recusandae!</Typography>
            </Box>
            <LContent />
            <CssBaseline />
        </>
    )
}

export default LeaderBoard;
