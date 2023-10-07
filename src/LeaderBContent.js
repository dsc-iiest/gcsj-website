import { Box, Divider, Toolbar, Typography } from "@mui/material";
import codeIIEST from './codeIIEST.png'
import gdsc from './gdscLogo.png'
import MediaCard from "./profile";
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import Profile1 from "./Jyoti.jpg"
import Profile2 from "./Arnab.jpeg"
import DataGridDemo from "./leaderbcontent_copy";

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

export default function Content() {
    return (
        <Box sx = {{display: "flex", 
                    justifyContent: "center", 
                    alignItems : "center",
                    padding: "20px"}}>
            <DataGridDemo />
        </Box>
    );
}