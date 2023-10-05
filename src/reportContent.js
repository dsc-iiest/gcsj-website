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
        <Box className="Rbanner" sx = {{display: "flex", flexDirection: "column", placeItems: "center", paddingBottom : "2rem"}}>
            <Typography variant="h1" sx = {{fontWeight:600, paddingTop: "2rem"}}>Report</Typography>
            <Typography variant="h6" sx = {{textAlign : "center", width: "70ch"}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit aliquam rem alias enim earum a ipsa. Voluptatibus, adipisci facere. Accusantium tenetur laboriosam, illum pariatur adipisci possimus suscipit iure cupiditate recusandae!</Typography>
            <Box sx = {{backdropFilter: "blur(0.2rem)",
                    backgroundColor: "#00000090",
                    borderRadius: "1.5rem",
                    borderTop: "0.5rem solid #da483b",
                    borderBottom: "0.5rem solid #ff9e0f",
                    borderLeft: "0.5rem solid #1ca45c",
                    borderRight: "0.5rem solid #4486f4",
                    display: "flex", 
                    flexDirection: "column", 
                    placeItems: "center", 
                    p:"1rem",
                    width: "max-content",
                    marginTop: "1rem",}}>
                
                <Typography variant="body1" sx = {{fontSize: "1.5rem", "fontFamily": "poppins", fontWeight: 600}}>Enter your email</Typography>
                <Box sx = {{display: "flex", placeItems: "center"}}>
                    <AlternateEmailIcon sx = {{position: "relative", top: "0.5rem", left: "1rem"}} />
                    <TextField id="standard-basic" label="Email" variant="standard"
                        sx = {{
                            m:"2rem",
                            borderRadius: "1rem",
                            width: "40ch"
                        }} 
                        InputProps={{
                            style: inputStyle,

                        }}
                        InputLabelProps={{
                            style: labelStyle,
                        }}
                        />
                </Box>
                <Button variant="contained" sx = {{
                    borderRadius: "1.5rem"
                }}>Check Report</Button>

            </Box>
        </Box>
    )
}

export default ReportContent