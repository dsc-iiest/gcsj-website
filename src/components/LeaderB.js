import LeaderBcontent from "./LeaderBContent";
import { Box, Typography } from "@mui/material";
import ScrollToContent from "./scrollBanner";

const Report = () => {
    return (
        <>
            <Box className="Lbanner" sx = {{marginTop: "60px"}}>
                <Typography
                    sx={{
                        fontWeight: 600,
                        padding: "2rem",
                        fontSize: "min(12vw, 4rem)",
                    }}
                >
                    LeaderBoard
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        textAlign: "center",
                        minWidth: "28ch",
                        maxWidth: "70ch",
                        color: "hsla(0, 0%, 100%, 0.65)",
                    }}
                >
                    Discover the top performers and track your progress with our
                    leaderboard. Join the competition and climb the ranks to
                    showcase your skills!
                </Typography>
                <ScrollToContent />
            </Box>
            <LeaderBcontent />
        </>
    );
};

export default Report;
