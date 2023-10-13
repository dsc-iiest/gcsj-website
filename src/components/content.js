import { Box, Divider, Toolbar, Typography } from "@mui/material";
import codeIIEST_light from '../assets/codeIIEST_light.png'
import gdsc from '../assets/gdscLogo.png'
import MediaCard from "./profile";

import Profile1 from "../assets/rishabDugar.jpeg"

export default function Content() {
    return (
        <Box sx = {{paddingTop:"2rem", background: "hsl(0, 0%, 95%)"}}>
            <Box
                sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}>
                <Typography variant='h3' sx={{textAlign: "center", padding: "1.5rem", paddingTop: 0, fontWeight: 600 }}>
                    About the Program
                <Divider />
                </Typography>

                <Typography variant='body' sx={{textAlign: "center", maxWidth: "75ch", minwidth: "50ch", padding: "1rem"}}>
                    The GoogleCloudReady Facilitator program will provide you an opportunity to kickstart your career in cloud and get hands on practice on Google Cloud - the tool that powers apps like Google Search, Gmail and YouTube.<br /><br />
                    Along the way, you will learn & practice concepts like computing, application development, big data & machine learning using cloud & if you get stuck, you will have your "Facilitators" who are specially trained on Google Cloud to help. 😎 Check out the official website to know more about this program
                </Typography>
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "1rem",
                
            }}>
                <Box className="logohome" sx = {{background: "transparent"}} >
                    <img src = {codeIIEST_light} style = {{maxWidth: "10rem"}}/>
                    <img src = {gdsc} style = {{maxWidth: "20rem"}}/>
                </Box>

                <Typography variant='h3' sx={{textAlign: "center", justifyContent: "center", padding: "1.5rem", paddingTop: "3rem", fontWeight: 600 }}>
                    Our Facilitators
                    <Divider />
                </Typography>

                <Toolbar sx={{ display: "flex", flexWrap: "wrap", textAlign: "center", maxWidth: "75ch" }}>
                    Along the way, you will learn & practice concepts like computing, application development, big data & machine learning using cloud & if you get stuck, you will have your "Facilitators" who are specially trained on Google Cloud to help.
                </Toolbar>

                <MediaCard name={"Rishab Dugar"} description={"Passionate and dedicated Full-stack Web Developer proficient in both front-end and back-end development. Leveraging a solid foundation in MERN stack (MongoDB, Express.js, React, Node.js) and expertise in building robust RESTful APIs, I excel in delivering end-to-end solutions that seamlessly integrate user interfaces with powerful backend functionality. With a strong focus on creating captivating user experiences, I possess a keen eye for design and have successfully crafted visually appealing UIs and landing pages."} profile={Profile1} githubLink = {"https://github.com/DugarRishab"} linkedInLink = {"https://www.linkedin.com/in/dugar-rishab/"} />
            </Box>
        </Box>
    );
}
