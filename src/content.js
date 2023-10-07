import { Box, Divider, Toolbar, Typography } from "@mui/material";
import codeIIEST from './codeIIEST.png'
import MediaCard from "./profile";
import rocket from './rocket.png'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import Profile1 from "./Jyoti.jpg"
import Profile2 from "./Arnab.jpeg"
import GdscLogo from "./gdscLogo.png"

export default function Content() {
    return (
        <Box>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",

            }}>
                <Box sx={{
                    backgroundColor: "#00000090",
                    backdropFilter: "blur(0.2rem)",
                    borderRadius: "1.5rem",
                    borderTop: "0.5rem solid #da483b",
                    borderBottom: "0.5rem solid #ff9e0f",
                    borderLeft: "0.5rem solid #1ca45c",
                    borderRight: "0.5rem solid #4486f4",
                    padding: "1rem",
                    margin: "1rem",
                    width: "65vw",
                }}>
                    <Typography
                        variant="h3"
                        className="Question"
                        sx={{
                            padding: "1.5rem",
                            fontWeight: 600
                        }}><BubbleChartIcon style={{ fontSize: "2.5rem" }} />About this Event
                    </Typography>
                    <Toolbar className="Text">
                        The GoogleCloudReady Facilitator program will provide you an opportunity to kickstart your career in cloud and get hands on practice on Google Cloud - the tool that powers apps like Google Search, Gmail and YouTube.<br /><br />

                        Along the way, you will learn & practice concepts like computing, application development, big data & machine learning using cloud & if you get stuck, you will have your "Facilitators" who are specially trained on Google Cloud to help. 😎 Check out the official website to know more about this program
                    </Toolbar>
                </Box>
                <img src={rocket} style=
                    {{
                        "width": "32rem",
                        "position": "relative",
                        "top": "0.8rem",
                        "left": "-10rem",
                        "marginRight": "0.4rem"
                    }} />

            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem"
            }}>
                <Box sx={{
                    display: "flex",
                }}>
                    <img src={codeIIEST} style={{ "width": "7rem", "margin": "3rem", "justifySelf": "center", "alignSelf": "center" }} />
                    <img src={GdscLogo} style={{ "width": "22rem", "margin": "3rem", "justifySelf": "center", "alignSelf": "center" }} />
                </Box>

                <Typography variant='h3' sx={{ justifyContent: "center", padding: "1.5rem", paddingTop: 0, fontWeight: 600 }}>
                    <RocketLaunchIcon style={{ fontSize: "2.5rem" }} />Our Facilitators
                </Typography>

                <Toolbar variant='h6' sx={{ display: "flex", flexWrap: "wrap", textAlign: "center", maxWidth: "60ch" }}>
                    Along the way, you will learn & practice concepts like computing, application development, big data & machine learning using cloud & if you get stuck, you will have your "Facilitators" who are specially trained on Google Cloud to help.
                </Toolbar>

                <MediaCard name={"Jyoti Jaiswal"} description={"Hey, I am Jyoti Jaiswal. I like to introduce myself as a good observer, listener and reader. I am passionate about technology and human pyschology. I like to contribute in tech-communities. Besides that, I love cats more than I love dogs. Let's connect with me on twitter."} profile={Profile1} />

                <MediaCard name={"Arnab Sen"} description={"I am a Software Developer with experience in Web Development, Automation, and Content Writing. For the past 2 years, I have worked around an immense variety of technologies and frameworks such as React, Vue in Frontend and Node, Flask, Rails in the Backend."} profile={Profile2} />
            </Box>
        </Box>
    );
}