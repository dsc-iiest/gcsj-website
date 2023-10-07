import LeaderBcontent from './LeaderBContent'
import Header from './Header';
import Footer from './footer';
import { CssBaseline, Box, Typography } from '@mui/material';

const Report = () => {
    return (
        <>
            <CssBaseline />
            <Header />
            <Box className="Lbanner">
                <Typography sx={{ fontWeight: 600, padding: "2rem", fontSize: "min(12vw, 4rem)" }}>LeaderBoard</Typography>
                <Typography variant="h6" sx={{ textAlign: "center", minWidth: "28ch", maxWidth: "70ch" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aliquam rem alias enim earum a ipsa. Voluptatibus, adipisci facere. Accusantium tenetur laboriosam, illum pariatur adipisci possimus suscipit iure cupiditate recusandae!</Typography>
            </Box >
            <LeaderBcontent />
            <CssBaseline />
            <Footer />
        </>
    )
}

export default Report