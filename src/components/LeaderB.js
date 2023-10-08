import LeaderBcontent from './LeaderBContent'
import { CssBaseline, Box, Typography } from '@mui/material';

const Report = () => {
    return (
        <>

            <Box className="Lbanner">
                <Typography sx={{ fontWeight: 600, padding: "2rem", fontSize: "min(12vw, 4rem)" }}>LeaderBoard</Typography>
                <Typography variant="h6" sx={{ textAlign: "center", minWidth: "28ch", maxWidth: "70ch" }}>Discover the top performers and track your progress with our leaderboard. Join the competition and climb the ranks to showcase your skills!</Typography>
            </Box >
            <LeaderBcontent />

        </>
    )
}

export default Report