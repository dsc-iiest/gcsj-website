import { Box, Divider, Toolbar, Typography } from "@mui/material";
import codeIIEST from './codeIIEST.png'
import won from './won.png'
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import GdscLogo from "./gdscLogo.png"

function TableRow({Rank, Name, Email, coursesDone,  genAI, you}) {
    var cls = you ? "tableyou" : "tabledata";
    return (
        <>
            <Box className={cls}>{Rank}</Box>
            <Box className={cls}>{Name}</Box>
            <Box className={cls}>{Email}</Box>
            <Box className={cls}>{coursesDone}</Box>
            <Box className={cls}>{genAI}</Box>
        </>
    )
}

export default function LContent() {
    return (
        <Box style = {{zIndex:"1"}}>
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
                    width: "75vw",
                }}>
                    <Typography
                        variant="h3"
                        className="Question"
                        sx={{
                            padding: "1.5rem",
                            fontWeight: 600
                        }}><BubbleChartIcon style={{ fontSize: "2.5rem" }} />LeaderBoard
                    </Typography>
                    <Box className="leadertable">
                        <Box className="tableHeader">Rank</Box>
                        <Box className="tableHeader">Name</Box>
                        <Box className="tableHeader">Email-Address</Box>
                        <Box className="tableHeader">No of Courses Done</Box>
                        <Box className="tableHeader">GenAI game status</Box>
                        <TableRow Rank={1} Name={"Abhijit Karmakar"} Email={"user@domain.com"} coursesDone={5} genAI={"Done"} you = {false}/>
                        <TableRow Rank={2} Name={"Abhijit Karmakar"} Email={"user@domain.com"} coursesDone={5} genAI={"Not Done"} you = {false}/>
                        <TableRow Rank={3} Name={"Abhijit Karmakar"} Email={"user@domain.com"} coursesDone={5} genAI={"Done"} you = {false}/>
                        <TableRow Rank={4} Name={"Abhijit Karmakar"} Email={"user@domain.com"} coursesDone={5} genAI={"Not Done"} you = {false}/>
                        <TableRow Rank={5} Name={"Abhijit Karmakar"} Email={"user@domain.com"} coursesDone={5} genAI={"Done"} you = {false}/>
                        <TableRow Rank={6} Name={"Abhijit Karmakar"} Email={"user@domain.com"} coursesDone={5} genAI={"Not Done"} you = {false}/>
                        <TableRow Rank={"You"} Name={"Abhijit Karmakar"} Email={"user@domain.com"} coursesDone={5} genAI={"Not Done"} you = {true}/>
                    </Box>
                </Box>
                <img src={won} style=
                    {{
                        "width": "35rem",
                        "position": "relative",
                        "left": "-15rem",
                        "margin-right": "0.4rem",
                        zIndex: -1
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
                    <img src={codeIIEST} style={{ "width": "7rem", "margin": "3rem", "justify-self": "center", "align-self": "center" }} />
                    <img src={GdscLogo} style={{ "width": "22rem", "margin": "3rem", "justify-self": "center", "align-self": "center" }} />
                </Box>

            </Box>
        </Box>
    );
}