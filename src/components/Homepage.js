import Content from "./content";
import { CssBaseline, Box, Typography} from "@mui/material";
import ScrollToContent from "./scrollBanner";
function Homepage() {

    return (
        <>
            <CssBaseline />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyItems: "center",
                    textAlign: "center",
                    marginTop: "60px"
                }}
                className="banner"
            >
                <Typography
                    className="bannerText"
                    sx={{
                        fontFamily: "Poppins",
                        fontSize: "4.2em",
                        fontWeight: "bold",
                        lineHeight: "5rem",
                    }}
                >
                    {" "}
                    Cloud Study Jams
                </Typography>
                <ScrollToContent />
            </Box>
            <Content />
            <CssBaseline />
        </>
    );
}

export default Homepage;
