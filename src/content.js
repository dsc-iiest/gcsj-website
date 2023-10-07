import { Box, Divider, Toolbar, Typography } from "@mui/material";
import codeIIEST from './codeIIEST.png'
import gdsc from './gdscLogo.png'
import MediaCard from "./profile";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import Profile1 from "./Jyoti.jpg"
import Profile2 from "./Arnab.jpeg"

export default function Content() {
    return (
        <Box sx = {{paddingTop:"2rem", background: "hsl(0, 0%, 95%)"}}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Typography variant='h3' sx={{ padding: "1.5rem", paddingTop: 0, fontWeight: 600 }}>
                    <RocketLaunchIcon style={{ fontSize: "2.5rem" }} />About the Program
                </Typography>

                <Typography variant='body' sx={{ maxWidth: "75ch", minwidth: "50ch", padding: "1rem"}}>
                    The GoogleCloudReady Facilitator program will provide you an opportunity to kickstart your career in cloud and get hands on practice on Google Cloud - the tool that powers apps like Google Search, Gmail and YouTube.<br /><br />
                    Along the way, you will learn & practice concepts like computing, application development, big data & machine learning using cloud & if you get stuck, you will have your "Facilitators" who are specially trained on Google Cloud to help. 😎 Check out the official website to know more about this program
                </Typography>
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
                </Box>

                <Box className="logohome" ><img src = {codeIIEST} style = {{maxWidth: "10rem"}}/><img src = {gdsc} style = {{maxWidth: "20rem"}}/></Box>

                <Typography variant='h3' sx={{ justifyContent: "center", padding: "1.5rem", paddingTop: "3rem", fontWeight: 600 }}>
                    <RocketLaunchIcon style={{ fontSize: "2.5rem" }} />Our Facilitators
                </Typography>

                <Toolbar sx={{ display: "flex", flexWrap: "wrap", textAlign: "center", maxWidth: "75ch" }}>
                    Along the way, you will learn & practice concepts like computing, application development, big data & machine learning using cloud & if you get stuck, you will have your "Facilitators" who are specially trained on Google Cloud to help.
                </Toolbar>

                <MediaCard name={"Jyoti Jaiswal"} description={"Hey, I am Jyoti Jaiswal. I like to introduce myself as a good observer, listener and reader. I am passionate about technology and human pyschology. I like to contribute in tech-communities. Besides that, I love cats more than I love dogs. Let's connect with me on twitter."} profile={Profile1} />

                <MediaCard name={"Arnab Sen"} description={"I am a Software Developer with experience in Web Development, Automation, and Content Writing. For the past 2 years, I have worked around an immense variety of technologies and frameworks such as React, Vue in Frontend and Node, Flask, Rails in the Backend."} profile={Profile2} />
            </Box>
        </Box>
    );
}