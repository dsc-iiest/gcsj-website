import { Box, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import cloud from './GCRFicon.png'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const ReportContent = () => {
    const inputStyle = {
        color: 'white',
        fontFamily: "poppins",
    };
    const labelStyle = {
        color: '#61dafb',
        fontFamily: "poppins",
    };
    return (
        <Box className="Rbanner">
            <Typography variant="h2" sx={{ fontWeight: 600, padding: "2rem" }}>Report</Typography>
            <Typography variant="h6" sx={{ textAlign: "center", minWidth: "28ch", maxWidth: "70ch" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aliquam rem alias enim earum a ipsa. Voluptatibus, adipisci facere. Accusantium tenetur laboriosam, illum pariatur adipisci possimus suscipit iure cupiditate recusandae!</Typography>
            <Box sx={{
                background: "rgba(255, 255, 255, 0.35)",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 3px )",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                display: "flex",
                flexDirection: "column",
                placeItems: "center",
                p:"1rem",
                width: "30rem",
                minWidth: "20rem",
                marginTop: "1rem"
            }}>

            <Typography variant="body1" sx={{ fontSize: "1.5rem", "fontFamily": "poppins", fontWeight: 600 }}>Enter your email</Typography>
            <Box sx={{ display: "flex", placeItems: "center" }}>
                <AlternateEmailIcon sx={{ position: "relative", top: "0.5rem", left: "1rem" }} />
                <TextField id="standard-basic" label="Email" variant="standard"
                    sx={{
                        m: "2rem",
                        borderRadius: "1rem",
                        maxWidth: "40ch"
                    }}
                    InputProps={{
                        style: inputStyle,

                    }}
                    InputLabelProps={{
                        style: labelStyle,
                    }}
                />
            </Box>
            <Button variant="contained" sx={{
                borderRadius: "1.5rem"
            }}>Check Report</Button>

        </Box>
        </Box >
    )
}

export default ReportContent